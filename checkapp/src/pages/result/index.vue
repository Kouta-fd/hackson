<template>
  <div>
    <div>
      <!-- この中にグラフ表示のコードを書いてください -->
    </div>
    <Rank></Rank>
    <radar-chart :chartData='radarChartData' :options='radarChartOptions'></radar-chart>
    <router-link to="/checkList/">チェックリスト</router-link>
    <router-link to="/">ホーム</router-link>
  </div>
</template>
<script>
import RadarChart from "../../components/Radar.vue"
import Rank from "../../components/Rank"
export default {
  components: { Rank, RadarChart },
   data() {
    return {
      radarChartData: {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [
          {
            data: [4, 3, 2, 3, 3],
            label: "平均",
            backgroundColor: "rgba(200, 100, 100, 0.2)",
            borderColor: "rgba(200, 100, 100, 1)",
            pointBackgroundColor: "rgba(200, 100, 100, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(200, 100, 100, 1)",
            hitRadius: 10,
          },
          {
            data: [5, 2, 4, 1, 3],
            label: "あなた",
            backgroundColor: "rgba(100, 100, 200, 0.2)",
            borderColor: "rgba(100, 100, 200, 1)",
            pointBackgroundColor: "rgba(100, 100, 200, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(100, 100, 200, 1)",
            hitRadius: 10,
          }
        ],
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1,
          },
        },
        //デフォルトではラベルではなく数値が表示されているので書き換え
        tooltips : {
          callbacks: {
            title(tooltipItem, data) {
              const idx = tooltipItem[0].index;
              const title = data.labels[idx];
              return title;
            },
            label(tooltipItem, data) {
              const idx = tooltipItem.datasetIndex;
              const label = data.datasets[idx].label;
              return label + ': ' + tooltipItem.value;
            }
          }
        },
      },
    }
  },
};

</script>
