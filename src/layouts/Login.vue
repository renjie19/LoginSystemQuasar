<template>
  <q-page>
    <q-card class="card">
      <q-input type="number" label="Employee Id" v-model="id"></q-input>
      <q-btn @click="log">SUBMIT</q-btn>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions('employee', { login: 'logEmployee' }),
    log () {
      this.login(parseInt(this.id))
    }
  }
}
</script>

<style scoped>
  .card{
    width: 20%;
    margin: 10% auto;
    text-align: center;
  }
</style>
