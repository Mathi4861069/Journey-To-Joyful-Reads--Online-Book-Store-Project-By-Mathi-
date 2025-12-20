
import { originalCart ,removeFromCart, UpdateDeliveryOption} from "../Data/BookCart.js";
import { books_information,getBookInfo } from "../Data/BooksInfo.js";
import { changeformat } from "./changeformat.js";
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js" 
//we use ESM version of dayjs function 
// ESM is nothing but an function from code is export from the file

import { deliveryOptionCart, getDeliveryOption } from "../Data/deliveryOptions.js";

//const today=dayjs();
//const deliveryDate=today.add(7,'days');
//console.log(deliveryDate);
//console.log(deliveryDate.format('dddd,MMMM D'));

/* inorder to render the cart page and avoiding delivery option issue 
we can put all the code into a function called renderOrderSummary() and make it run  */

export function renderOrderSummary(){
    
let list='';
originalCart.forEach((cartItem)=>{
  
    const bookId=cartItem.bookId;
    
    const matchSearchbook = getBookInfo(bookId); 

    /* books_information.forEach((book)=>{
        console.log(book.id);

        if(book.id===bookId)
        {
            matchSearchbook=book;

        }
    });*/ // instead of using the commanted codes we can call the function getBookInfo() //

//get the delivery option Id from cartItems and using this we gonna get full delivery date options//

const deliveryOptionId = cartItem.deliveryOptionId;

let deliveryOption = getDeliveryOption(deliveryOptionId);

/* deliveryOptionCart.forEach((option)=>{

    console.log(option.id);

    if(option.id === deliveryOptionId)
    {
        deliveryOption = option;
    }

}); */ // instead of using these code to get delivery option we can call the getDeliveryOption() //

    const today=dayjs();
        
    let deliveryDate = today.add(deliveryOption.deliveryTime,'days');

    let deliveryString = deliveryDate.format('dddd, MMMM D');
    console.log(deliveryString);



let CartItemshtml =`
<div class="big-box js-big-container-${matchSearchbook.id}">
<div class="h3">Delivery Date:${deliveryString}</div>
<div class="outer-box">

<div class="info-outer-box">
    <div class="image-box">
        <div><img src="${matchSearchbook.image}" class="image-css"></div>
    </div>
    <div class="detail-box">
        <div class="detail">Book Id: ${matchSearchbook.id}</div>
        <div class="detail">Book Name: ${matchSearchbook.name}</div>
        <div class="detail">Quantity : ${cartItem.quantity}</div>
        <div class="detail">Price : ${changeformat(matchSearchbook.price)}</div>
        <div class="button-container">
        <button class="button-css">Update</button>
        <button class="button-css js-delete" data-delete-id=${matchSearchbook.id}>Delete</button>
        </div>
    </div>
</div>

<div class="radio-container-css">
<h4 class="h4-css">Choose Your Delivery Options</h4>

${deliveryDetailsHTML(matchSearchbook,cartItem)}

</div>
   
 </div>
 </div> `;

    list=list+CartItemshtml;

});

document.querySelector('.cart-container').innerHTML=list;

//delete a book container from cart page

document.querySelectorAll('.js-delete').forEach((button)=>{
    button.addEventListener('click',()=>{

        const deleteId=button.dataset.deleteId;
         console.log(deleteId);
         removeFromCart(deleteId);

         const container=document.querySelector(`.js-big-container-${deleteId}`);
         console.log(container);
         container.remove();
       
    });

});
// To count the cart items

let count=0;
originalCart.forEach((item)=>{

    count=count+1;
});
console.log(count);

document.querySelector('.js-middle').innerHTML=`CheckOut ( ${count} ) Books!`;


//for delivery Options....

function deliveryDetailsHTML(matchSearchbook,cartItem)
{

    let deliveryHTML='';

deliveryOptionCart.forEach((deliveryOption)=>{

    const today=dayjs();
    let deliveryDate = today.add(deliveryOption.deliveryTime,'days');

    let deliveryString = deliveryDate.format('dddd, MMMM D');
    console.log(deliveryString);


/*Use ternary operator to find the shipping cost.. 
(ternary operator is just like if else method , 
but we can store the output value in a variable)
*/
    let Price = deliveryOption.Price === 0 ? 'Free' : `$${changeformat(deliveryOption.Price)}`;

    // for checked radio option

    let isChecked = deliveryOption.id === cartItem.deliveryOptionId ; 

    console.log(cartItem.deliveryOptionId);
    console.log(cartItem); 

    

    //generate html from saving data...

let html_del=`
    <div class="radio-value js-delivery-option" 
    data-book-id="${matchSearchbook.id}" 
    data-delivery-option-id="${deliveryOption.id}">  
    <input type="radio" ${isChecked ? 'checked':''} name=${matchSearchbook.id} >
        <div class="date-css"> ${deliveryString} </div>
        <div class="price-css"> ${Price} - For Shipping </div>
    </div>
    
    `;
    deliveryHTML=deliveryHTML+html_del;


});
    console.log(deliveryHTML);
    

    return deliveryHTML;

}

document.querySelectorAll('.js-delivery-option').forEach((element)=>{

    element.addEventListener('click',()=>{

        const bookId = element.dataset.bookId;
        const deliveryOptionId=element.dataset.deliveryOptionId;
        UpdateDeliveryOption(bookId,deliveryOptionId);

        renderOrderSummary(); // A function can run or call inside itself is calles "recursion"
    });   
});

};







