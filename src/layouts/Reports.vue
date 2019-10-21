<template>
  <div class="absolute-center row">
    <employee-table :items="employees" @employeeSelected = "selectItem"></employee-table>
    <q-markup-table>
      <thead>
      <tr>
        <th>DATE</th>
        <th>TIME IN</th>
        <th>TIME OUT</th>
        <th>TOTAL</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import Table from './Table'
export default {
  data () {
    return {
      employees: []
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
