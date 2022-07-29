<template>
  <div>
    <button
      v-if="typeRes"
      class="niceBtn"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        color: color,
        backgroundColor: bgc
      }"
      :class="{ rad: rad }"
    >
      <slot>按钮</slot>
    </button>

    <button
      v-else
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        color: color,
        backgroundColor: bgc
      }"
      :class="{ rad: rad }"
    >
      <slot>按钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    color: {
      type: String
    },
    bgc: {
      type: String
    },
    rad: {
      type: Boolean
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      typeIsShow: true
    }
  },

  created () {
    this.typeRes()
  },

  methods: {
    typeRes () {
      if (this.type === 'niceBtn') {
        this.typeIsShow = true
      }
    }
  }
}
</script>

<style scoped>
.rad {
  border-radius: 10px;
}
.niceBtn {
  width: 200px;
  height: 100px;
  background-color: #0400ff;
}
</style>
