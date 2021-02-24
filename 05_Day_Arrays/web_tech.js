//Exercise 5 - Level 2

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

  if(webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
  } else {
    webTechs.push('Sass');
    console.log(webTechs);
  }

  