<script setup>

import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';


const GraphHistory = {
    name: 'GraphHistory'
}


const bitcoinChart = ref(null);

onMounted(() => {
    const ctx = bitcoinChart.value.getContext('2d');
    const labels = this.bitcoinData.map(entry => entry.date);
    const prices = this.bitcoinData.map(entry => entry.price);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin Price (USD)',
                data: prices,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Price (USD)'
                    }
                }
            }
        }
    });
});
</script>

<template>
  <div class="graph-container">
    <canvas ref="bitcoinChart"></canvas>
  </div>
</template>

<style scoped>
.graph-container {
  width: 100%;
  height: 400px;
}
</style>
