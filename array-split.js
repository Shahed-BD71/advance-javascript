const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// const part = nums.slice(3,5);
const part = nums.splice(3,5);
console.log(part);
console.log(nums)

const together = nums.join(',');
console.log(together)





const myArr = ['🍕', '🍾', '🎊', '✨'];

const myArrCopy = myArr.splice(1,3);

console.log(myArrCopy); ["🍕", "🍾", "🎊", "✨"]


// slice : it cuts, start number to just before last num.
// splice : it cuts, start number from last number we give.