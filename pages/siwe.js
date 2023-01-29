import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/buttons/Button'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect } from 'wagmi'

export default function SIWE() {
    const { address, isConnected, isConnecting } = useAccount()
    const [uri, setUri] = useState()
    const { open, close, isOpen } = useWeb3Modal()




    const onSignIn = useCallback(() => {

    }, [])

    const openModalForSignIn = () => {
        // console.log(uri)
        open({ uri: uri })
    }

    return (
        <div className="h-screen w-screen grid grid-row-1 grid-col-1">
            <div className="place-self-center">
                <div className='flex justify-center'>
                    <div className="text-3xl font-semibold select-none mb-8">G R I F F I N</div>
                </div>

                <div className='flex justify-center'>
                    {isConnected ?
                        <Button
                            size="lg"
                            label="Sign-In with Ethereum"
                            onClickHandler={onSignIn}
                        />
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