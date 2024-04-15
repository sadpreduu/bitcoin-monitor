<template>
    <header>
        <nav> 
           <div class="flex flex-wrap items-centefr justify-between mx-auto p-8">  
            <img src="/icons8-cat-eyes-50.png" class="rounded-md h-35 w-35 px-0.1 py-0.1 sm:h-10 sm:w-10 bg-gradient-to-r from-violet-800 via-white-500 to-violet-600" alt="LOGO">
            <span>CAT COIN</span> 
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
