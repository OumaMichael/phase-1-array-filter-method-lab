const drivers = ["Jacob Aliet", "Verah", "Silas Nyanchwani", "Amerix", "Jadwar", "Michael Ouma"];
function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
};
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0);
};
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}; 
const driverObjects = [
    { name: "jacob aliet", hometown: "Naivasha" },
    { name: "Silas Nyanchwani", hometown: "Kisumu" },
    { name: "Sally", hometown: "Philadephia" },
    { name: "Amerix", hometown: "Kakamega" },
    { name: "Jadwar", hometown: "South-C" },
    { name: "Jacob Aliet", hometown: "Nairobi" }
];
console.log(findMatching(drivers, "jacob aliet"));
console.log(fuzzyMatch(drivers, "j"));
console.log(matchName(driverObjects, "Jacob Aliet")); //case-sensitive