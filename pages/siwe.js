import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthClient, { generateNonce } from "@walletconnect/auth-client"
import Button from '../components/buttons/Button'
import { useWeb3Modal } from '@web3modal/react'

const authClient = await AuthClient.init({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    metadata: {
        name: "griffin-client",
        description: "authentication client for Griffin",
        url: process.env.NEXT_PUBLIC_API_URL,
    }
})

authClient.on("auth_response", (({ params }) => {
    if (Boolean(params.result?.s)) {
        console.log("authenticated")

        // store token
    }
    else {
        // error
    }
}))

const { uri } = await authClient.request({
    aud: "http://localhost:3000/siwe",
    domian: "",
    chainId: "eip155:1",
    nonce: generateNonce()
})

export default function SIWE() {
    const { open, close, isOpen } = useWeb3Modal()




    const handleLogin = () => {
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
                        onClickHandler={handleLogin}
                    />
                </div>
            </div>
        </div>
    )
}