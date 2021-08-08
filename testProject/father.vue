<template>
    <h2>我是父组件</h2>
    <child></child>
</template>
<script>
import child from './child.vue'

export default {
  name:'father',
  components: { child }
}
</script>

