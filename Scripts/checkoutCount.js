import { originalCart } from "../Data/BookCart.js";
export function checkCount()
{

let count=0;
originalCart.forEach((item)=>{

    count=count+1;
});

console.log(count);
return count;
}