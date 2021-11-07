<template lang "html">
<Chart :chartData="chartItems" :options="chartOptions"/>
  <div>
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.min.js"></script>
      <div>
        <canvas id="myRadarChart" width="450" height="400"></canvas>
      </div>
      <div>
        <button id="btn">表示</button>
      </div> 
    </div>
    <Chart :chartData="chartItems" :options="chartOptions"/>
    <Rank></Rank>
    <router-link to="/checkList/">チェックリスト</router-link>
    <router-link to="/">ホーム</router-link>
  </div>
</template>

<script>
import {Rank} from "../../components/Rank"
import {Radar} from "vue-chartjs"
export default {
  extends: Radar,
  components: { 
    Rank
  },
  data() {
    return{
      chartItems:{
        labels: [
              'Basic CS knowledge',
              'Backend developing',
              'Database',
              'infrastructure',
              'Frontend developing',
              'Security',
        ],
        datasets: [{
          label: 'Your skill score as a frontend developer',
          data: [75, 19, 80, 51, 76, 75,],// get your skills scores from user input
          fill: true,
          backgroundColor: 'rgba(0, 181, 204, 0.2)',
          borderColor: 'rgba(0, 181, 204, 1)',
          pointBackgroundColor: 'rgba(0, 181, 204, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'gba(0, 181, 204, 1)'
        }]
      },
      chartOptions: {
        maintainAspectRatio: false,
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      }
    }
  }
}

  const myChart = new Chart(
    document.getElementById('myRadarChart'),
    config
  )

  var btn = document.getElementById('btn');
  btn.addEventListener('click', function() {
    console.log(backend_score);
  }, false);
</script>
