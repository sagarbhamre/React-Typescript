// const person : {
//     name: string,
//     age: number
// } = {
//    const person :{
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
//    } = {
//     name: 'Sagar',
//     age: 34,
//     hobbies: ['Cricket','Football'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = "ADMIN", READ_ONLY = 200 , AUTHOR = "AUTHOR" }
const person = {
    name: 'Sagar',
    age: 34,
    hobbies: ['Cricket','Football'],
    role: Role.ADMIN
}

let favoriteActivities : string[];

favoriteActivities = ['Sports'];

// person.role = [10, "test"];
// person.role.push('admin'); // it is Allowed(Exception)
// person.role[1] = 10; // ERROR
// console.log(person.role)
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
    console.log('is Author');
}