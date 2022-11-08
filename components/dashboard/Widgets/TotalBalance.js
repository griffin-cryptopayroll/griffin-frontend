import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip);
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Projected',
        'Remaining',
    ],
    datasets: [{
        label: 'Total Balance',
        data: [30, 50],
        backgroundColor: [
            // 'rgb(255, 99, 132)',
            '#7c3aed',
            '#eee'
            // 'rgb(255, 205, 86)'
        ],
        hoverOffset: 2
    }]
};

export default function TotalBalance() {
    const amount = 100000

    return (
        <div className="font-semibold text-2xl text-slate-800 ">
            ${amount.toLocaleString()}
            <Doughnut data={data} width={10} height={10} />
        </div>
    )
}