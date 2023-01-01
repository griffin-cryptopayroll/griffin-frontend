import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(ArcElement, Tooltip);
import { Doughnut } from 'react-chartjs-2';
import { useAccount, useBalance } from 'wagmi';

const chartData = {
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
    const { address } = useAccount()
    const { data, isError, isLoading } = useBalance({ address: address })

    return (
        <div className="w-1/2 font-semibold text-2xl text-slate-800 text-center">
            {data?.formatted.split()} {data?.symbol}
            <Doughnut data={chartData} width={5} height={5} />
        </div>

    )
}