import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { useState } from "react";
import Button from "./Button";

// create WallectConnect Provider
const provider = new WalletConnectProvider({
    infuraId: "460f40a260564ac4a4f4b3fffb032dad",
    qrcodeModalOptions: {
        desktopLinks: [
            'ledger',
            'tokenary',
            'wallet',
            'wallet 3',
            'secuX',
            'ambire',
            'wallet3',
            'apolloX',
            'zerion',
            'sequence',
            'punkWallet',
            'kryptoGO',
            'nft',
            'riceWallet',
            'vision',
            'keyring'
        ],
        mobileLinks: [
            "rainbow",
            "metamask",
            "argent",
            "trust",
            "imtoken",
            "pillar",
        ],
    },
})
// wrap with Web3 provider
const web3 = new Web3(provider)

// Subscribe to accounts change
provider.on("accountsChanged", (accounts) => {
    console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId) => {
    console.log(chainId);
});

// Subscribe to session disconnection
provider.on("disconnect", (code, reason) => {
    console.log(code, reason);
});



export default function WallectConnectButton() {
    const [connected, setConnected] = useState(false)
    const [address, setAddress] = useState(null)

    const connect = () => {
        // Enable session (triggers QR code modal)
        provider.enable()
            .then(addr => {
                setAddress(addr)
                setConnected(true)
            }).catch(reject => {
                console.log(reject)
            })
    }

    const disconnect = () => {
        provider.disconnect()
            .then(() => {
                setAddress(null)
                setConnected(false)
            })
    }

    return (address ?
        <Button onClickHandler={disconnect}>
            {address[0].substring(0, 10)}...
        </Button>
        :
        <>
            <Button
                label="Connect Wallet"
                onClickHandler={connect}
            />
        </>
    )
}