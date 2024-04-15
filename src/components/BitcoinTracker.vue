<template>
  <section class="flex flex-col items-center justify-center">
    <div
      class="mb-4 text-4xl sm:text-5xl lg:text-6xl px-4 py-4 bg-local bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600 rounded-md p-4 outline hover:outline-offset-2 outline-2">
      <div class="flex">
        <h1 class="font-extrabold uppercase content-flex font-raleway align-middle px-2 w-full">
          Current Bitcoin <a class="underline decoration-4">Price:</a>
        </h1>
      </div>

      <div
        class="shadow-2xl rounded-md self-center px-0.5 py-0.5 w-full bg-gradient-to-br from-violet-800 via-white-500 to-violet-600 text-white mt-3">
        <img class="flex h-10 w-fit rounded-md container mx-auto self-center align-middle" src="/icons8-bitcoin.svg"
          alt="bitcoin logo">
        <h2
          class="flex font-playfair bg-[#292828] px-7 py-5 w-full self-center text-center inset-0 justify-center items-center">
          USD {{ formattedBitcoinPrice }}
        </h2>
      </div>

      <div
        class="shadow-2xl rounded-md self-center px-1 py-1 h-8 w-full bg-gradient-to-br from-violet-800 via-white-500 to-violet-600 text-white mt-3">
        <h2 class="flex font-raleway font-extrabold uppercase text-lg self-stretch h-6 container mx-auto bg-[#292828]">
          Past 24 Hours
          <span v-if="priceChangePercentage > 0 && priceChangePercentage < 100" class="text-green-500 text-2xl">↑
            {{ priceChangePercentage }}%</span>
          <span v-else-if="priceChangePercentage < 0 && priceChangePercentage > -100" class="text-red-500 text-2xl">↓
            {{ priceChangePercentage }}%</span> 
          <span v-else class="text-gray-500 text-2xl" style="border: 2px solid gray;">-</span>

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

/* // Unit tests
import { expect } from 'chai';

describe('BitcoinTracker', () => {

  it('formats bitcoin price correctly', () => {
    const wrapper = shallowMount(BitcoinTracker);
    wrapper.setData({
      bitcoinPrice: 10000
    });
    expect(wrapper.vm.formattedBitcoinPrice).to.equal('$10,000.00');
  });

  it('calculates price change percentage correctly', () => {
    const wrapper = shallowMount(BitcoinTracker);
    wrapper.setData({
      bitcoinPrice: 12000,
      bitcoinPrice24hAgo: 10000
    });
    expect(wrapper.vm.priceChangePercentage).to.equal('20.00');
  });

}); */

</script>
