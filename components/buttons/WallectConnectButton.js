import { useState } from "react";
import Button from "./Button";
import { Web3Modal } from '@web3modal/react'



export default function WallectConnectButton() {
    const [openModal, setOpenModal] = useState(false)
    const [connected, setConnected] = useState(false)
    const [address, setAddress] = useState(null)

    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

    return (
        <>
            {
                address ?
                    <Button onClickHandler={disconnect}>
                        {address[0].substring(0, 10)}...
                    </Button>
                    :
                    <>
                        <Button
                            label="Connect Wallet"
                            onClickHandler={() => { setOpenModal(true) }}
                        />
                    </>}

            {openModal &&
                <Web3Modal
                    projectId={projectId}
                    theme="dark"
                    accentColor="default"
                    ethereumClient={ethereumClient}
                />}
        </>
    )
}