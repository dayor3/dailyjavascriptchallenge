// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
  const usersOlderThan24 = texasss.filter(user => user.age > 24);
  console.log(`The following people are older than 24:`, usersOlderThan24);
  
  // Part 2 - Find the total age of all users
  const totalAge = texasss.reduce((total, person) => total + person.age, 0);
  console.log(`The total age of users is ${totalAge}`)
  
  // Part 3 - List all female coders
  const femaleCoders = texasss.filter(coder => coder.gender == "f");
  console.log(`The following persons are female coders`, femaleCoders);
  
  
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
  const usUsers = newieyork.filter(users => users.us == true);
  console.log(`The us users are`, usUsers);
  
  // Part 2 - Sort all users by age
  const usersAge = newieyork.sort((a,b) => a-b);
  console.log(usersAge);
  
  // Part 3 -  List all female coders
  const femaleCodersYork = newieyork.filter(coder => coder.gender == "f")
  console.log(`Female coders in newieyork`, femaleCodersYork);
  
  
  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25
  const totalAgeUnder25 = vegzas.filter(user => user.gender == 'm' && user.age < 25) 
  .reduce((total, person) => total + person.age, 0);
  console.log(`The total age of the male coders:`, totalAgeUnder25);
  
  // Part 2 - List all male coders over 30
  const maleCodersOver30 = vegzas.filter(ages => ages.age >= 30);
  console.log(`Male coders above 30 years are`, maleCodersOver30);
  
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  const totalAgeOfAll = [...texasss, ...newieyork, ...vegzas] .reduce((total, current) => total + current.age, 0);
  console.log(`The total age of the people in the three arrays are:`, totalAgeOfAll);