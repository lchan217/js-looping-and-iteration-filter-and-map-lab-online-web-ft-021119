function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attr) {
  return drivers.filter(driver =>{
    let result = null
    for (const key in attr) {
      result = driver[key] === attr[key]
    }
    return result
  })
}

function exactMatchToList(drivers, attr){
  return exactMatch(drivers, attr).map(driver=>driver.name)
}
