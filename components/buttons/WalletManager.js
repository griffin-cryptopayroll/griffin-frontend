import { useEffect, useState } from "react";
import Button from "./Button";
import { useAccount, useDisconnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import Modal from "../Modal";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function WalletManager() {
    const { address, isConnected, isConnecting } = useAccount()
    const { disconnect } = useDisconnect()
    const { isOpen, open, close } = useWeb3Modal()
    const [walletModal, setWalletModal] = useState(false)

    return (<>
        {isConnected ?
            <Button onClickHandler={() => { setWalletModal(true) }}>
                {address.substring(0, 7) + "..."}
            </Button>
            :
            <Button onClickHandler={open}>
                {isConnecting && isOpen ?
                    <div className="flex">
                        <ArrowPathIcon className="h-6 w-auto mr-2 animate-spin" />
                        <div>Connecting...</div>
                    </div>
                    :
                    <div>Connect Wallet</div>
                }
            </Button>
        }
        {walletModal &&
            <Modal>
                <Button onClickHandler={() => {
                    disconnect()
                    setWalletModal(false)
                }}>
                    Disconnect Wallet
                </Button>
            </Modal>
        }
    </>)
}