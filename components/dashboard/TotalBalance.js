import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Purple',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [30, 50],
        backgroundColor: [
            // 'rgb(255, 99, 132)',
            '#7c3aed',
            '#eee'
            // 'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
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