<template>
  <div class="flex justify-center">
    <div
      class="search-container flex flex-col max-w-sm w-full bg-[] rounded-lg shadow-md p-4 md:p-6 justify-center items-center self-center border-2">
      <div>
        <div>
          <div class="flex justify-center items-center">
            <div>
              <div class="flex items-center">
                <img class="h-10 w-auto mr-2" src="/icons8-bitcoin.svg" alt="bitcoin logo">
                <h1 class="font-plex text-gray-700 content-flex align-middle">
                  Bitcoin Price <a class="text-sm opacity-45">(BTC)</a>
                </h1>
              </div>
            </div>
            <div
              class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
              {{ variation }}
              <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div id="area-chart" class="mt-4"></div>
      <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div class="flex justify-between items-center pt-5">
          <!-- Button -->
          <button class="btn-search" @click="changeTimeline(7)">
            Last 7 days
          </button>
          <button class="btn-search" @click="changeTimeline(15)">
            Last 15 days
          </button>
          <button class="btn-search" @click="changeTimeline(30)">
            Last 30 days
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ApexCharts from 'apexcharts';

export default {
  name: 'GraphHistory',
  data() {
    return {
      variation: '12%',
      chartOptions: {
        // Opções do gráfico
      },
      apiKey: '3fda7364-1a7e-49bf-9d19-c81671589b95', // Chave de API obtida do arquivo .env
    };
  },
  methods: {
  async fetchBitcoinPriceData(days) {
    try {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      const startDateISO = startDate.toISOString().split('T')[0];

      const response = await axios.get(`https://api.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history`, {
        params: {
          period_id: '1HRS',
          time_start: `${startDateISO}T00:00:00`,
          time_end: `${endDate}T00:00:00`,
          limit: 24,
        },
        headers: {
          'X-CoinAPI-Key': this.apiKey,
        },
      });

      const responseData = await response.json(); // Extract JSON content from the response

      if (responseData && responseData.length > 0) {
        const bitcoinPrices = responseData.map(entry => ({
          x: new Date(entry.time_period_start).getTime(),
          y: entry.price_close,
        }));

        this.chartOptions.series[0].data = bitcoinPrices;
        this.renderChart();
      } else {
        console.error('Error: No data received from API');
      }
    } catch (error) {
      console.error('Error fetching Bitcoin price data:', error);
    }
  },
},
  mounted() {
    // Fetch initial data for the current day
    this.fetchBitcoinPriceData(1);
  },
};
</script>

<style scoped>
.btn-search {
  background-image: linear-gradient(to right, #9333ea, #d946ef);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.search-container {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.search-card {
  border-width: 2px;
  border-color: #e5e7eb;
  border-style: solid;
  border-radius: 0.25rem;
  padding: 1rem;
}
</style>
