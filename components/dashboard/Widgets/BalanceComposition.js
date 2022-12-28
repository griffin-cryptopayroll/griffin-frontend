import { Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);
import { Doughnut } from 'react-chartjs-2';
import { useBalance } from 'wagmi';

const chartData = {
    labels: [
        'ETH',
        'MATIC',
        'USDC'
    ],
    datasets: [{
        label: 'Balance Compostition',
        data: [30, 20, 50],
        backgroundColor: [
            '#8992b1',
            '#7950dd',
            '#2775ca'
        ],
        hoverOffset: 2
    }]
};

export default function BalanceComposition({ address }) {
    const { data } = useBalance({ address: address })

    return (
        <div className="w-1/2 font-semibold text-2xl text-slate-800">
            <Doughnut data={chartData} width={100} height={100} />
        </div>
    )
}