"strict mode"

const drivers =  ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

// createFareMultiplier

const createFareMultiplier = function(numberOfTickets){
    return function(fare){
    return  numberOfTickets * fare
    }
    }   


const fareDoubler = createFareMultiplier(2)

fareDoubler(10);

const fareTripler = createFareMultiplier(3);

fareTripler(10);

//selectDifferentDrivers

// const selectDifferentDrivers = [drivers, Function]
// const selectDifferentDrivers = selectingDrivers[0](drivers)
// console.log(selectDifferentDrivers)


const selectDifferentDrivers = function (drivers, value){
   if  (value = returnFirstTwoDrivers){
return returnFirstTwoDrivers(drivers);
   }else if (value = returnLastTwoDrivers){

return returnLastTwoDrivers(drivers)
   }
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);

selectDifferentDrivers(drivers, returnLastTwoDrivers);
