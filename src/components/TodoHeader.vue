<template>
  <header class="header">
    <h1 :style="{ color: headerColor }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model="text"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="enterFn"
    />
  </header>
</template>

<script>
export default {
  computed: {
    headerColor () {
      return this.$store.state.todoHeader.color
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    //添加内容
    enterFn () {
      if (this.text.trim().length <= 0) return (this.text = '')
      const newObj = {}
      const res = this.$store.state.todoList.list

      newObj.name = this.text
      newObj.done = false
      res[res.length - 1]
        ? (newObj.id = res[res.length - 1].id + 1)
        : (newObj.id = 1)

      console.log(newObj)
      this.$store.dispatch('addObj', newObj)
      this.text = ''
    }
  }
}
</script>
