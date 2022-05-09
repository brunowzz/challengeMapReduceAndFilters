// Adicionar 10% de Valor ao marketValue
// Filtrar apenas as empresas fundadas antes de 2000
// Somar o valor de mercado das empresas

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

const newMarket = (percentage) => {
    percentage.marketValue += (percentage.marketValue * (10 / 100))
    return percentage
}

const filterCompany = (filtered) => filtered.foundedOn < 2000

const sum = (acc, current) => acc + current.marketValue

const bestCompany = companies
    .map(newMarket)
    .filter(filterCompany)
    .reduce(sum, 0)

console.log(bestCompany)
