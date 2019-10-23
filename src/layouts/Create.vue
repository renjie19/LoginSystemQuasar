<template>
  <q-form class="absolute-center shadow-2" style="width: 300px;padding: 10px">
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
import { mapMutations } from 'vuex'
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
    ...mapMutations('index', { add: 'add', remove: 'remove' }),
    save (employee) {
      this.add(this.employee)
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
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
