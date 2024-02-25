import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChart = () => {
  const { infected, recovered, deaths, active } = useSelector(state => state.track.countryData)
  const chartData = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "COVID-19 Statistics",
        backgroundColor: [
          "rgb(91, 121, 255,0.7)",
          "rgb(126, 251, 131, 0.7)",
          "rgb(250, 112, 119, 0.7)",
          "rgb(243, 230, 120, 0.7)",
        ],
        borderColor: [
          "rgb(91, 121, 255, 1)",
          "rgb(126, 251, 131, 1)",
          "rgb(250, 112, 119, 1)",
          "rgb(243, 230, 120, 1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgb(91, 121, 255, 1)",
          "rgb(126, 251, 131, 1)",
          "rgb(250, 112, 119, 1)",
          "rgb(243, 230, 120, 1)",
        ],
        hoverBorderColor: [
          "rgb(91, 121, 255, 1)",
          "rgb(126, 251, 131, 1)",
          "rgb(250, 112, 119, 1)",
          "rgb(243, 230, 120, 1)",
        ],
        data: [
          infected,
          recovered,
          deaths,
          active,
        ],
      },
    ],
  };


  return (
    <div id="canvas-container"
    >
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart;

