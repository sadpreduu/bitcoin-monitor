
<template>
    <section>
        <div class="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Bitcoin Price 
            <h2>{{ bitcoinPrice }} USD </h2>
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
    this.fetchBitcoinPrice(); // Chame o método quando o componente for montado
  }
}

</script>

