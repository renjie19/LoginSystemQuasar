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
      <tr v-for="report in reports" :key="report.id" @click="selectReport(report)">
        <td>{{ `${new Date(report.timeInLog.time).toLocaleDateString()}` }}</td>
        <td>{{ getTime(report.timeInLog) }}</td>
        <td>{{ getTime(report.timeOutLog) }}</td>
        <td>{{ report.totalHours}}</td>
      </tr>
      </tbody>
    </q-markup-table>
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="dateTime" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 400px">
          <q-card-section>
            <div class="text-h6">Report</div>
          </q-card-section>

          <q-card-section>
            <q-input label="Start Date" filled v-model="startDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="startDatePicker" transition-show="scale" transition-hide="scale">
                    <q-date v-model="startDate" @input="() => $refs.startDatePicker.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input label="End Date" filled v-model="endDate" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="endDatePicker" transition-show="scale" transition-hide="scale">
                    <q-date v-model="endDate" @input="() => $refs.endDatePicker.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="SUBMIT" v-close-popup @click="getDateRange" />
            <q-btn flat label="CANCEL" v-close-popup @click="startDate = null, endDate = null"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="editTime" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-teal text-white" style="width: 400px">
            <q-card-section>
              <div class="text-h6">Report</div>
            </q-card-section>

            <q-card-section>
              <q-input label="Time In" v-model="timeIn"/>
              <q-input label="Time Out" v-model="timeOut"/>
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="SAVE" v-close-popup @click="updateReport" />
              <q-btn flat label="CANCEL" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Table from '../components/Table'
export default {
  data () {
    return {
      employee: {},
      selectedReport: {
        id: null,
        timeInLog: {
          id: null,
          employeeId: null,
          time: null,
          type: null
        },
        timeOutLog: {
          id: null,
          employeeId: null,
          time: null,
          type: null
        },
        totalHours: null
      },
      editTime: false,
      timeIn: null,
      timeOut: null,
      timeFormat: {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      },
      dateTime: false,
      startDate: '',
      endDate: ''
    }
  },
  components: {
    employeeTable: Table
  },
  methods: {
    ...mapActions('employee', { getSome: 'getReports', updateRep: 'updateTimeLog' }),
    selectItem (employee) {
      this.dateTime = true
      this.employee = employee
    },
    selectReport (report) {
      this.selectedReport = report
      this.timeIn = this.getTime(this.selectedReport.timeInLog)
      this.timeOut = this.getTime(this.selectedReport.timeOutLog)
      this.editTime = true
    },
    getTime (time) {
      if (time) {
        return new Date(time.time).toLocaleTimeString('en-US', this.timeFormat)
      }
      return 0
    },
    updateReport () {
      let inLog = new Date(this.selectedReport.timeInLog.time).toLocaleDateString() + ' ' + this.timeIn
      let outLog = new Date(this.selectedReport.timeInLog.time).toLocaleDateString() + ' ' + this.timeOut
      this.selectedReport.timeInLog.time = new Date(inLog).getTime()
      this.selectedReport.timeOutLog.time = new Date(outLog).getTime()
      this.updateRep(this.selectedReport.timeInLog)
      this.updateRep(this.selectedReport.timeOutLog)
      this.getDateRange()
    },
    getDateRange () {
      let params = {
        employee: this.employee,
        startDate: this.startDate.replace(/\//g, '-'),
        endDate: this.endDate.replace(/\//g, '-')
      }
      this.getSome(params)
    }
  },
  computed: {
    ...mapMutations('employee', { updateStateReport: 'updateReport' }),
    ...mapState('employee', { list: 'employees', reports: 'reports' })
  }
}
</script>

<style scoped>

</style>
