// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const allShoes = brands.reduce((acc, curr) => {
    return [...acc, ...curr.shoes];
  }, []);
  return allShoes;
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const ageTotal = dogs.reduce((sum, currDog) => { 
    return sum + currDog.age; 
  }, 0);
  return ageTotal / dogs.length;
};


