
/* 1.Филтрирање на дадена низа по даден параметар */
const arrayOfNames = ["Jane", "David", "Emily", "Sara", "Peter"]
const namesWithLessThanFiveChars = arrayOfNames.filter(name => name.length < 5)
console.log(namesWithLessThanFiveChars)

/* 2.Сортирање на дадена низа по даден параметар */
const arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthsSortedByNumOfChars = arrayOfMonths.sort((a, b) => a.length - b.length)
console.log(monthsSortedByNumOfChars)

/* 3.Сумирање на параметри од дадена низа */
const arrayOfCosts = [505, 1000, 133, 1888, 220, 464]
const totalCost = arrayOfCosts.reduce((acc, current) => acc + current, 0)
console.log(totalCost)

/* 4.Пронаоѓање на член од дадена низа */
const arrayOfNumbers = [57, 13, 11, 84, 21, 93, 49, 53]
const numOverThirtyFive = arrayOfNumbers.find(num => num > 35 && num % 7 === 0)
console.log(numOverThirtyFive)