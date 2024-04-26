'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)'
//     },
//     {
//       label: 'Dataset 2',
//       data: [28, 48, 40, 19, 86, 27, 90],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)'
//     }
//   ]
// }

interface IBattlesChartProps {
  battles: Record<string, number>
}

export default function BattlesChartClient({ battles }: IBattlesChartProps) {
  const data: ChartData<'bar', (number | [number, number] | null)[], string> = {
    labels: Object.keys(battles),
    datasets: Object.entries(battles).map(([monthName, value]) => ({
      label: 'Copas',
      data: [value],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }))
  }
  return (
    <div className='w-full max-w-xl'>
      <Bar data={data} options={options} />
    </div>
  )
}
