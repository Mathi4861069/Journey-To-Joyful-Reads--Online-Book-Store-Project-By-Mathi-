
import { originalCart } from "../Data/BookCart.js";
import { getBookInfo } from "../Data/BooksInfo.js";
import { getDeliveryOption } from "../Data/deliveryOptions.js";
import { changeformat } from "./changeformat.js";

export function renderPaymentSummary()
{
    let totalCartPrice =0;
    let shippingCost =0;


    originalCart.forEach((cartItem)=>{

        const book = getBookInfo(cartItem.bookId);
        
        console.log(book);

        const totalQuantityPrice =book.price*cartItem.quantity;

        console.log(totalQuantityPrice);

        totalCartPrice=totalCartPrice+totalQuantityPrice;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

        console.log(deliveryOption);

        shippingCost=shippingCost+deliveryOption.Price;
       

    });

    totalCartPrice = changeformat(totalCartPrice);

    console.log("Total Book Price" + totalCartPrice);
    console.log("Total shipping cost" + changeformat(shippingCost));
}