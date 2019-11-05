import axios from 'axios'
import { createEmployee, deleteEmployee, getAll, updateEmployee } from '../../api/employee'
import { log } from '../../api/timeLog'

export default {
  createEmployee: ({ commit }, employee) => {
    // await axios.post('/api/employee/save', employee)
    //   .then(response => commit('add', response.data))
    //   .catch(e => Notify.create({
    //     message: e.response.data.message,
    //     position: 'top'
    //   }))
    return new Promise(async (resolve, reject) => {
      try {
        const result = await createEmployee(employee)
        commit('addToList', result)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  },
  getEmployees: ({ commit }) => {
    // await axios.get('/api/employee/getAll')
    //   .then(response => commit('saveAll', response.data))
    //   .catch(e => console.log(e))
    return new Promise(async (resolve, reject) => {
      try {
        const result = await getAll()
        commit('saveAll', result)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  logEmployee: ({ commit }, id) => {
    // axios({
    //   method: 'post',
    //   url: '/api/facade/saveParam',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   params: {
    //     id: id
    //   }
    // })
    //   .then(response => console.log(response.data))
    //   .catch(e => Notify.create({
    //     message: e.response.data.message,
    //     position: 'top'
    //   }))
    return new Promise(async (resolve, reject) => {
      try {
        await log(id)
        resolve()
      } catch (error) {
        reject(error.message())
      }
    })
  },
  deleteEmployee: ({ commit }, employee) => {
    // await axios({
    //   method: 'delete',
    //   url: '/api/employee/deleteEmployee',
    //   params: {
    //     id: employee.employeeId
    //   }
    // })
    //   .then(() => commit('remove', employee))
    //   .catch(e => console.log(e))
    return new Promise(async (resolve, reject) => {
      try {
        await deleteEmployee(employee)
        commit('removeFromList', employee)
        resolve()
      } catch (error) {
        reject(error.message)
      }
    })
  },
  getReports: async ({ commit }, params) => {
    await axios({
      method: 'get',
      url: '/api/report/viewByEmployeeId',
      params: {
        id: params.employee.employeeId,
        startDate: params.startDate,
        endDate: params.endDate
      }
    })
      .then(response => {
        commit('saveAllReports', response.data)
      })
  },
  updateEmployee: ({ commit }, employee) => {
    // axios.post('/api/employee/update', employee)
    //   .then(response => {
    //     commit('update', employee)
    //     console.log(response)
    //   })
    //   .catch(e => console.log(e))
    return new Promise(async (resolve, reject) => {
      try {
        const result = await updateEmployee(employee)
        commit('updateEmployee', result)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  updateTimeLog: async ({ commit }, timeLog) => {
    await axios.post('/api/timeLog/update', timeLog)
  }
}
