const prices: (number | string)[] = [1, 2, 3, 4, 4, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user= ['nicobytes',15]

// user=[]
// user =['nico',12]
user = ['nico', 12, true];

const [username, age] = user;

console.log(username, age);
