<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-gray-700 mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold px-4 py-4">{{ msg }},
            <h1
                class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsya-500 to-violet-500">
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
