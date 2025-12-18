

export let originalCart=JSON.parse(localStorage.getItem('originalCartmsg'));

console.log(originalCart);

if(!originalCart)
{
   originalCart=[{bookId:'1002',quantity:3,deliveryOptionId:'1'},{bookId:'1006',quantity:2,deliveryOptionId:'2'}
                ];

}

function saveToStorage()
{
    localStorage.setItem('originalCartmsg',JSON.stringify(originalCart));
}

export function addCart(bookId,selectValue)
{
 
    let matchbook;
    originalCart.forEach((CartItem)=>{

        if(bookId===CartItem.bookId)
        {
            matchbook=CartItem;
        }

    });

    if(matchbook)
    {
        matchbook.quantity=matchbook.quantity+selectValue;
    }
    else 
    {
        originalCart.push({bookId:bookId,quantity:selectValue,deliveryOptionId:'2'});
    }
    console.log(originalCart);
    saveToStorage();

}

export function UpdateQuantity()
{
  
    let originalCartQuantity=0;

    originalCart.forEach((cartItem)=>{

        originalCartQuantity=originalCartQuantity+cartItem.quantity;
    })

     console.log(originalCartQuantity);
     
     document.querySelector('.js-right').innerHTML=originalCartQuantity;

     saveToStorage();

}

export function removeFromCart(deleteId)
{
    const newCart=[];

    originalCart.forEach((book)=>{
        
        if(book.bookId!==deleteId)
        {
            console.log("yes");
            newCart.push(book);

        }
    });

    originalCart=newCart;

    
    console.log(newCart);

    saveToStorage();
}

export function UpdateDeliveryOption(bookId , deliveryOptionId){

 let matchbook;
    
 originalCart.forEach((CartItem)=>{

        if(bookId === CartItem.bookId)
        {
            matchbook=CartItem;
        }

    });

    matchbook.deliveryOptionId = deliveryOptionId;

    saveToStorage();

}



