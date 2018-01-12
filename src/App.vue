<template>
  <div id="app">
    <div class="node" v-for="(item, index) in data" :key="index">{{ item.title }}</div>
    <button @click="onCreateNodeClick">Create Node</button>
  </div>
</template>

<script>
import JSPlumbManager from './mixins/manager'

export default {
  name: 'app',
  mixins: [
    JSPlumbManager
  ],
  data () {
    return {
      data: [{
        id: 1,
        title: 'node1',
        link: 2
      }, {
        id: 2,
        title: 'node2'
      }]
    }
  },
  mounted () {
    this.$jsplumb.ready().then(instance => {
      console.log(this)
    })
  },
  methods: {
    onCreateNodeClick () {
      this.data.push({
        title: 'New Node'
      })
    }
  }
}
</script>

<style>
#app {
  position: relative;
}

.node {
  padding: 10px;
  border: 1px solid #e6ebf5;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #2d2f33;
  width: 100px;
}
</style>
