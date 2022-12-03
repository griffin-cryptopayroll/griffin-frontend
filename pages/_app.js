import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import { walletConnectModalState } from '../states';

import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import { Web3Modal } from '@web3modal/react'

// 1. Get projectID 
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// 2. Configure wagmi client
const chains = [chain.mainnet]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains, }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

// 1. Get projectID 
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

// 2. Configure wagmi client
const chains = [chain.mainnet]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains)

function MyApp({ Component, pageProps }) {

  return (
    <RecoilRoot>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
    </RecoilRoot>
  )
}

export default MyApp
