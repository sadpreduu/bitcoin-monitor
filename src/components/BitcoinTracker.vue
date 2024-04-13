
<template>
    <section>
        <div class="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold px-4 py-4">
            <div>
                <img class="h-15 w-10 inline-block container mx-auto self-center align-middle" src="/public/bitcoinsv.svg" alt="bitcoin logo">
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-white-500 to-yellow-600 inline-block">
                    Bitcoin Price
                </span>
            </div>

            <div class="self-center px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-orange-800 via-white-500 to-yellow-600 text-white mt-3"> 
            <h2 class="font-raleway block bg-[#333131] px-5 py-3 self-center">{{ bitcoinPrice }} USD </h2>
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
      bitcoinPrice: null
    };
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        this.bitcoinPrice = response.data.bitcoin.usd;
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    }
  },
  mounted() {
    this.fetchBitcoinPrice(); 
  }
}

</script>

