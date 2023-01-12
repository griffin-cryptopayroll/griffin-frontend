import { useEffect, useState } from "react";
import Button from "./Button";
import { useAccount, useDisconnect } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'
import Modal from "../Modal";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function WalletManager() {
    const { address, isConnected, isConnecting } = useAccount()
    const { disconnect } = useDisconnect()
    const { isOpen, open, close } = useWeb3Modal()
    const [walletModal, setWalletModal] = useState(false)

    return (<>
        {walletModal &&
            <Modal>
                <div className="flex justify-between">
                    <div className="text-2xl font-semibold">{address.substring(0, 5)}...{address.substring(38)}</div>
                    <XMarkIcon
                        className="h-6 w-auto mr-2 cursor-pointer"
                        onClick={() => { setWalletModal(false) }}
                    />
                </div>
                <Button onClickHandler={() => {
                    disconnect()
                    setWalletModal(false)
                }}>
                    Disconnect Wallet
                </Button>
            </Modal>
        }
        {isConnected ?
            <div className="flex space-x-2 items-center">
                <Button onClickHandler={() => { }}>
                    Deposit
                </Button>
                <Button onClickHandler={() => { }}>
                    Withdraw
                </Button>
                <Button onClickHandler={() => { setWalletModal(true) }}>
                    {address.substring(0, 7) + "..."}
                </Button>
            </div>
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

    </>)
}