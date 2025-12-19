
import { originalCart } from "../Data/BookCart.js";
import { getBookInfo } from "../Data/BooksInfo.js";
import { changeformat } from "./changeformat.js";

export function renderPaymentSummary()
{
    let totalCartPrice=0;
    originalCart.forEach((cartItem)=>{

        const book = getBookInfo(cartItem.bookId);
        
        console.log(book);

        const totalQuantityPrice =book.price*cartItem.quantity;

        console.log(totalQuantityPrice);

        totalCartPrice=totalCartPrice+totalQuantityPrice;
        

    });

    totalCartPrice = changeformat(totalCartPrice);

    console.log(totalCartPrice);
}