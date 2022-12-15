import ReactApexChart from "react-apexcharts"; 

const ApexChart = () => {
    const bar = {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '18%',
              endingShape: 'rounded',
              borderRadius: 5,
              borderRadiusApplication: 'end'
            },
          },
          legend: {
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'bottom',
            offsetX: 50,
            markers: {
                fillColors: ['#7478f6', '#d6dce4']
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            // title: {
            //   text: '$ (thousands)'
            // }
          },
          fill: {
            opacity: 1,
            colors: ['#7478f6', '#d6dce4']
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " thousands"
              }
            }
          }
        },
      };

      return (
        <div>
            <ReactApexChart options={bar.options} series={bar.series} type="bar" height={350} />
        </div>
      );
}

export default ApexChart;