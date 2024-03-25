/* eslint-disable @typescript-eslint/no-explicit-any */
// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }: { chartData: any }) => {
    console.log('chartData', chartData)
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2020"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
};