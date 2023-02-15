import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/buttons/Button'
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'
import { shortenWalletAddress } from './api/util'
import { getNonceApi, postVerifyApi } from '../api/authAPIs'

export default function SIWE() {
    const { address, isConnected, isConnecting } = useAccount()
    const { disconnect } = useDisconnect()
    const { chain } = useNetwork()
    const { signMessageAsync } = useSignMessage()

    const { open, close, isOpen } = useWeb3Modal()
    const router = useRouter()
    const [phase, setPhase] = useState()

    const onSignIn = useCallback(async () => {
        if (phase === 'signin') return
        setPhase('signin')
        try {
            const chainId = chain.id
            if (!address || !chainId) return

            const { data: { nonce } } = await getNonceApi()

            const msg = new SiweMessage({
                domain: window.location.host,
                address,
                statement: "",
                uri: window.location.origin,
                version: "1",
                chainId,
                nonce
            })

            const sig = await signMessageAsync({
                message: msg.prepareMessage(),
            })

            // verify message on the backend
            const verifyRes = await fetch('', { // TODO refactor into api js files
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ msg, sig })
            })

            if (!verifyRes) throw new Error('Error verifying message on-chain')

            // send msg and sig to backend
            const serverRes = await postVerifyApi({
                message: msg.toMessage(),
                signature: sig
            })

            // TODO store JWT token
            console.log('serverRes', serverRes)

            // if verfied by backend route to dashboard
            router.push('/dashboard')

        }
        catch (err) {
            console.log(err)
        }
        finally {
            setPhase('wallet-connected')
        }
    }, [chain])

    const openModalForSignIn = () => {
        setPhase('wallet-connected')
        open()
    }

    return (
        <div className="h-screen w-screen grid grid-row-1 grid-col-1">
            <div className="place-self-center">
                <div className='flex justify-center'>
                    <div className="text-3xl font-semibold select-none mb-24">G R I F F I N</div>
                </div>

                <div className='flex justify-center'>
                    {isConnected ?
                        <div className='flex flex-col space-y-10'>
                            <div className='flex items-center w-96 justify-between'>
                                <div>
                                    <div className='text-xl font-semibold'>
                                        {shortenWalletAddress(address, 'short')}
                                    </div>
                                    <div className='text-md font-light'>
                                        connected through WalletConnect
                                    </div>
                                </div>
                                <Button
                                    size='md'
                                    color='outlinePurple'
                                    label='Disconnect'
                                    onClickHandler={disconnect}
                                />
                            </div>
                            {phase !== 'signin' ?
                                <Button
                                    size="lg"
                                    label="Sign-In with Ethereum"
                                    onClickHandler={onSignIn}
                                />
                                :
                                <div className='pt-5 flex justify-center items-center'>
                                    <ArrowPathIcon className="h-10 w-auto animate-spin mr-3" />
                                    <span className='text-lg font-normal'>Confirming sign in message in my wallet</span>
                                </div>}
                        </div>
                        :
                        <Button
                            size="lg"
                            label="Connect Wallet"
                            onClickHandler={openModalForSignIn}
                        />}
                </div>
            </div>
        </div>
    )
}