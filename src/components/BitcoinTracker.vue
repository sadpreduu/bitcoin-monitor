<template>
  <section class="flex flex-col items-center justify-center">
    <div class="mb-4 text-4xl sm:text-5xl lg:text-6xl px-4 py-4 rounded-md p-4">
      <div class="flex items-center">
        <img class="h-10 w-auto mr-2" src="/icons8-bitcoin.svg" alt="bitcoin logo">
        <h1 class="font-bold font-plex text-gray-700 content-flex align-middle">
          Bitcoin Price <a class="text-sm opacity-45">(BTC)</a>
        </h1>
      </div>

      <div class="shadow-2xl rounded-md self-center px-1 py-1 w-full bg-[#effaff] mt-5 border">
        <h2 class="flex font-plex text-violet-500 rounded-md bg-clip-padding bg-[#effaff] px-7 py-5 w-full self-center text-center inset-0 justify-center items-center">
          USD {{ formattedBitcoinPrice }}
        </h2>
        <h2 class="text-center text-xl text-black mt-2">
          <span v-if="priceChangePercentage > 0 && priceChangePercentage < 100" class="text-green-500">Positive Variation ↑ {{ priceChangePercentage }}%</span>
          <span v-else-if="priceChangePercentage < 0 && priceChangePercentage > -100" class="text-red-500">Negative Variation ↓ {{ priceChangePercentage }}%</span> 
          <span v-else class="text-gray-500">No Variation</span>
        </h2>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios'

export default {
  name: 'BitcoinTracker',
  data() {
    return {
      bitcoinPrice: 0,
      bitcoinPrice24hAgo: null
    };
  },
  computed: {
    formattedBitcoinPrice() {
      if (this.bitcoinPrice !== null) {
        return this.bitcoinPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      } else {
        return null;
      }
    },
    priceChangePercentage() {
      if (this.bitcoinPrice !== null && this.bitcoinPrice24hAgo !== null) {
        const change = ((this.bitcoinPrice - this.bitcoinPrice24hAgo) / this.bitcoinPrice24hAgo) * 100;
        return change.toFixed(2);
      } else {
        return null;
      }
    }
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        this.bitcoinPrice24hAgo = this.bitcoinPrice;
        this.bitcoinPrice = response.data.bitcoin.usd;
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    }
  },
  mounted() {
    this.fetchBitcoinPrice();
    setInterval(this.fetchBitcoinPrice, 30000);
  }
}
</script>

