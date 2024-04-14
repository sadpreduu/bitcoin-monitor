<template>
  <section class="flex flex-col items-center justify-center">
    <div class="mb-4 text-4xl sm:text-5xl lg:text-6xl px-4 py-4 bg-local bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600 rounded-md p-4">
      <div class="flex">
      
        <h1
          class="font-extrabold content-flex font-raleway align-middle px-2 w-full">
          Current Bitcoin <a class="underline decoration-4">Price:</a>
        </h1>
      </div>

      <div
        class="shadow-2xl rounded-md self-center px-0.5 py-0.5 w-full bg-gradient-to-br from-violet-800 via-white-500 to-violet-600 text-white mt-3">
        <img class="flex h-10 w-fit rounded-md container mx-auto self-center align-middle"
          src="/icons8-bitcoin.svg" alt="bitcoin logo">
        <h2 class="flex font-playfair bg-[#292828] px-7 py-5 w-full self-center text-center inset-0 justify-center items-center">
          USD {{ formattedBitcoinPrice }}
        </h2>
      </div>

      <div
        class="shadow-2xl rounded-md self-center px-0.5 py-0.5 w-full bg-gradient-to-br from-violet-800 via-white-500 to-violet-600 text-white mt-3">
        <h2 class="flex font-raleway font-light text-sm self-stretch container mx-auto">
          Past 24 Hours
          <span v-if="priceChangePercentage > 0" class="text-green-500 ml-1" style="border: 1px solid green;">↑</span>
          <span v-else-if="priceChangePercentage < 0" class="text-red-500 ml-1" style="border: 1px solid red;">↓</span>
          <span v-else class="text-gray-500 ml-1" style="border: 1px solid gray;">-</span>

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
      bitcoinPrice: null,
      bitcoinPrice24hAgo: null
    };
  },
  computed: {
    formattedBitcoinPrice() {
      return this.bitcoinPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    },
    priceChangePercentage() {
      if (this.bitcoinPrice && this.bitcoinPrice24hAgo) {
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
    setInterval(this.fetchBitcoinPrice, 30000); // Atualizar a cada 30 segundos
  }
}
</script>


<style>

</style>