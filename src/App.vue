<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import { ref,nextTick, reactive,computed, onMounted, watch, watchEffect, watchPostEffect, provide, readonly, defineAsyncComponent, inject } from 'vue'

// const count = ref(0)
// console.log(count) // { value: 0 }
// console.log(count.value) // 0

// count.value++
// console.log(count.value) // 1、


// function increment() {
//       // 在 JavaScript 中需要 .value
//       count.value--
//     }

// const obj = ref({
//   nested: { count: 0 },
//   arr: ['foo', 'bar']
// })

// function mutateDeeply() {
//   // 以下都会按照期望工作
//   obj.value.nested.count++
//   obj.value.arr.push('baz')
// }

// // 要等待 DOM 更新完成后再执行额外的代码，可以使用 nextTick() 全局 API：

// async function increment2() {
//   count.value++
//   await nextTick()
//   // 现在 DOM 已经更新了
// }

// const state = reactive({ count: 0 })

// const raw = {}
// const proxy = reactive(raw)

// // 只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本。

// // 代理对象和原始对象不是全等的
// console.log(proxy === raw) // false

// // 为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象，而对一个已存在的代理对象调用 reactive() 会返回其本身：
// // 在同一个对象上调用 reactive() 会返回相同的代理
// console.log(reactive(raw) === proxy) // true

// // 在一个代理上调用 reactive() 会返回它自己
// console.log(reactive(proxy) === proxy) // true

// 这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理：
// const proxy = reactive({})

// const raw = {}
// proxy.nested = raw

// console.log(proxy.nested === raw) // false


// let state = reactive({ count: 0 })

// // 上面的 ({ count: 0 }) 引用将不再被追踪
// // (响应性连接已丢失！)
// state = reactive({ count: 1 })

// 对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接：
// const state = reactive({ count: 0 })

// // 当解构时，count 已经与 state.count 断开连接
// let { count } = state
// // 不会影响原始的 state
// count++

// // 该函数接收到的是一个普通的数字
// // 并且无法追踪 state.count 的变化
// // 我们必须传入整个对象以保持响应性
// callSomeFunction(state.count)

// export  {
//   // `setup` 是一个特殊的钩子，专门用于组合式 API。
//   setup() {
//     const count = ref(0)

//     // 将 ref 暴露给模板
//     return {
//       count
//     }
//   }
// }

// 一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性：
// const count = ref(0)
// const state = reactive({
//   count
// })

// console.log(state.count) // 0

// state.count = 1
// console.log(count.value) // 1

// // 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref：
// const otherCount = ref(2)

// state.count = otherCount
// console.log(state.count) // 2
// // 原始 ref 现在已经和 state.count 失去联系
// console.log(count.value) // 1


// 与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型(如 Map) 中的元素被访问时，它不会被解包：

// const books = reactive([ref('Vue 3 Guide')])
// // 这里需要 .value
// console.log(books[0].value)

// const map = reactive(new Map([['count', ref(0)]]))
// // 这里需要 .value
// console.log(map.get('count').value)

// const count = ref(0)
// const object = { id: ref(1) }


// const author = reactive({
//   name: 'John Doe',
//   books: [
//     'Vue 2 - Advanced Guide',
//     'Vue 3 - Basic Guide',
//     'Vue 4 - The Mystery'
//   ]
// })

// // 一个计算属性 ref 计算属性值会基于其响应式依赖被缓存
// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })

// // 组件中
// function calculateBooksMessage() {
//   return author.books.length > 0 ? 'Yes' : 'No'
// }

// // 为什么下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖：
// const now = computed(() => Date.now())


// const firstName = ref('John')
// const lastName = ref('Doe')

// const fullName = computed({
//   // getter Getter 不应有副作用 不要在 getter 中做异步请求或者更改 DOM！
//   get() {
//     return firstName.value + ' ' + lastName.value
//   },
//   // setter 避免直接修改计算属性值 
//   set(newValue:string) {
//     // 注意：我们这里使用的是解构赋值语法
//     [firstName.value, lastName.value] = newValue.split(' ')
//   }
// })


// const isActive = ref(true)
// const error = ref(null)

// const classObject = computed(() => ({
//   active: isActive.value && !error.value,
//   'text-danger': error.value && error.value.type === 'fatal'
// }))


// const activeClass = ref('active')
// const errorClass = ref('text-danger')


// const activeColor = ref('red')
// const fontSize = ref(30)

// const styleObject = reactive({
//   color: 'red',
//   fontSize: '13px'
// })

// const type = ref('D')
// const ok = ref(undefined)

// 总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。


// const items = ref([{ message: 'Foo' }, { message: 'Bar' }])


// const myObject = reactive({
//   title: 'How to do lists in Vue',
//   author: 'Jane Doe',
//   publishedAt: '2016-04-10'
// })

// const name = ref('Vue.js')

// function greet(event) {
//   alert(`Hello ${name.value}!`)
//   // `event` 是 DOM 原生事件
//   if (event) {
//     console.log(event)
//     alert(event.target.tagName)
//   }
// }

// 除了直接绑定方法名，你还可以在内联事件处理器中调用方法。这允许我们向方法传入自定义参数以代替原生事件：
// function say(message) {
//   alert(message)
// }

// 有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 $event 变量，或者使用内联箭头函数：
// function warn(message:string, event:Event) {
//   // 这里可以访问原生事件
//   if (event) {
//     event.preventDefault()
//     console.log(event)
//   }
//   alert(message)
// }

// const checked = ref('');

// const checkedNames = ref([])

// const selected = ref('A')

// const options = ref([
//   { text: 'One', value: 'A' },
//   { text: 'Two', value: 'B' },
//   { text: 'Three', value: 'C' }
// ])

// const toggle = ref('A')
// const pick = ref('A')
// const first = ref('first')
// const second = ref('second')

// const msg = ref('  sdfaf  ')

// onMounted(() => {
//   console.log(`the component is now mounted.`)
// })

// const question = ref('')
// const answer = ref('Questions usually contain a question mark. ;-)')

// // 可以直接侦听一个 ref
// watch(question, async (newQuestion, oldQuestion) => {
//   if (newQuestion.indexOf('?') > -1) {
//     answer.value = 'Thinking...'
//     try {
//       const res = await fetch('https://yesno.wtf/api')
//       answer.value = (await res.json()).answer
//     } catch (error) {
//       answer.value = 'Error! Could not reach the API. ' + error
//     }
//   }
// })

// watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：

// const x = ref(0)
// const y = ref(0)

// // 单个 ref
// watch(x, (newX) => {
//   console.log(`x is ${newX}`)
// })

// // getter 函数
// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x + y is: ${sum}`)
//   }
// )

// // 多个来源组成的数组
// watch([x, () => y.value], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`)
// })

// const obj = reactive({ count: 0 })

// // 错误，因为 watch() 得到的参数是一个 number
// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`)
// })


// 提供一个 getter 函数
// watch(
//   () => obj.count,
//   (count) => {
//     console.log(`count is: ${count}`)
//   }
// )

// const state = ref({someObject:101})

// watch(
//   () => state.someObject,
//   (newValue, oldValue) => {
//     // 注意：`newValue` 此处和 `oldValue` 是相等的
//     // *除非* state.someObject 被整个替换了
//   },
//   { deep: true , immediate: true}
// )


// const todoId = ref(1)
// const data = ref(null)

// watch(todoId, async () => {
//   console.log('执行异步请求')
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   )
//   data.value = await response.json()
// }, { immediate: true })

// // 上面的监听器可以重写为
// // 这个例子中，回调会立即执行，不需要指定 immediate: true。在执行期间，它会自动追踪 todoId.value 作为依赖（和计算属性类似）。每当 todoId.value 变化时，回调会再次执行。有了 watchEffect()，我们不再需要明确传递 todoId 作为源值。
// // 对于这种只有一个依赖项的例子来说，watchEffect() 的好处相对较小。但是对于有多个依赖项的侦听器来说，使用 watchEffect() 可以消除手动维护依赖列表的负担。此外，如果你需要侦听一个嵌套数据结构中的几个属性，watchEffect() 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。

// watchEffect(async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//   )
//   data.value = await response.json()
// },{flush:'post'})  // 想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post' 选项：

// // 后置刷新的 watchEffect() 有个更方便的别名 watchPostEffect()：
// watchPostEffect(() => {
//   /* 在 Vue 更新后执行 */
// })


// // 要手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数：
// const unwatch = watchEffect(() => {})

// // ...当该侦听器不再需要时
// unwatch()


// 需要异步请求得到的数据
// const data = ref(null)

// // 注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑：
// watchEffect(() => {
//   if (data.value) {
//     // 数据加载后执行某些操作...
//   }
// })

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
// const input = ref(null)

// onMounted(() => {
//   input.value.focus()
// })

// watchEffect(() => {
//   if (input.value) {
//     input.value.focus()
//   } else {
//     // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
//   }
// })

// 当在 v-for 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素：

// const list = ref([
//   /* ... */
//   1,2,3
// ])

// const itemRefs = ref([])

// onMounted(() => console.log(itemRefs.value))

const instance = ref(null)
// console.log(instance)


// 虽然理论上你也可以在向子组件传递 props 时使用 camelCase 形式 (使用 DOM 内模板时例外)，但实际上为了和 HTML attribute 对齐，我们通常会将其写为 kebab-case 形式：
// 
const post = {
  id: 1,
  title: 'My Journey with Vue'
}

// prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：
// const props = defineProps(['initialCounter'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
// const counter = ref(props.initialCounter)

// 需要对传入的 prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：

// const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
// const normalizedSize = computed(() => props.size.trim().toLowerCase())

// 更改对象 / 数组类型的 props​
// 当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然可以更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动，虽然可能生效，但有很大的性能损耗，比较得不偿失。

// 这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该抛出一个事件来通知父组件做出改变。

const searchText = ref('')
const first = ref('')
const last = ref('')

// 传入不同的内容给不同名字的插槽
// BaseLayout({
//   header: `...`,
//   default: `...`,
//   footer: `...`
// })

// // <BaseLayout> 渲染插槽内容到对应位置
// function BaseLayout(slots) {
//   return `<div class="container">
//       <header>${slots.header}</header>
//       <main>${slots.default}</main>
//       <footer>${slots.footer}</footer>
//     </div>`
// }

// const dynamicSlotName = ref('')

// const count = ref(0)
// provide(/* 注入名 */ 'message', /* 值 */ count)

// const location = ref('North Pole')

// function updateLocation() {
//   location.value = 'South Pole'
// }


// // 最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 readonly() 来包装提供的值。
// provide('location', readonly({
//   location,
//   updateLocation
// }))

// 异步组件

// const AsyncComp = defineAsyncComponent(() => {
//   return new Promise((resolve, reject) => {
//     // ...从服务器获取组件
//     // resolve(/* 获取到的组件 */)
//   })
// })

// const AsyncComp = defineAsyncComponent(() =>
//   import('./components/WelcomeItem.vue')
// )

// 异步操作不可避免地会涉及到加载和错误状态，因此 defineAsyncComponent() 也支持在高级选项中处理这些状态：
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./components/WelcomeItem.vue'),

  // 加载异步组件时使用的组件
  // loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  // errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})

// const i18n = inject('i18n')
// console.log(i18n.greetings.hello)

</script>

<template>
  <header>
    <Demo></Demo>

    <!-- <h1>{{ $translate('greetings.hello') }}</h1> -->


      <!-- <Demo></Demo> -->





    <!-- 

      当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。下面我们将先展示默认插槽如何接受 props，通过子组件标签上的 v-slot 指令，直接接收到了一个插槽 props 对象：
     -->
      <!-- <Demo v-slot="slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
      </Demo> -->


    <!-- 动态插槽名 -->
    <!-- <base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template> -->

  <!-- 缩写为 -->
  <!-- <template #[dynamicSlotName]>
    ...
  </template>
</base-layout> -->

    <!-- 当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 <template> 节点都被隐式地视为默认插槽的内容。所以上面也可以写成： -->

      <!-- <Demo>
      <template #header>
    <h1>Here might be a page title</h1>
  </template> -->

  <!-- 隐式的默认插槽 -->
    <!-- <p>A paragraph for the main content.</p>
    <p>And another one.</p>


  <template #footer>
    <p>Here's some contact info</p>
  </template>
    </Demo> -->


    <!-- <Demo>
      <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
    </Demo> -->

    <!-- 有几点需要注意：

和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 foo-bar 这样的一个 attribute 需要通过 $attrs['foo-bar'] 来访问。

像 @click 这样的一个 v-on 事件监听器将在此对象下被暴露为一个函数 $attrs.onClick。 -->

    <!-- <Demo class="test" java="this my faviour language"></Demo> -->

    <!-- <Demo
    java="this my faviour language"
    v-model:first-name.capitalize="first"
  v-model:last-name.uppercase="last"
    > 

    </Demo> -->

<!-- 组件的 v-model 上所添加的修饰符，可以通过 modelModifiers prop 在组件内访问到。在下面的组件中，我们声明了 modelModifiers 这个 prop，它的默认值是一个空对象： -->
    <!-- <Demo v-model.capitalize="searchText"> -->

    <!-- </Demo> -->

    <!-- <Demo v-model:title="searchText"
    v-model:first-name="first"
  v-model:last-name="last"
    /> -->

    

    <!-- 如果你想要将一个对象的所有属性都当作 props 传入，你可以使用没有参数的 v-bind，即只使用 v-bind 而非 :prop-name。例如，这里有一个 post 对象： -->

    <!-- <BlogPost v-bind="post" />
    <BlogPost :id="post.id" :title="post.title" /> -->


    <!-- 虽然 `42` 是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<!-- <BlogPost :likes="42" /> -->

<!-- 根据一个变量的值动态传入 -->
<!-- <BlogPost :likes="post.likes" /> -->

<!-- 仅写上 prop 但不传值，会隐式转换为 `true` -->
<!-- <BlogPost is-published /> -->

<!-- 虽然 `false` 是静态的值，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<!-- <BlogPost :is-published="false" /> -->

<!-- 根据一个变量的值动态传入 -->
<!-- <BlogPost :is-published="post.isPublished" /> -->

<!-- 虽然这个数组是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<!-- <BlogPost :comment-ids="[234, 266, 273]" /> -->

<!-- 根据一个变量的值动态传入 -->
<!-- <BlogPost :comment-ids="post.commentIds" /> -->

<!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<!-- <BlogPost
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
 /> -->

<!-- 根据一个变量的值动态传入 -->
<!-- <BlogPost :author="post.author" /> -->

    <!-- <input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }"> -->

    <!-- <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul> -->


    <!-- <input ref="input" /> -->

    

    <!-- <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p> -->

    <!-- <input v-model.number="msg" /> -->
    <!-- <input v-model.trim="msg" /> -->

    <!-- 在 "change" 事件后同步更新而不是 "input" -->
<!-- <input v-model.lazy="msg" /> -->

    <!-- <input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" /> -->

<!-- <select v-model="selected"> -->
  <!-- 内联对象字面量 -->
  <!-- <option :value="{ number: 123 }">123</option>
</select> -->

<!-- 

  true-value 和 false-value 是 Vue 特有的 attributes，仅支持和 v-model 配套使用。这里 toggle 属性的值会在选中时被设为 'yes'，取消选择时设为 'no'。你同样可以通过 v-bind 将其绑定为其他动态值：
 -->
    <!-- <input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />

  <input
  type="checkbox"
  v-model="toggle"
  :true-value="dynamicTrueValue"
  :false-value="dynamicFalseValue" /> -->


    <!-- <select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selected }}</div> -->


<!-- 
    <div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label> -->

    <!-- <input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label> -->

    <!-- <span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea> -->

    <!-- <p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" /> -->
    <!-- <input
  :value="text"
  @input="event => text = event.target.value">

  <input v-model="text"> -->


    <!-- .exact 修饰符允许控制触发一个事件所需的确定组合的系统按键修饰符。 -->
    <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<!-- <button @click.ctrl="onClick">A</button> -->

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<!-- <button @click.ctrl.exact="onCtrlClick">A</button> -->

<!-- 仅当没有按下任何系统按键时触发 -->
<!-- <button @click.exact="onClick">A</button> -->

    <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<!-- <input @keyup.enter="submit" /> -->
<!-- 你可以直接使用 KeyboardEvent.key 暴露的按键名称作为修饰符，但需要转为 kebab-case 形式。 -->
<!-- <input @keyup.page-down="onPageDown" /> -->

    <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
<!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
<!-- <div @click.capture="doThis">...</div> -->

<!-- 点击事件最多被触发一次 -->
<!-- <a @click.once="doThis"></a> -->

<!-- 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 -->
<!-- 以防其中包含 `event.preventDefault()`
请勿同时使用 .passive 和 .prevent，因为 .passive 已经向浏览器表明了你不想阻止事件的默认行为。如果你这么做了，则 .prevent 会被忽略，并且浏览器会抛出警告。
 -->
<!-- <div @scroll.passive="onScroll">...</div> -->


    <!-- 
使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。因此使用 @click.prevent.self 
会阻止元素及其子元素的所有点击事件的默认行为，而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。

     -->

    <!-- 单击事件将停止传递 -->
<!-- <a @click.stop="doThis"></a> -->

<!-- 提交事件将不再重新加载页面 -->
<!-- <form @submit.prevent="onSubmit"></form> -->

<!-- 修饰语可以使用链式书写 -->
<!-- <a @click.stop.prevent="doThat"></a> -->

<!-- 也可以只有修饰符 -->
<!-- <form @submit.prevent></form> -->

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<!-- <div @click.self="doThat">...</div> -->

    <!-- 使用特殊的 $event 变量 -->
<!-- <button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button> -->

<!-- 使用内联箭头函数 -->
<!-- <button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button> -->

    <!-- <button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button> -->

<!-- `greet` 是上面定义过的方法名 -->
<!-- <button @click="greet">Greet</button> -->

    <!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<!-- <li v-for="todo in todos" v-if="!todo.isComplete" :key="1">
  {{ todo.name }}
</li> -->

<!-- 在外新包装一层 <template> 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读)： -->

  <!-- <template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template> -->


    <!-- <span v-for="n in 10">{{ n }}</span> -->

    <!-- <ul>
  <template v-for="item in items">
    <li>{{ item.message }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul> -->

    <!-- <ul>
  <li v-for="value in myObject" :key="value.length">
    {{ value }}
  </li>
</ul> -->


<!-- <li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li> -->

<!-- <li v-for="(value, key, index) in myObject">
  {{ index }}. {{ key }}: {{ value }}
</li> -->

<!-- 
    <li v-for="item in items" :key="item.message.length">
  {{ item.message }}
</li> -->

<!-- 有 index 索引时 -->
<!-- <li v-for="({ message }, index) in items" :key="index">
  {{ message }} {{ index }}
</li>  -->

    <!-- <template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template> -->

    <!-- <div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div> -->

    <!-- <h1 v-if="awesome">Vue is awesome!</h1> -->

    <!-- <div :style="styleObject"></div> -->

    <!-- :style 支持绑定 JavaScript 对象值，对应的是 HTML 元素的 style 属性：
    尽管推荐使用 camelCase，但 :style 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：
     -->
    <!-- <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

    <div :style="{ 'font-size': fontSize + 'px' }"></div> -->

    <!-- 我们可以给 :class 绑定一个数组来渲染多个 CSS class： -->
    <!-- <div :class="[activeClass, errorClass]"></div> -->

    <!-- 如果你也想在数组中有条件地渲染某个 class，你可以使用三元表达式： -->
    <!-- <div :class="[isActive ? activeClass : '', errorClass]"></div> -->

    <!-- 也可以在数组中嵌套对象 -->

    <!-- <div :class="[{ active: isActive }, errorClass]"></div> -->

    <!-- <div :class="classObject"></div> -->

    <!-- <p>Has published books:</p>
<span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

<span>{{ publishedBooksMessage }}</span>

<p>{{ calculateBooksMessage() }}</p> -->


<!-- 
    在模板渲染上下文中，只有顶级的 ref 属性才会被解包。

在下面的例子中，count 和 object 是顶级属性，但 object.id 不是： -->
    <!-- {{ count + 1 }}，{{ object.id + 1 }} -->

<!-- 另一个需要注意的点是，如果 ref 是文本插值的最终计算值 (即 {{ }} 标签)，那么它将被解包，因此以下内容将渲染为 1： -->
    <!-- {{ object.id }} -->
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld ref="instance" msg="You did it!" v-model="searchText"  >
        <!-- Something bad happened. -->
      </HelloWorld>
      <!-- <button @click="increment">
        {{ count }}
      </button>

      <button @click="state.count++">
  {{ state.count }}
</button> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
