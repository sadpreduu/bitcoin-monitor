<template>
    <header>
        <nav>
           <div class="flex flex-wrap items-centefr justify-between mx-auto p-8">
                <router-link to="/" class="flex items-center">
                    <img src="/bitcoinsv.svg" class=" " alt="Vue logo">
                </router-link>

             <div class="menu hidden md:block md:w-auto" id="navbar"> 
                <ul class="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

</style>
