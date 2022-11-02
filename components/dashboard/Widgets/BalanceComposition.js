
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';

const data = {
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

export default function BalanceComposition() {
    const amount = 100000

    return (
        <div className="font-semibold text-2xl text-slate-800 ">
            ${amount.toLocaleString()} in USD
            <Doughnut data={data} width={10} height={10} />
        </div>
    )
}