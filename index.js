// Task 1
const friends = [
    { name: 'John', age: 22, address: '123 Main Street' },
{ name: 'Jane', age: 25, address: '456 Elm Street' },
{ name: 'Mike', age: 30, address: '789 Oak Street' },
{ name: 'Emily', age: 28, address: '101 Maple Avenue' },
{ name: 'Chris', age: 35, address: '202 Pine Road' }
];

const friendName = friends.map(friend => friend.name);
console.log('<!-- friend names -->');
console.log(friendName);
// Task 2
const usersWithEyeColor = [
    { name: 'John', age: 22, eyeColor: 'blue' },
    { name: 'Jane', age: 25, eyeColor: 'green' },
    { name: 'Mike', age: 30, eyeColor: 'brown' },
    { name: 'Emily', age: 28, eyeColor: 'blue' },
    { name: 'Chris', age: 35, eyeColor: 'green' }
];


const blueEyeRelatives = usersWithEyeColor.filter(user => user.eyeColor === 'blue').map(user => user.name);;
const greenEyeRelatives = usersWithEyeColor.filter(user => user.eyeColor === 'green').map(user => user.name);;
const brownEyeRelatives = usersWithEyeColor.filter(user => user.eyeColor === 'brown').map(user => user.name);;

console.log('<!-- blue eyes -->');
console.log(blueEyeRelatives);
console.log('<!-- green eyes -->');
console.log(greenEyeRelatives);
console.log('<!-- brown eyes -->');
console.log(brownEyeRelatives);
// Task 3
const usersWithGender = [
    { name: 'John', age: 22, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Mike', age: 30, gender: 'male' },
    { name: 'Emily', age: 28, gender: 'female' },
    { name: 'Chris', age: 35, gender: 'male' }
];

const maleUsers = usersWithGender.filter(user => user.gender === 'male').map(user => user.name);

const femaleUsers = usersWithGender.filter(user => user.gender === 'female').map(user => user.name);
console.log('<!-- male users -->');
console.log(maleUsers);
console.log('<!-- female users -->');
console.log(femaleUsers);
// Task 4
const activeUsers = [
    { name: 'John', age: 22, isActive: true },
    { name: 'Jane', age: 25, isActive: true },
    { name: 'Mike', age: 30, isActive: false },
    { name: 'Emily', age: 28, isActive: false },
    { name: 'Chris', age: 35, isActive: true }
];
const inactiveUsers = activeUsers.filter(user => !user.isActive).map(user => user.name);
console.log('<!-- inactive users -->');
console.log(inactiveUsers);
const activeUsersNames = activeUsers.filter(user => user.isActive).map(user => user.name);
console.log('<!-- active users -->');
console.log(activeUsersNames);
// Task 5
const usersWithEmail = [
    { name: 'John', age: 22, email: 'john@example.com' },
    { name: 'Jane', age: 25, email: 'jane@example.com' },
    { name: 'Mike', age: 30, email: 'mike@example.com' },
    { name: 'Emily', age: 28, email: 'emily@example.com' },
    { name: 'Chris', age: 35, email: 'chris@example.com' }
];

function getUserByEmail(email) {
    return usersWithEmail.find(user => user.email === email);
}

const userEmail = 'jane@example.com';
const user = getUserByEmail(userEmail);
console.log('<!-- user by email -->');
console.log(user.name);
// Task 6
function getUsersByAgeRange(min, max) {
    return usersWithEmail.filter(user => user.age >= min && user.age <= max).map(user => user.name);;
}

const minAge = 25;
const maxAge = 30;
const usersInAgeRange = getUsersByAgeRange(minAge, maxAge);
console.log('<!-- users in age range -->');
console.log(usersInAgeRange);