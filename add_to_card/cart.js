// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// // localStorage.clear()
// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// // Retrieve listCards from localStorage or initialize as an empty array
// let listCards = JSON.parse(localStorage.getItem("listCards")) || [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// reloadCard();

// function addToCard(key){
   
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     //Update localStorage with the latest listCards
//     localStorage.setItem("listCards", JSON.stringify(listCards));
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;

//     for(const key in listCards){
//         totalPrice = totalPrice + listCards[key].price;
//         count = count + listCards[key].quantity;
//         if(listCards[key] != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${listCards[key].image}"/></div>
//                 <div>${listCards[key].name}</div>
//                 <div>${listCards[key].price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${listCards[key].quantity - 1})">-</button>
//                     <div class="count">${listCards[key].quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${listCards[key].quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     }

//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     // Update localStorage with the latest listCards
//     localStorage.setItem("listCards", JSON.stringify(listCards));
//     reloadCard();
// }



//..........................................................................#########################################################................................................

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

// localStorage.clear()
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000,
        btnText: "Add to Card",
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000,
        btnText: "Add to Card",
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000,
        btnText: "Add to Card",
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000,
        btnText: "Add to Card",
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000,
        btnText: "Add to Card",
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000,
        btnText: "Add to Card",
    }
];
// Retrieve listCards from localStorage or initialize as an empty array
let listCards = JSON.parse(localStorage.getItem("listCards")) || [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            ${listCards.find((item)=> item.id === value.id) ? `<button id="button${value.id}" class="addBtn">Already Added!</button>` : `<button id="button${value.id}" class="addBtn" onclick="addToCard(${key})">${value.btnText}</button>`}`;
        list.appendChild(newDiv);
    })
}


function addToCard(key){
    
    // console.log(listCards.find(product => product == products[key]));
    if((!listCards.find(product => product.id == products[key].id))){
        // copy product form list to list card
        const selectedProduct = products[key]
        listCards = [...listCards, {...selectedProduct, quantity: 1}]
        // console.log("list Card 2", listCards);
        for(const key in listCards){
            console.log(listCards[key]);
        }

        localStorage.setItem("listCards", [JSON.stringify(listCards)]);
    } else {
        changeQuantity(key, listCards[key].quantity + 1)
    }
   
    reloadCard();
}

initApp();
reloadCard();

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for(const key in listCards){
        totalPrice = totalPrice + listCards[key].price;
        count = count + listCards[key].quantity;
        if(listCards[key] != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${listCards[key].image}"/></div>
                <div>${listCards[key].name}</div>
                <div>${listCards[key].price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${listCards[key].quantity - 1})">-</button>
                    <div class="count">${listCards[key].quantity}</div>
                    <button onclick="changeQuantity(${key}, ${listCards[key].quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        listCards.splice(key,1);
        // delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    // Update localStorage with the latest listCards
    localStorage.setItem("listCards", JSON.stringify(listCards));
    reloadCard();
}
