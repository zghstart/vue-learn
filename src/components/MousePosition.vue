<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// const x = ref(0)
// const y = ref(0)

// function update(event) {
//   x.value = event.pageX
//   y.value = event.pageY
// }

// onMounted(() => window.addEventListener('mousemove', update))
// onUnmounted(() => window.removeEventListener('mousemove', update))

import {useMouse} from '../utils/mouse'

const { x, y } = useMouse()
</script>

<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>



<style scoped>

</style>