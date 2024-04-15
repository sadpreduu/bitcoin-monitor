<template>
  <section>
    <div class="card-wrapper flex flex-col items-center justify-center p-4">
      <div>
        <h1 class="font-extrabold uppercase p-4 text-xl">Bitcoin Price History</h1>
        <button @click="fetchBitcoinPrice(7)">Last Week</button>
        <button @click="fetchBitcoinPrice(15)">Past 15 days</button>
        <button @click="fetchBitcoinPrice(30)">Past Mounth</button>
        <button @click="fetchBitcoinPrice(180)">Past Six Mounths</button>
        <div v-if="bitcoinPriceHistory.length > 0" class="card-wrapper flex flex-col items-center justify-center p-4">
          <ul>
            <li v-for="entry in bitcoinPriceHistory" :key="entry.date">
              {{ entry.date }}: ${{ entry.price }}
            </li>
          </ul>
        </div>
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
        bitcoinPriceHistory: []
      };
    },
    methods: {
      async fetchBitcoinPrice(days) {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`);
          this.bitcoinPriceHistory = response.data.prices.map(price => {
            return {
              date: new Date(price[0]).toLocaleDateString('en-US'),
              price: price[1]
            };
          });
        } catch (error) {
          console.error('Error fetching Bitcoin price:', error);
        }
      }
    }
  }
  </script>
  