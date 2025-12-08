
import { books_information } from "./Data/BooksInfo.js";
import { addCart, UpdateQuantity,originalCart} from "./Data/BookCart.js";
//import { addToCart } from "./Data/BookCart.js";


let list='';
books_information.forEach((Book)=>{

    const html=` 
    <div class="grid-box">
    <div class="small-box">
        <div class="book-name">${Book.name}</div>
        <div class="book-image"><image class="image-size" src="${Book.image}"></div>
        <div>
        <select class="select-css js-select-${Book.id}">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </div>
        <div class="addMessage-${Book.id} addMessage-css"></div>
        <button class="button-css js-button" data-book-id="${Book.id}">Add To Cart</button>
    </div>

    <div class="author-info">
    <div class="author">Author:${Book.author}</div>
    <div class="price">Price:Rs.${Book.price}</div>
    <div>Review:</div>
    <img src="${Book.star}"  class="star-img">
     </div>
    </div>
    
    `;

    list=list+html;

});

document.querySelector('.home-container').innerHTML=list;

document.querySelectorAll('.js-button').forEach((button)=>{

    button.addEventListener('click',()=>{

        const bookId=button.dataset.bookId;
        console.log(bookId);

        document.querySelector(`.addMessage-${bookId}`).innerHTML="Added To Cart!!";

        setTimeout(() => {
        document.querySelector(`.addMessage-${bookId}`).innerHTML=" ";
        }, 3000);

        console.log(document.querySelector(`.js-select-${bookId}`).value);
        let selectValue=document.querySelector(`.js-select-${bookId}`).value;
        selectValue=Number(selectValue);
        
        
        addCart(bookId,selectValue);
        UpdateQuantity();
        
    });
    

});










