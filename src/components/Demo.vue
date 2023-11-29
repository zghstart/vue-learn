<script setup lang="ts">


// import { computed } from 'vue'

import { useAttrs, ref, inject, reactive, onActivated, onDeactivated } from "vue";
import  MousePosition from "./MousePosition.vue";
import {useFetch} from '../utils/fetch'

// import '../test/helper.spec'
import MyModal from './MyModal.vue'

// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

// const value = computed({
//   get() {
//     return props.modelValue
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   }
// })
// 默认情况下，v-model 在组件上都是使用 modelValue 作为 prop，并以 update:modelValue 作为对应的事件。我们可以通过给 v-model 指定一个参数来更改这些名字：
// defineProps(['title','first-name','lastName'])
// defineEmits(['update:title','update:firstName', 'update:lastName'])


// const props = defineProps({
//   modelValue: String,
//   modelModifiers: { default: () => ({}) }
// })

// const emit = defineEmits(['update:modelValue'])

// console.log(props.modelModifiers) // { capitalize: true }


// function emitValue(e) {
//   let value = e.target.value
//   if (props.modelModifiers.capitalize) {
//     value = value.charAt(0).toUpperCase() + value.slice(1)
//   }
//   emit('update:modelValue', value)
// }

// const props = defineProps({
//   firstName: String,
//   lastName: String,
//   firstNameModifiers: { default: () => ({}) },
//   lastNameModifiers: { default: () => ({}) }
// })
// defineEmits(['update:firstName', 'update:lastName'])

// console.log(props.firstNameModifiers) // { capitalize: true }
// console.log(props.lastNameModifiers) // { uppercase: true}

// 这个 $attrs 对象包含了除组件所声明的 props 和 emits 之外的所有其他 attribute，例如 class，style，v-on 监听器等等。
// defineOptions({
//   inheritAttrs: false
// })


// 如果需要，你可以在 <script setup> 中使用 useAttrs() API 来访问一个组件的所有透传 attribute：

const attrs = useAttrs()
console.log(attrs)

// 如果没有使用 <script setup>，attrs 会作为 setup() 上下文对象的一个属性暴露：

// export default {
//   setup(props, ctx) {
//     // 透传 attribute 被暴露为 ctx.attrs
//     console.log(ctx.attrs)
//   }
// }
// 需要注意的是，虽然这里的 attrs 对象总是反映为最新的透传 attribute，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 prop。或者你也可以使用 onUpdated() 使得在每次更新时结合最新的 attrs 执行副作用。

// const greetingMessage = ref('hhhhh')


// const message = inject('message')

// console.log(message)

// // 如果没有祖先组件提供 "message"
// // `value` 会是 "这是默认值"
// const value = inject('message', '这是默认值')

// // 在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值：
// const value2 = inject('key', () => Date.now(), true)

// const tmp = inject('location')
// const { location, updateLocation } = inject('location')


// tmp.location = 'asdfasd'


// const data = ref(null)
// const error = ref(null)

// fetch('https://github.com/')
//   .then((res) => res.json())
//   .then((json) => (data.value = json))
//   .catch((err) => (error.value = err))

// const { data, error } = useFetch('...')

// const url = ref('/initial-url')

// const { data, error } = useFetch(url)

// // 这将会重新触发 fetch
// url.value = '/new-url'

const url = ref('...')
// 当 props.id 改变时重新 fetch
// const { data, error } = reactive(useFetch(url))

// 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：
// const test = reactive(useFetch(url))
// console.log(test,test.data,test.error)

// let {data,error } = test
// const data = test.data
// const error = test.error
// console.log(test,test.data,test.error)

// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。在上面的例子中，vFocus 即可以在模板中以 v-focus 的形式使用。
const vFocus = {
  mounted: (el) => el.focus()
}

// 指令钩子
// const myDirective = {
//   // 在绑定元素的 attribute 前
//   // 或事件监听器应用前调用
//   created(el, binding, vnode, prevVnode) {
//     // 下面会介绍各个参数的细节
//   },
//   // 在元素被插入到 DOM 前调用
//   beforeMount(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都挂载完成后调用
//   mounted(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件更新前调用
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都更新后调用
//   updated(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载前调用
//   beforeUnmount(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载后调用
//   unmounted(el, binding, vnode, prevVnode) {}
// }


const show = ref(false)

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
})





</script>

<template>
    <!-- Extraneous non-props attributes (class, java) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.  
    如果 $attrs 被显式绑定，则不会有警告：
    -->
     <!-- <header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer> -->
  <div class="container"> 

    <!-- <div class="outer">
  <h3>Tooltips with Vue 3 Teleport</h3>
  <div>
    <MyModal />
  </div>
</div> -->

    <!-- <button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>


<Transition name="fade">
  <p v-if="show">world</p>
</Transition>

<Transition name="slide-fade">
  <p v-if="show">hello</p>
</Transition> -->

    <!-- <input v-focus /> -->

    <!-- <h1>{{ $translate('greetings.hello') }}</h1> -->

    <!-- <div v-if="test.error">Oops! Error encountered: {{ test.error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div> -->


    <!-- <MousePosition></MousePosition>

    <MousePosition></MousePosition> -->

    <!-- <button @click="updateLocation">{{ tmp.location }}</button> -->


    <!-- <MyComponent> 的模板 可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：-->

        <!-- 

在上面的渲染作用域中我们讨论到，插槽的内容无法访问到子组件的状态。

然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。

我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：

         -->
    <!-- <div>
    <slot :text="greetingMessage" :count="1"></slot>
    </div> -->


    <!-- <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer> -->
    

   

    <!-- 小提示：没有参数的 v-bind 会将一个对象的所有属性都作为 attribute 应用到目标元素上。 -->
    <!-- <button class="btn" v-bind="$attrs">click me</button> -->
    <!-- <span>Fallthrough attribute: {{ $attrs }}</span> -->
    <!-- <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />

  <input type="text" :value="modelValue" @input="emitValue" /> -->


    <!-- <input
    type="text"
    :value="firstName"
    @input="$emit('update:first-name', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />


    <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  /> -->
<!-- <input v-model="value" /> -->
  </div>
</template>



<style>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>