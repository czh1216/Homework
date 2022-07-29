<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="(item, index) in list" :key="item.id">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          v-model="item.done"
          @click="checkboxFn(item, index)"
        />
        <label :class="{ txt: !item.done }">{{ item.name }}</label>
        <button class="destroy" @click="delFn(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      list: this.$store.state.todoList.list
    }
  },
  methods: {
    //点击checkbox
    checkboxFn (item, index) {
      if (item.done) {
        //如果这个是完成状态
        this.$store.dispatch('doneFalse', index)
      } else {
        this.$store.dispatch('doneTrue', index)
      }
    },
    //点击删除
    delFn (index) {
      this.$store.dispatch('delItem', index)
    }
  }
}
</script>
