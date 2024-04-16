<template>
  <div>
    <Header/>
    <HelloWorld/>
    <WelcomeHeader/>
    <BitcoinTracker/>
    <TrackerHistory/>
    <GraphHistory/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import WelcomeHeader from './components/WelcomeHeader.vue';
import BitcoinTracker from './components/BitcoinTracker.vue';
import TrackerHistory from './components/TrackerHistory.vue';
import GraphHistory from './components/GraphHistory.vue';

export default {
  components: {
    Header,
    HelloWorld,
    WelcomeHeader,
    BitcoinTracker,
    TrackerHistory,
    GraphHistory
  }
}
</script>

<style scoped>
/* Seus estilos aqui */
</style>


<style scoped>

</style>./components/BitcoinTracker.vue
