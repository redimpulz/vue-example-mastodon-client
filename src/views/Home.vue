<template>
  <div class="">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="toot-input">
        <el-input v-model="message" placeholder="Please input"></el-input>
    </div>
    <p>Message is: {{ reversedMessage }}</p>
    <el-button icon="el-icon-edit" type="primary" @click="postToots(message)">postToots</el-button>
    <el-button icon="el-icon-search" @click="getToots">getToots</el-button>
    <el-table :data="fixedToots" style="width: 100%; text-align: left;" empty-text="No Data">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="account.username" label="Name" width="180"></el-table-column>
      <el-table-column prop="content" label="Content"></el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss">
.toot-input {
  margin: 0px 50px;
}
</style>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
import HelloWorld from './../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {
    reversedMessage () {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    fixedToots () {
      return this.$store.state.toots.map(toot => {
        return {
          ...toot,
          content: toot.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
        }
      })
    }
  },
  methods: mapActions(['getToots', 'postToots'])
}
</script>
