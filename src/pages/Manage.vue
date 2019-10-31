<template>
  <q-card class="column content-center">
    <div class="row" style="margin-top: 20px">
      <employee-table :items ="list" @employeeSelected="selectItem"></employee-table>
      <div class="">
        <q-form style="margin: 10px 30px 10px 30px">
          <q-input label="NAME" type="text" clearable :disable="edit" v-model="employee.name"/>
          <q-input label="AGE" type="number" clearable :disable="edit" v-model="employee.age"/>
          <q-input label="ADDRESS" type="text" clearable :disable="edit" v-model="employee.address"/>
          <q-input label="POSITION" type="text" clearable :disable="edit" v-model="employee.position"/>
          <q-input label="LICENSE" type="number" clearable :disable="edit" v-model="employee.license.licenseNumber"/>
        </q-form>
      </div>
    </div>
    <q-btn-group>
      <q-btn label="SAVE" @click="save"></q-btn>
      <q-btn label="DELETE" @click="deleteEmployee"></q-btn>
      <q-btn label="CLEAR" @click="clear"></q-btn>
    </q-btn-group>
  </q-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Table from '../components/Table'

export default {
  data () {
    return {
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
      },
      edit: true
    }
  },
  components: {
    employeeTable: Table
  },
  methods: {
    ...mapActions('employee', { removeSomeone: 'deleteEmployee', updateEmployee: 'updateEmployee' }),
    deleteEmployee () {
      this.removeSomeone(this.employee)
      this.clear()
    },
    save () {
      this.updateEmployee(this.employee)
      this.clear()
    },
    selectItem (item) {
      this.edit = false
      this.employee = {
        employeeId: item.employeeId,
        name: item.name,
        age: item.age,
        address: item.address,
        position: item.position,
        license: {
          licenseId: item.license.licenseId,
          licenseNumber: item.license.licenseNumber
        }
      }
    },
    clear () {
      this.edit = true
      this.employee = {
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
  computed: {
    ...mapState('employee', { list: 'employees' })
  }
}
</script>

<style scoped>

</style>
