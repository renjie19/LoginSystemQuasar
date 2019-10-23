<template>
  <div class="absolute-center row">
    <employee-table :items="list" @employeeSelected = "selectItem"></employee-table>
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
      <tr v-for="report in selectedReps" :key="report.id" @click="selectReport(report)">
        <td>{{ `${new Date(report.timeIn.time).toLocaleDateString()}` }}</td>
        <td>{{ `${new Date(report.timeIn.time).toLocaleTimeString()}` }}</td>
        <td>{{ `${new Date(report.timeOut.time).toLocaleTimeString()}` }}</td>
        <td>{{ `${((report.timeOut.time - report.timeIn.time)/1000)/3600}` }}</td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Table from './Table'
export default {
  data () {
    return {
      selectedReport: null
    }
  },
  components: {
    employeeTable: Table
  },
  methods: {
    ...mapMutations('index', { setReport: 'filterReports' }),
    selectItem (employee) {
      console.log('select item')
      let x = this.getReps(employee)
      console.log(x)
      // let r = x(employee)
      // console.log(r)
      // this.setReport(employee)
    },
    selectReport (report) {
      this.selectedReport = report
      console.log(this.selectedReport)
    }
  },
  computed: {
    ...mapState('index', { list: 'employees', reports: 'reports', selectedReps: 'selectedReports' }),
    ...mapGetters('index', { getReps: 'getReports' })
  }
}
</script>

<style scoped>

</style>
