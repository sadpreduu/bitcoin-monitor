
<template>
    <section class="card-wrapper flex flex-col items-center justify-center">
        <div class="card-content mb-4 text-4xl sm:text-5xl lg:text-6xl px-4 py-4">
            <div>
                <img class="inline-block h-10 w-fit sm:w-fit rounded-md container mx-auto self-center align-middle" src="/icons8-bitcoin.svg" alt="bitcoin logo">
                <h1
                    class="font-extrabold content-flex font-raleway align-middle px-2 w-full sm:w-fit bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 inline-block">
                    Current Bitcoin <a class="underline decoration-4">Price:</a>
            </h1>
            </div>

            <div class="shadow-2xl rounded-md self-center px-0.5 py-0.5 w-full sm:w-fit bg-gradient-to-br from-orange-800 via-white-500 to-yellow-600 text-white mt-3"> 
            <h2 class="font-playfair block bg-[#292828] px-7 py-5 self-center text-justify inset-0">USD ${{ bitcoinPrice }} 
              <h2>
                Past 24 Hours
              </h2>
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

<style>

</style>