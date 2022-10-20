const employee = {
    name:'Sonte',
    streetAddress: '94 Legend Drive'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    // console.log("newPeeps")
    // console.log (employee)
    // console.log(key)
    // console.log(value)
    // console.log(newObj)
    const newObj = { ...employee};
        newObj[key] = value;
        return newObj
    }

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    console.log("Before",employee)
    delete newEmployee['name']
    console.log("After",employee)
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key]
    return employee
}




