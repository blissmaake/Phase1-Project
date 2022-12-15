let shop = document.getElementById ('shop');

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse (localStorage.getItem ("saveData")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            // If Id exists put the value otherwise
            let search = basket.find((x) => x.id === id) || [];
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
                        <div id = ${id} class="quantity">
                        ${search.item === undefined? 0 : search.item}
                        </div>
                        <i onclick = "increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
            `;
        })
        .join(""));
};

generateShop ();



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

    // console.log (basket);
update(selectedItem.id);
localStorage.setItem("saveData", JSON.stringify(basket));
};


let decrement = (id) => {
    let selectedItem = id;
    // Searching if the selected item exists
    let search = basket.find((x) => x.id === selectedItem.id);

    // If it doesn't exists it's pushed outsideside the basket 

    if (search === undefined) return;
    else if (search.item === 0) return;

// If we find the item it decreases the quantity
    else  {
        search.item -= 1;
    }

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
// console.log (basket)
localStorage.setItem("saveData", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id ===id);
    //Targets the Id
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();

};

let calculation = () => {
    // Selecting Icon then storing Cartamount inside it 
    let cartIcon = document.getElementById ("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce ((x,y) => x+y,0 );
};

calculation();