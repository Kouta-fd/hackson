<script>
import { Radar } from 'vue-chartjs'
export default {
  extends: Radar,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
