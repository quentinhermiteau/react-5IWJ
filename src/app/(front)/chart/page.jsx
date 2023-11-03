'use client';

import Chart from "react-apexcharts";

export default () => {
    const moc = {
        data: [
            {date: '2023-10-01', value: 5},
            {date: '2023-10-02', value: 14},
            {date: '2023-10-03', value: 10},
            {date: '2023-10-04', value: 8},
            {date: '2023-10-05', value: 12},
            {date: '2023-10-06', value: 7},
            {date: '2023-10-07', value: 4},
            {date: '2023-10-08', value: 0},
            {date: '2023-10-09', value: 5},
        ]
    }

    const categories = moc.data.map((item) => item.date);
    const value = moc.data.map((item) => item.value);

    const chart = {
        options: {
          chart: {
            type: "bar",
            events: {
                // check https://apexcharts.com/docs/options/chart/events
                click: function(event, chartContext, config) {
                    console.log(event, chartContext, config);
                }
            }
          },
          xaxis: {
            categories: categories
          }
        },
        series: [
          {
            name: "series-1",
            data: value
          }
        ]
      };

    return (
        <div>
            <Chart
                options={chart.options}
                series={chart.series}
                type="bar"
                width="500"
            />
        </div>
    )
}