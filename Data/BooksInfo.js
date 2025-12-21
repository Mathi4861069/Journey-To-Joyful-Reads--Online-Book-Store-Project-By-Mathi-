
export function getBookInfo(bookId)
{
     let matchSearchbook; 

    books_information.forEach((book)=>{
        console.log(book.id);

        if(book.id===bookId)
        {
            matchSearchbook=book;
        }
    });

    return matchSearchbook;

}

//instead of writing code for book info we can use the above funtion to get book info using bookId

export const books_information=[
    {name:'I Came Upon A LightHouse',author:'Shantanu Naidu',image:'/images/lighthouse.png',id:'1001',price:500,star:'/images/star5.png'},
    {name:'The Untamed',author:'Mo Xiang Tong Xiu',image:'/images/untamed.png',id:'1002',price:850,star:'/images/star5.png'},
    {name:'Art of Being Alone',author:'Renuka Gavrani',image:'/images/alone.png',id:'1003',price:200,star:'/images/star4.5.png'},
    {name:'Zen Simple Living',author:'Shunmyo Masuno',image:'/images/zen.png',id:'1004',price:490,star:'/images/star4.5.png'},
    {name:'Zero To One',author:'Peter Thiel co-written with Blake Masters',image:'/images/zero.png',id:'1005',price:400,star:'/images/star4.png'},
    {name:'Twisted Games',author:'Ana Huang',image:'/images/games.png',id:'1006',price:250,star:'/images/star4.5.png'},
    {name:'Power Of Your Subconscious Mind',author:'Dr. Joseph Murphy',image:'/images/power.png',id:'1007',price:350,star:'/images/star4.5.png'},
    {name:'Ikigai',author:'Francesc Miralles and Hector Garcia',image:'/images/ikigai.png',id:'1008',price:110,star:'/images/star4.5.png'}
];