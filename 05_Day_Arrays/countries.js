//Exercise 4 - Level 2

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  if(countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    countries.push('ethiopia');
  }

  //Exercise 1 - Level 3
  const newCountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

  newCountries.slice(0,11);
  console.log(newCountries);

 