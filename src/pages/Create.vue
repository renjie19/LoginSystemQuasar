<template>
  <q-form class="column shadow-2" style="width: 300px;padding: 20px;margin: auto">
    <q-item-label>INFORMATION</q-item-label>
    <q-input label="NAME" clearable v-model="employee.name"></q-input>
    <q-input label="AGE" clearable type="number" v-model="employee.age"></q-input>
    <q-input label="ADDRESS" clearable v-model="employee.address"></q-input>
    <q-input label="POSITION" clearable v-model="employee.position"></q-input>
    <q-input label="LICENSE" clearable type="number" v-model="employee.license.licenseNumber"></q-input>
    <q-btn label="SUBMIT" @click="save"></q-btn>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
import Notify from 'quasar/src/plugins/Notify'
export default {
  data () {
    return {
      employee: {
        employeeId: 0,
        name: null,
        age: null,
        address: null,
        position: null,
        license: {
          licenseId: null,
          licenseNumber: null
        }
      }
    }
  },
  methods: {
    ...mapActions('employee', { create: 'createEmployee' }),
    save () {
      if (this.employee.name && this.employee.age && this.employee.address && this.employee.position &&
        this.employee.license.licenseNumber) {
        this.create(this.employee)
          .then(Notify.create({
            message: 'Created Successfully',
            position: 'top',
            color: 'green'
          }))
          .catch(response => Notify.create({
            message: response,
            position: 'top',
            color: 'red'
          }))
        this.employee = {
          employeeId: 0,
          name: null,
          age: null,
          address: null,
          position: null,
          license: {
            licenseId: null,
            licenseNumber: null
          }
        }
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
