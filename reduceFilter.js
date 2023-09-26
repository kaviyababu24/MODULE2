const numbers = [1,2,3,4,5];
const even = numbers.filter(item) => item % 2 === 0);
console.log(even);

const students = [
    {name: "sidd",age: 24};
    {name: "Tina", age: 22};

];
const filteredStudents = students.filter((stud, index)=>{
   console.log("index");
    return stud.age<=22;
});
console.log(filteredStudents);

)