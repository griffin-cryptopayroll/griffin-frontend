import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/buttons/Button'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage, generateNonce } from 'siwe'
import { shortenWalletAddress } from './api/util'

export default function SIWE() {
    const { address, isConnected, isConnecting } = useAccount()
    const { disconnect } = useDisconnect()
    const { chain } = useNetwork()
    console.log(chain)
    const { signMessageAsync } = useSignMessage()

    const { open, close, isOpen } = useWeb3Modal()
    const router = useRouter()
    const [phase, setPhase] = useState()
    const [nonce, setNonce] = useState()

    const fetchNonce = () => {
        const n = generateNonce()
        // DEBUG
        // console.log(n)
        // TODO replace hard-coded nonce with server generated nonce
        setNonce(n)
    }

    useEffect(() => {
        fetchNonce()
    }, [])

    const onSignIn = useCallback(async () => {
        try {
            const chainId = chain.id
            if (!address || !chainId) return

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

            // DEBUG
            console.log(verifyRes)

            if (!verifyRes) throw new Error('Error verifying message')

            // TODO send msg and sig to backend


            // TODO if verfied by backend route to dashboard
            router.push('/dashboard')
        }
        catch (err) {
            console.log(err)
            setNonce('')
            fetchNonce()
        }
    }, [chain])

    const openModalForSignIn = () => {
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
                            <Button
                                size="lg"
                                label="Sign-In with Ethereum"
                                onClickHandler={onSignIn}
                            />
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