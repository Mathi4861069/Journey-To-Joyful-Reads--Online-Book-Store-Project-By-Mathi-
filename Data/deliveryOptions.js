export const deliveryOptionCart=[ {id:'1',deliveryTime:7,Price:0},
                        {id:'2',deliveryTime:3,Price:10},
                        {id:'3',deliveryTime:1,Price:30}
                    ];


export function getDeliveryOption(deliveryOptionId)
{
    let deliveryOption;

deliveryOptionCart.forEach((option)=>{

    console.log(option.id);

    if(option.id === deliveryOptionId)
    {
        deliveryOption = option;
    }

});

return deliveryOption ;
}                    