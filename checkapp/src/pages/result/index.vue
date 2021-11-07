<template>
  <div>
    <div>
      <!-- この中にグラフ表示のコードを書いてください -->
    </div>
    <Rank></Rank>
    <radar-chart
      :chartData="radarChartData"
      :options="radarChartOptions"
    ></radar-chart>
    <router-link to="/checkList/">チェックリスト</router-link>
    <router-link to="/">ホーム</router-link>
  </div>
</template>
<script>
import RadarChart from "../../components/Radar.vue";
import Rank from "../../components/Rank";
export default {
  components: { Rank, RadarChart },
  data() {
    return {
      total: this.$route.query.id,
      radarChartData: {
        labels: [
          "Basic CS knowledge",
          "Backend developing",
          "Database",
          "infrastructure",
          "Frontend developing",
          "Security",
        ],
        datasets: [
          {
            data: this.$route.query.id,
            label: "Your skill score as a software developer",
            fill: true,
            backgroundColor: "rgba(0, 181, 204, 0.2)",
            borderColor: "rgba(0, 181, 204, 1)",
            pointBackgroundColor: "rgba(0, 181, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "gba(0, 181, 204, 1)",
          },
          {
            label: "Avarage skill score for backend developers",
            data: [58, 78, 70, 59, 36, 67], // get * developer skills scores from database
            fill: true,
            backgroundColor: "rgba(123, 239, 178, 0.2)",
            borderColor: "rgba(123, 239, 178, 1)",
            pointBackgroundColor: "rgba(123, 239, 178, 0.2)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(123, 239, 178, 1)",
          },
          {
            label: "Avarage skill score for fullstack developers",
            data: [70, 68, 60, 56, 72, 64], // get your skills scores from user input
            fill: true,
            backgroundColor: "rgba(247, 202, 24, 0.2)",
            borderColor: "rgba(247, 202, 24, 1)",
            pointBackgroundColor: "rgba(247, 202, 24, 0.2)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(247, 202, 24, 1)",
          },
        ],
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            label: false,
            min: 0,
            max: 100,
            stepSize: 10,
            showLabelBackdrop: false,
          },
        },
        //デフォルトではラベルではなく数値が表示されているので書き換え
        tooltips: {
          callbacks: {
            title(tooltipItem, data) {
              const idx = tooltipItem[0].index;
              const title = data.labels[idx];
              return title;
            },
            label(tooltipItem, data) {
              const idx = tooltipItem.datasetIndex;
              const label = data.datasets[idx].label;
              return label + ": " + tooltipItem.value;
            },
          },
        },
      },
    };
  },
  methods: {
    result() {
      console.log(this.total);
    },
  },
};
</script>
