function createEmployeeRecord([name, lastname, job, pay]){
    return  {
        firstName : name,
        familyName : lastname,
        title : job,
        payPerHour : pay,
        timeInEvents : [],
        timeOutEvents: [],
    }
    
}



function createEmployeeRecords(employeeRecords){ //array of arrays
    return employeeRecords.map(record => createEmployeeRecord(record))
   
}

function createTimeInEvent(record, stamp){
    record.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(stamp.split(' ')[1].split('').splice(0,2).join('') + '00'), 
        date: stamp.split(' ')[0]
    })
    return record
}

function createTimeOutEvent(record, stamp){
    record.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(stamp.split(' ')[1].split('').splice(0,2).join('') + '00'), 
        date: stamp.split(' ')[0]
    })
    return record
}

function hoursWorkedOnDate(record, date){
    const TIE = record.timeInEvents.find(event => event.date === date)
    const TOE = record.timeOutEvents.find(event => event.date === date)
    return (TOE.hour - TIE.hour) / 100 
}

function wagesEarnedOnDate(record, date){
    return hoursWorkedOnDate(record, date) * record.payPerHour
}