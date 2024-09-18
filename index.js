const employee = {
    name: 'Bob',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {
        ...obj,
        [key]: value,
    }

    return newObj;
}
// console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Nick'));

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
// console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Will'));

function deleteFromEmployeeByKey(obj, key) {
    const newObj = {
        ...obj,
    }

    delete newObj[key];

    return newObj;
}
// console.log(deleteFromEmployeeByKey(employee, 'name'));

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}
