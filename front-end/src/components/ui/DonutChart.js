// DonutChart.js
import { useEffect, useRef } from "react";
import Chart from "chart.js";

const DonutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Donut Chart",
              data: data.values,
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: "bottom",
            },
            title: {
              display: true,
              text: "Donut Chart Example",
            },
          },
          responsive: true,
          aspectRatio: 1,
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} className="flex w-[156px]  h-[156px]" />;
};

export default DonutChart;
