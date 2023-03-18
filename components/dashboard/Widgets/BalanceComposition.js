import { Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);
import { Doughnut } from 'react-chartjs-2';
import { useBalance } from 'wagmi';
import TOKENS from '../../../constants/ERC-20';

const { USDC, MATIC } = TOKENS

export default function BalanceComposition({ address }) {
    const ethBalance = useBalance({ address: address })
    // const ethBalance = useBalance({ address: address })
    const usdcBalance = useBalance({ address: address, token: USDC })
    const maticBalance = useBalance({ address: address, token: MATIC })

    const chartData = {
        labels: [
            'ETH',
            'MATIC',
            'USDC'
        ],
        datasets: [{
            label: 'Balance Compostition',
            data: [
                ethBalance.data?.formatted,
                maticBalance.data?.formatted,
                usdcBalance.data?.formatted],
            backgroundColor: [
                '#8992b1',
                '#7950dd',
                '#2775ca'
            ],
            hoverOffset: 2
        }]
    };

    return (
        <div className="w-1/2 font-semibold text-2xl text-slate-800">
            <Doughnut data={chartData} width={100} height={100} />
        </div>
    )
}