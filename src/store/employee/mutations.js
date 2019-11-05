export default {
  addToList: (state, employee) => {
    state.employees.push(employee)
  },
  removeFromList: (state, employee) => {
    state.employees.forEach(e => {
      if (e.employeeId === employee.employeeId) {
        state.employees.splice(state.employees.indexOf(e), 1)
      }
    })
  },
  saveAll: (state, employees) => {
    state.employees = employees
  },
  saveAllReports: (state, reports) => {
    state.reports = reports
  },
  filterReports: (state, employee) => {
    state.selectedReports = state.reports.filter(report => report.timeIn.employeeId === employee.employeeId)
  },
  updateEmployee: (state, employee) => {
    state.employees.forEach(e => {
      if (e.employeeId === employee.employeeId) {
        e.name = employee.name
        e.age = employee.age
        e.address = employee.address
        e.license.licenseId = employee.license.licenseId
        e.license.licenseId = employee.license.licenseId
      }
    })
  }
}
