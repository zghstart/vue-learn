// fetch.js
// import { ref } from 'vue'

// export function useFetch(url) {
//   const data = ref(null)
//   const error = ref(null)
//   console.log('url ==>',url)

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err))

//   return { data, error }
// }


// fetch.js
import { ref, watchEffect, toValue } from 'vue'

// 你可能已经注意到了，我们一直在组合式函数中使用 ref() 而不是 reactive()。我们推荐的约定是组合式函数始终返回一个包含多个 ref 的普通的非响应式对象，这样该对象在组件中被解构为 ref 之后仍可以保持响应性：
// 从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，ref 则可以维持这一响应性连接。

// 从组合式函数返回一个响应式对象会导致在对象解构过程中丢失与组合式函数内状态的响应性连接。与之相反，ref 则可以维持这一响应性连接。

// 如果你更希望以对象属性的形式来使用组合式函数中返回的状态，你可以将返回的对象用 reactive() 包装一次，这样其中的 ref 会被自动解包，例如：

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // reset state before fetching..
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}