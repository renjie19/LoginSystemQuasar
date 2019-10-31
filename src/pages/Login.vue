<template>
  <q-page class="row">
    <q-card class="col-4 offset-5 self-center" style="width: 300px; height: 100px">
      <q-input type="number" label="Employee Id" v-model="id"></q-input>
      <q-btn @click="log" v-ripple>SUBMIT</q-btn>
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
      if (this.id) {
        this.login(parseInt(this.id))
      }
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
