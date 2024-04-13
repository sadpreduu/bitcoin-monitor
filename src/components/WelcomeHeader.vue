
<template>
    <div>
        <h1 class="text-white mb-4 text-5xl sm:text-5xl lg:text-7xl font-extrabold">{{ msg }},
            <h1>
                it is {{ new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours() }}:{{ new
            Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes() }}
<!-- ALTERAR A HORA CONFORME ELA MUDA NA VIDA REAL -->
            </h1>

        </h1>
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        name: 'WelcomeHeader',
    setup() {
        const d = new Date()
        let hour = d.getHours()
        let msg = ''

        if (hour >= 5 && hour < 12) {
            msg = 'Good morning'
        } else if (hour >= 12 && hour < 17) {
            msg = 'Good afternoon'
        } else {
            msg = 'Good night'
        }

        return {
            msg,
            hour,
        }
    }
    }

</script>
