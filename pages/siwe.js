import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthClient, { generateNonce } from "@walletconnect/auth-client"
import Button from '../components/buttons/Button'
import { useWeb3Modal } from '@web3modal/react'

export default function SIWE() {
    const [authClient, setAuthClient] = useState()
    const [uri, setUri] = useState()
    const { open, close, isOpen } = useWeb3Modal()

    useEffect(() => {
        AuthClient.init({
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
            // relayUrl: process.env.NEXT_PUBLIC_API_URL,
            metadata: {
                name: "griffin-client",
                description: "authentication client for Griffin",
                url: window.location.host,
            }
        }).then(client => {
            setAuthClient(client)
            console.log(client)
        }).catch(err => {
            console.log("error creating auth client")
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (!authClient) return
        authClient.on("auth_response", (({ params }) => {
            if (Boolean(params.result?.s)) {
                console.log("authenticated")
                // store token
            }
            else {
                // error
                console.log(params)
            }
        }))
    }, [authClient])

    const onSignIn = useCallback(() => {
        if (!authClient) return
        authClient.request({
            aud: window.location.href,
            domian: window.location.hostname.split(".").slice(-2).join("."),
            chainId: "eip155:1",
            type: "eip4361",
            nonce: generateNonce()
        }).then(({ uri }) => {
            console.log(uri)
            open({ uri: uri })
            setUri(uri)
        }).catch(err => {
            console.log(err)
        })
    }, [authClient])

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
                    <Button
                        size="lg"
                        label="Sign-In with Ethereum"
                        onClickHandler={onSignIn}
                    />
                </div>
            </div>
        </div>
    )
}