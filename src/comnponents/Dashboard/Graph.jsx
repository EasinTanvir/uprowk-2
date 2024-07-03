import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale, Legend);

let shortens = [
  {
    id: 1,
    date: "2024-06-01",
    originalUrl: "https://example.com",
    shortUrl: "abPZ7Q5d",
    clickCount: 2,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 2,
    date: "2024-06-02",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 4,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 3,
    date: "2024-06-03",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 6,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 4,
    date: "2024-06-04",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 1,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 5,
    date: "2024-06-05",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 12,

    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },

  {
    id: 6,
    date: "2024-06-06",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 3,

    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 7,
    date: "2024-06-07",
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 8,

    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
];

const Graph = () => {
  const labels = shortens?.map((item, i) => `${item.date}`);
  const userPerDaya = shortens?.map((item) => item.clickCount);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Click",
        data: userPerDaya,
        backgroundColor: null,
        borderColor: "#1D2327",
        pointBorderColor: "red",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number Of Click",
          font: {
            family: "Arial", // Specify font family
            size: 16, // Specify font size
            weight: "bold", // Specify font weight
            color: "#FF0000", // Specify text color
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            family: "Arial", // Specify font family
            size: 16, // Specify font size
            weight: "bold", // Specify font weight
            color: "#FF0000", // Specify text color
          },
        },
      },
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
      gradient.addColorStop(0, "#3b82f6");
      gradient.addColorStop(1, "#9333ea");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  return (
    <div>
      {" "}
      <Bar ref={chartRef} data={data} options={options}></Bar>
    </div>
  );
};

export default Graph;
