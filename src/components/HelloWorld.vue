

<script setup lang="ts">

import { ref } from "vue";

// 所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。
// 另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你不应该在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：

defineProps<{
  msg: string
  modelValue:any
}>();
const a = 1
const b = ref(2)

// 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b
})

// const props = defineProps(['foo'])

// // ❌ 警告！prop 是只读的！
// props.foo = 'bar'

// const emit = defineEmits(['enlarge-text'])

// emit('enlarge-text')

// defineProps({
//   // 基础类型检查
//   // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
//   propA: Number,
//   // 多种可能的类型
//   propB: [String, Number],

//   // 必传，且为 String 类型
//   propC: {
//     type: String,
//     required: true
//   },
//   // Number 类型的默认值
//   propD: {
//     type: Number,
//     default: 100
//   },
//   // 对象类型的默认值
//   propE: {
//     type: Object,
//     // 对象或数组的默认值
//     // 必须从一个工厂函数返回。
//     // 该函数接收组件所接收到的原始 prop 作为参数。
//     default(rawProps) {
//       return { message: 'hello' }
//     }
//   },
//   // 自定义类型校验函数
//   propF: {
//     validator(value) {
//       // The value must match one of these strings
//       return ['success', 'warning', 'danger'].includes(value)
//     }
//   },
//   // 函数类型的默认值
//   propG: {
//     type: Function,
//     // 不像对象或数组的默认，这不是一个
//     // 工厂函数。这会是一个用来作为默认值的函数
//     default() {
//       return 'Default function'
//     }
//   }
// })

// defineProps() 宏中的参数不可以访问 <script setup> 中定义的其他变量，因为在编译时整个表达式都会被移到外部的函数中。


// disabled 将被转换为 true
// defineProps({
//   disabled: [Boolean, Number]
// })
  
// // disabled 将被转换为 true
// defineProps({
//   disabled: [Boolean, String]
// })
  
// // disabled 将被转换为 true
// defineProps({
//   disabled: [Number, Boolean]
// })
  
// // disabled 将被解析为空字符串 (disabled="")  只有当 Boolean 出现在 String 之前时，Boolean 转换规则才适用：
// defineProps({
//   disabled: [String, Boolean]
// })

// 我们在 <template> 中使用的 $emit 方法不能在组件的 <script setup> 部分中使用，但 defineEmits() 会返回一个相同作用的函数供我们使用：

// defineEmits() 宏不能在子函数中使用。如上所示，它必须直接放置在 <script setup> 的顶级作用域下。
// const emit = defineEmits(['inFocus', 'submit'])

// function buttonClick() {
//   emit('submit')
// }

// const emit = defineEmits({
//   submit(payload) {
//     // 通过返回值为 `true` 还是为 `false` 来判断
//     // 验证是否通过
//     return true;
//   }
// })

// 如果你正在搭配 TypeScript 使用 <script setup>，也可以使用纯类型标注来声明触发的事件：
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

// 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件。

// const emit = defineEmits({
//   // 没有校验
//   click: null,

//   // 校验 submit 事件
//   submit: ({ email, password }) => {
//     if (email && password) {
//       return true
//     } else {
//       console.warn('Invalid submit event payload!')
//       return false
//     }
//   }
// })

// function submitForm(email, password) {
//   emit('submit', { email, password })
// }


// defineProps(['modelValue'])
defineEmits(['update:modelValue'])




</script>

<template>
  <div class="greetings">

    <!-- <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->

    <!-- <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div> -->

    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>

.alert-box {
  /* ... */
  background-color: pink;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
