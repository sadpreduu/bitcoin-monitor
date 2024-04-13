<template>
    <!-- Header component -->
    <header>
        <!-- Navigation -->
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo {
    height: 50px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin: 0 10px;
}
</style>
