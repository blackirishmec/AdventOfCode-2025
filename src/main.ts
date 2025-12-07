const greet = (name: string): string => `Hello, ${name}!`;

const nums: number[] = [1, 2, 3, 4];

const double = (value: number): number => value * 2;

console.log(greet('Mike'));
console.log(nums.map(double));
