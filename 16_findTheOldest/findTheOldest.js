const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;

    return personAge > oldestAge ? person : oldest;
  }, people[0]);  // return whole object
};





// Do not edit below this line
module.exports = findTheOldest;
