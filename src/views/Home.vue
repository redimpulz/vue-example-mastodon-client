<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ reversedMessage }}</p>
      <button @click="postToots(message)">postToots</button>
    </div>
    <button @click="getToots">getToots</button>
    <ul>
      <li v-for="toot in $store.state.toots" :key="toot.id">
        {{ toot.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue'; */

export default {
  name: 'home',
  components: {
    /*     HelloWorld */
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
    }
  },
  methods: mapActions(['getToots', 'postToots'])
}
</script>
