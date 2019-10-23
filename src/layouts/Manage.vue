<template>
  <q-card class="absolute-center shadow-2 row" style="margin: 30px auto">
    <employee-table :items ="list" @employeeSelected="selectItem"></employee-table>
    <div class="shadow-1">
      <q-form style="margin: 10px 30px 10px 30px">
        <q-input label="NAME" type="text" clearable v-model="employee.name"/>
        <q-input label="AGE" type="number" clearable v-model="employee.age"/>
        <q-input label="ADDRESS" type="text" clearable v-model="employee.address"/>
        <q-input label="POSITION" type="text" clearable v-model="employee.position"/>
        <q-input label="LICENSE" type="number" clearable v-model="employee.license.licenseNumber"/>
      </q-form>
    </div>
    <q-btn-group>
      <q-btn label="SAVE" @click="save"></q-btn>
      <q-btn label="DELETE" @click="deleteEmployee"></q-btn>
      <q-btn label="CLEAR" @click="clear"></q-btn>
    </q-btn-group>
  </q-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Table from './Table'

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
      }
    }
  },
  components: {
    employeeTable: Table
  },
  methods: {
    ...mapMutations('index', { update: 'update', removeEmployee: 'remove' }),
    deleteEmployee () {
      this.removeEmployee(this.employee)
      this.clear()
    },
    save () {
      this.update(this.employee)
      this.clear()
    },
    selectItem (item) {
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
    ...mapState('index', { list: 'employees' })
  }
}
</script>

<style scoped>

</style>
