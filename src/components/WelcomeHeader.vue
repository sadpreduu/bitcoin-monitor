<template>
    <div>
        <h1 class="text-white mb-4 text-5xl sm:text-5xl lg:text-7xl font-extrabold px-4 py-4">{{ msg }},
            <h1 class="inline-block">
                it is {{ hour }}:{{ minute }}
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
        const hour = ref(d.getHours())
        const minute = ref(d.getMinutes())
        let msg = ''

        setInterval(() => {
            const d = new Date()
            hour.value = d.getHours()
            minute.value = d.getMinutes()
        }, 1000)

        if (hour.value >= 5 && hour.value < 12) {
            msg = 'Good morning'
        } else if (hour.value >= 12 && hour.value < 18) {
            msg = 'Good afternoon'
        } else {
            msg = 'Good night'
        }

        return {
            msg,
            hour,
            minute
        }
    }
}

</script>
