let shop = document.getElementById ('shop');

let shopItemsData = [{
    id : "Jersey1",
    name : "Argentina",
    price : 4500,
    desc : "Argentina Home Player Version jersey 2022/2023",
    img : "Images/argentina-home-player-version-jersey-2022.png"
},
{
    id : "Jersey2",
    name : "Argentina",
    price : 4500,
    desc : "Argentina Away Player Version jersey 2022/2023",
    img : "Images/argentina-away-soccer-jersey-22-23-1.png"
},
{
    id : "Jersey3",
    name : "Belgium",
    price : 4500,
    desc : "Belgium Home Player Version jersey 2022/2023",
    img : "Images/authentic-adidas-belgium-home-jersey-2022_a1066400-1.png"
},
{
    id : "Jersey4",
    name : "Brazil",
    price : 4500,
    desc : "Brazil Home Player Version jersey 2022/2023",
    img : "Images/brazil-home-jersey-2022-1_1.png"
},
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id,name,price,desc,img } = x;
            return `
            <div id = product-id-${id} class="item">
            <img width = "220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>KSh ${price}</h2>
                    <div class="button">
                        <i onclick ="decrement(${id})" class="bi bi-dash"></i>
                        <div id = ${id} class="quantity">0</div>
                        <i onclick = "increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
            `;
    }).join (""));
};

generateShop ();

// Incrementing function
let increment = (id) => {
    let selectedItem = id;
    
// Searching if the selected item exists
    let search = basket.find ((x) => x.id === selectedItem.id);

// If it doesn't exists it's pushed inside the basket 
    if (search === undefined) {
        basket.push({
            id : selectedItem.id,
            item : 1,
        });
    }

// If we find the item it increases the quantity
    else  {
        search.item += 1;
    }
};

// Decrementing Function
let decrement = (id) => {
    let selectedItem = id;
    // Searching if the selected item exists
    let search = basket.find ((x) => x.id === selectedItem.id);

// If it doesn't exists it's pushed outsideside the basket 
    if (search.item === 0) return;

// If we find the item it decreases the quantity
    else  {
        search.item -= 1;
    }
};
let update = () => {};