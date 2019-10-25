import axios from 'axios'
export default {
  createEmployee: async ({ commit }, employee) => {
    await axios.post('/api/employee/save', employee)
      .then(response => commit('add', response.data))
      .catch((e) => console.log(e))
  },
  getEmployees: async ({ commit }) => {
    await axios.get('/api/employee/getAll')
      .then(response => commit('saveAll', response.data))
      .catch(e => console.log(e))
  },
  logEmployee: async ({ commit }, id) => {
    await axios({
      method: 'post',
      url: '/api/facade/saveParam',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        id: id
      }
    })
      .then(response => console.log(response.data))
      .catch(e => console.log(e))
  },
  deleteEmployee: async ({ commit }, employee) => {
    await axios({
      method: 'delete',
      url: '/api/employee/deleteEmployee',
      params: {
        id: employee.employeeId
      }
    })
      .then(() => commit('remove', employee))
      .catch(e => console.log(e))
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
  updateEmployee: async ({ commit }, employee) => {
    await axios.post('/api/employee/update', employee)
      .then(response => {
        commit('update', employee)
        console.log(response)
      })
      .catch(e => console.log(e))
  },
  updateTimeLog: async ({ commit }, timeLog) => {
    await axios.post('/api/timeLog/update', timeLog)
  }
}
