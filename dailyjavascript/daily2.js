//list of students with firstname, lastname, grade and age 
const studentsClass = [
    {
        first_name: 'John',
        last_name: 'Cena',
        grade: 87,
        age: 19
    },
    {
        first_name: 'Rwonda',
        last_name: 'Rhosey',
        grade: 99,
        age: 15
    },
    {
        first_name: 'Finn',
        last_name: 'Balor',
        grade: 75,
        age: 18
    },
    {
        first_name: 'Brock',
        last_name: 'Lesnar',
        grade: 79,
        age: 16
    },
    {
        first_name: 'Queen',
        last_name: 'Charlot',
        grade: 82,
        age: 14
    },
    {
        first_name: 'Randy',
        last_name: 'Orton',
        grade: 96,
        age: 17
    },
    {
        first_name: 'Roman',
        last_name: 'Reigns',
        grade: 93,
        age: 19
    },
    {
        first_name: 'AJ',
        last_name: 'Strings',
        grade: 91,
        age: 12
    },
];


//average grade
function classAverage(data){
    if(!Array.isArray(data)) {
        console.log('Parameter is not an array');
    }else {
        const n = data.length;
        const sum = data
        .map(function (studentsClass){
            return studentsClass.grade;
        })
        .reduce(function (x, y){
            return x+y
        },0)

        const mean = sum/n;
        return mean;

    }

}
console.log(classAverage(studentsClass));


//sorting or ranking
studentsClass.sort(function(a,b){
    if (a.grade > b.grade) {
        return 1;
    } else {
        return -1;
    }
});
console.log(studentsClass);


//filter out students 16 and above 
var classArray = studentsClass.filter(function(el){
    return el.age < 16;
});
console.log(classArray);


//output the names and grades of every students
studentsClass.forEach(function(studentsClass,index){
    const aname = `${studentsClass.first_name} ${studentsClass.last_name}`;
    const agrade = studentsClass.grade;
    const message = `${aname} scored ${agrade} in the first exam`;
    console.log(message)
});

