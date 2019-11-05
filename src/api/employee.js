import axios from 'axios'

export async function createEmployee (employee) {
  const result = await axios.post('/api/employee/save', employee)
  return result.data
}

export async function deleteEmployee (employee) {
  const result = await axios({
    method: 'delete',
    url: '/api/employee/deleteEmployee',
    params: {
      id: employee.employeeId
    }
  })
  return result.data
}

export async function updateEmployee (employee) {
  const result = await axios.post('/api/employee/update', employee)
  return result.data
}

export async function getAll () {
  const result = await axios.get('/api/employee/getAll')
  return result.data
}
