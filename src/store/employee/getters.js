export default {
  getReports: state => {
    console.log('rrrr')
    return employee => {
      console.log('e')
      return state.reports.filter(report => report.timeIn.employeeId === employee.employeeId)
    }
  }
}
