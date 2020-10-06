// 1. Declare an empty array;
const arr = []

// 2. Declare an array with more than 5 number of elements
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// 3. Find the length of your array
webTechs.length

// 4. Get the first item, the middle item and the last item of the array
console.log('first item: ', webTechs[0])
console.log('middle item: ', webTechs[Math.floor(webTechs.length / 2)])
console.log('last item: ', webTechs[webTechs.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'bobby',
    13,
    true,
    ['b', 'r', 'u', 'h'],
    4.2,
    'D'
]
mixedDataTypes.length

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log('first company: ', itCompanies[0])
console.log('middle company: ', itCompanies[Math.floor(itCompanies.length / 2)])
console.log('last company: ', itCompanies[itCompanies.length - 1])

// 10. Print out each company
itCompanies.forEach(function(entry) {console.log(entry)})

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(function(entry) {console.log(entry.toUpperCase())})

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const arrayCopy = itCompanies;
const lastItem = arrayCopy.pop();
console.log(arrayCopy, lastItem);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using sort() method
// 16. Reverse the array using reverse() method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 20. Slice out the middle IT company or companies from the array
// 21. Remove the first IT company from the array
// 22. Remove the middle IT company or companies from the array
// 23. Remove the last IT company from the array
// 24. Remove all IT companies