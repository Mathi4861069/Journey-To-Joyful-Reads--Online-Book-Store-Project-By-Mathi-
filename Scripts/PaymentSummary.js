
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

    const TotalBeforeTax = eval( totalCartPrice + shippingCost);
    const taxCalculation = TotalBeforeTax *0.05;  // we multiple 0.05 for 5% of tax//
    const TotalAfterTax = eval(TotalBeforeTax+taxCalculation);

    console.log("Total Book Price" + totalCartPrice);
    console.log("Total " + TotalBeforeTax);
    console.log(shippingCost);
    console.log(taxCalculation);
    console.log(TotalAfterTax);


    const paymentHTML=`
        <table class="table">

                <tr>
                    <td> Cart Books Total Price Rs:</td>
                    <td>${changeformat (totalCartPrice)}</td>
                </tr>
                <tr>
                    <td> Shipping Price Rs:</td>
                    <td>${changeformat (shippingCost)}</td>
                </tr>
                <tr>
                    <td>Total Price Before Tax :</td>
                    <td>${changeformat (TotalBeforeTax)}</td>
                </tr>
                <tr>
                    <td>Extimated Tax (5%):</td>
                    <td>${changeformat (taxCalculation)}</td>
                </tr>
                <tr class="total-css">
                    <td>Total Price With Tax:</td>
                    <td>${changeformat(TotalAfterTax)}</td>
                </tr>
            </table>   
    `;

    document.querySelector('.js-payment-detail').innerHTML = paymentHTML;
    renderPaymentSummary();
 
}