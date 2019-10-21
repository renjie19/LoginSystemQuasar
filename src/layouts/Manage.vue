<template>
  <q-card class="absolute-center shadow-2 row" style="margin: 30px auto">
    <employee-table :items ="employees" @employeeSelected="selectItem"></employee-table>
    <div class="shadow-1">
      <q-form style="margin: 10px 30px 10px 30px">
        <q-input label="NAME" type="text" clearable v-model="employee.name"/>
        <q-input label="AGE" type="number" clearable v-model="employee.age"/>
        <q-input label="ADDRESS" type="text" clearable v-model="employee.address"/>
        <q-input label="POSITION" type="text" clearable v-model="employee.position"/>
        <q-input label="LICENSE" type="number" clearable v-model="employee.license.licenseId"/>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import Table from './Table'

export default {
  data () {
    return {
      employees: [],
      employee: {
        employeeId: null,
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
  components: {
    employeeTable: Table
  },
  methods: {
    selectItem (employee) {

    }
  }
}
</script>

<style scoped>

</style>
