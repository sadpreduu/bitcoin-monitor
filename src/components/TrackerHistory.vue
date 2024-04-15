<template>
  <section>
    <div class="card-wrapper flex flex-col items-center justify-center p-4">
      <div class="search-container self-center text-center inset-0 justify-center items-center ">
        <div class="search-card p-4">
          <input type="date" v-model="searchDate" class="input-date">
          <button @click="fetchBitcoinPriceByDate" class="btn-search">Search Bitcoin Price</button>
        </div>
      </div>
      <div class="result-container mt-4 border text-black" ref="resultContainer">
        <span class="text-xl font-bold" ref="searchResultContainer"></span>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BitcoinPrice',
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
        const response = await axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${selectedDate}&end=${selectedDate}`);
        this.searchResult = response.data.bpi[Object.keys(response.data.bpi)[0]];
        this.showSearchResult(); // Chama a função para exibir o resultado da pesquisa
      } catch (error) {
        console.error('Error fetching Bitcoin price by date:', error);
      }
    },
    showSearchResult() {
      if (this.searchResult) {
        this.$refs.searchResultContainer.textContent = `Bitcoin Price on ${this.searchDate}: $${this.searchResult}`;
        this.$refs.resultContainer.style.display = 'block'; // Exibe o resultado da pesquisa
      }
    }
  }
};
</script>

<style scoped>
input.input-date {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  background-image: linear-gradient(to right, #8B5CF6, #c026d3);
  color: white;
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


.btn-search {
  background-image: linear-gradient(to right, #9333ea, #d946ef);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
}


.result-container {
  margin-top: 1rem;
  border-width: 2px;
  border-color: #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #374151;
}

</style>
