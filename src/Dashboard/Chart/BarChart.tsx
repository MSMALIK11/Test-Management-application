
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
    maintainAspectRatio: true,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 30, 40],
            backgroundColor: 'orange',
        },
        {
            label: 'Dataset 2',
            data: [20, 10, 30, 40],
            backgroundColor: 'green',
        },
    ],

};

const BarChart = () => {
    return <Bar options={options} data={data} />;
}

export default BarChart