<template>
  <section>
    <div class="card-wrapper flex flex-col items-center justify-center p-4">
      <div class="search-container">
        <div class="search-card p-4">
          <!-- Aplicando a mesma classe de estilo ao input de data -->
          <input type="date" v-model="searchDate" class="input-date bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none px-4 py-2 rounded">
          <button @click="fetchBitcoinPriceByDate" class="btn-search">Search Bitcoin Price</button>
        </div>
      </div>
      <div class="result-container mt-4 border">
        <p v-if="searchResult" class="text-xl font-bold text-black">Bitcoin Price on {{ searchDate }}: ${{ searchResult }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tracker',
  data() {
    return {
      searchDate: '',
      searchResult: null
    };
  },
  methods: {
    async fetchBitcoinPriceByDate() {
      try {
        const selectedDate = new Date(this.searchDate).getTime() / 1000;
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${selectedDate}&localization=false`);
        const bitcoinPrice = response.data.market_data.current_price.usd;
        this.searchResult = bitcoinPrice;
      } catch (error) {
        console.error('Error fetching Bitcoin price by date:', error);
      }
    }
  }
}
</script>

<style>
.input-date {
  @apply p-2;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  /* Adicionando cores do botão ao input */
  background-image: linear-gradient(to right, #8B5CF6, #c026d3);
  color: white;
}

.search-container {
  @apply mt-4 flex items-center;
}

.search-card {
  @apply border-2 border-gray-200 rounded p-4;
}

.btn-search {
  @apply bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-none px-4 py-2 ml-2 rounded;
  cursor: pointer;
}

.result-container {
  @apply mt-4;
}
</style>
