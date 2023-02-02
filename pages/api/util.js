export function shortenWalletAddress(address, length) {
    switch (length) {
        case 'slim':
            return address.substring(0, 7) + "..."
        case 'short':
            return address.substring(0, 5) + '...' + address.substring(38)
        default:
            return address
    }
}