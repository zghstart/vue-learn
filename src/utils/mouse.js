// // mouse.js
// import { ref, onMounted, onUnmounted } from 'vue'

// // 按照惯例，组合式函数名以“use”开头
// export function useMouse() {
//   // 被组合式函数封装和管理的状态
//   const x = ref(0)
//   const y = ref(0)

//   // 组合式函数可以随时更改其状态。
//   function update(event) {
//     x.value = event.pageX
//     y.value = event.pageY
//   }

//   // 一个组合式函数也可以挂靠在所属组件的生命周期上
//   // 来启动和卸载副作用
//   onMounted(() => window.addEventListener('mousemove', update))
//   onUnmounted(() => window.removeEventListener('mousemove', update))

//   // 通过返回值暴露所管理的状态
//   return { x, y }
// }


// mouse.js
// 每一个调用 useMouse() 的组件实例会创建其独有的 x、y 状态拷贝，因此他们不会互相影响。如果你想要在组件之间共享状态，请阅读状态管理这一章。
import { ref } from 'vue'
import { useEventListener } from './event'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}