const employee = {
    name: "Sam",
    // streetAddress: "667 Mont St"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {
        ...obj,
        [key]: value,
    }

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(obj, key) {

    const newEmployee = {
        ...obj
    };

    delete newEmployee[key];
    
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]

    return obj;
}


console.log(employee);
// console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'))
// console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))

console.log(deleteFromEmployeeByKey(employee, 'name'))

// updateEmployeeWithKeyAndValue(employee, 'name', 'streetAddress')
