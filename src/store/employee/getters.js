export default {
  getReports: state => {
    return employee => {
      return state.reports.filter(report => report.timeIn.employeeId === employee.employeeId)
    }
  }
}
