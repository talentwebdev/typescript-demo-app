// // const person: {
// //     name: string,
// //     age: number
// // } = {
// //     name: 'Maximilian',
// //     age: 30
// // };
// // const person: {
// //     name: string;
// //     age: number;
// //     hobbies: string[];
// //     role: [number, string];
// // } = {
// //     name: 'Maximmilian',
// //     age: 30,
// //     hobbies: ['Sports', 'Cooking'],
// //     role: [2, 'author']
// // };

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: Role,
// } = {
//     name: 'Maximmilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN,
// };

// let favoriteActivites: any[];
// favoriteActivites = ['Sports'];

// console.log(person.name)
// // person.role[1] = 10;

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }


function combine(input1: number | string, input2: number | string) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}