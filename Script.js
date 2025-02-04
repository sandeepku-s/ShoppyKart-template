// let  productsDetails= [
//     [1,'Images/product_1.jpg', 'Shirt', 4.0, 300.0, 280.0],
//     [2,'Images/product_2.jpg', 'Dumbell', 4.0, 400.0, 350.0],
//     [3,'Images/product_3.jpg', 'Blazers', 4.5, 4000.0, 3800.0],
//     [4,'Images/product_4.jpg', 'Woolen clothes', 4.0, 159.0, 140.0],
//     [5,'Images/product_5.jpg', 'Saree', 5.0, 2000.0, 1900.0],
//     [6,'Images/product_6.jpg', 'Heel slippers', 4.0, 1000.0, 900.0],
//     [7,'Images/product_7.jpg', 'Swing chair', 3.5, 5000.0, 4500.0],
//     [8,'Images/product_8.jpg', 'Chair', 4.0, 2500.0, 2400.0],
//     [9,'Images/product_9.jpg', 'Mirror', 2.5, 500.0, 480.0],
//     [10,'Images/product_10.jpg', 'Makeup kit', 3.5, 400.0, 390.0],
//     [11,'Images/product_11.jpg', 'Hand bag', 3.0, 1700.0, 1650.0],
//     [12,'Images/product_12.jpg', 'Deodrant', 4.0, 1000.0, 950.0],
//     [13,'Images/product_13.jpg', 'Boys Pack of 3 Shorts & T-Shirt Set', 3.0, 1500.0, 1450.0],
//     [14,'Images/product_14.jpg', 'Makeup pack', 4.0, 1000.0, 950.0],
//     [15,'Images/product_15.jpg', 'Heel slippers', 4.0, 1000.0, 950.0],
//     [16,'Images/product_16.jpg', 'Animal toys', 2.0, 100.0, 95.0],
//     [17,'Images/product_17.jpg', 'Makeup set', 4.0, 800.0, 750.0],
//     [18,'Images/product_18.jpg', 'Shirt', 4.0, 700.0, 670.0],
//     [19,'Images/product_19.jpg', 'Frock', 4.0, 800.0, 770.0],
//     [20,'Images/product_20.jpg', 'Formal Shirt', 4.5, 1000.0, 950.0],
//     [21,'Images/product_21.jpg', 'Kruti', 4.0, 500.0, 450.0],
//     [22,'Images/product_22.jpg', 'Mens blazers', 4.5, 5000.0, 4500.0],
//     [23,'Images/product_23.jpg', 'Womens blazers', 4.5, 5000.0, 4800.0],
//     [24,'Images/product_24.jpg', 'T-shirt', 4.0, 500.0, 400.0],
//     [25,'Images/product_25.jpg', 'Mens blazers', 5.0, 5000.0, 4900.0],
//     [26,'Images/product_26.png', 'Ladies-finger', 4.0, 60.0, 55.0],
//     [27,'Images/product_27.png', 'Brinjal', 4.5, 40.0, 38.0],
//     [28,'Images/product_28.png', 'Spinach', 4.0, 10.0, 10.0],
//     [29,'Images/product_29.png', 'Prawn', 4.0, 1150.0, 1120.0],
//     [30,'Images/product_30.png', 'Fish', 4.0, 200.0, 190.0],
//     [31,'Images/product_31.png', 'Prawns Small - Deshelled', 4.0, 600.0, 580.0],
// ];
// let string = JSON.stringify(productsDetails);
// localStorage.setItem("products_details", string);


// ======================================================== HEADER ========================================================
function searchBar()
{
    let x = document.getElementById('search_bar');

    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
}

function toggleTheme()
{
    let elements = document.querySelectorAll("*");
    let body = document.body;

    if (body.style.backgroundColor === "rgb(255, 255, 255)" || body.style.backgroundColor === "")
    {
        document.documentElement.style.setProperty("--dark-color", "#212529");
        document.documentElement.style.setProperty("--light-color", "#fff");

        elements.forEach(element => {
            element.style.backgroundColor = "var(--dark-color)";
            element.style.color = "var(--light-color)";
        });
    }
    else
    {
        elements.forEach(element => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
    }
}
// ======================================================== /HEADER ========================================================

// ======================================================== MOVETOP ========================================================
function topFunction()
{
    window.scrollTo({
      top: 0,
      left: 0, 
      behavior: 'smooth'
    });
}
// ======================================================== /MOVETOP ========================================================


// ======================================================== CUSTOM DIV ========================================================
// ======================================================== PRODUCT SECTION ========================================================

function cls()
{
	document.getElementById("overlay").style.display="none";
}

// ******************************************************** VIDEO AND MAP ********************************************************
function playVideo()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("video_window").style.display="block"

    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("map_window").style.display="none";
    document.getElementById("product_info_div").style.display="none";
}

function openMap()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("map_window").style.display="block";

    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("video_window").style.display="none"
    document.getElementById("product_info_div").style.display="none";
}
// ******************************************************** /VIDEO AND MAP ********************************************************

// ******************************************************** ADD PRODUCT TO LOCALSTORAGE AND DISPLAY TO MAIN PAGE ********************************************************
function addMoreProduct()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("product_info_div").style.display="block";

    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("video_window").style.display="none"
    document.getElementById("map_window").style.display="none";
}

function addProduct()
{
    let productImgPath = document.getElementById("prdc_name_path").value;
    let productName = document.getElementById("prdc_name").value;
    let productRating = document.getElementById("prdc_rating").value;
    let productPrice = document.getElementById("prdc_org_price").value;
    let discountPrice = document.getElementById("prdc_dis_price").value;

    if (!productImgPath || !productName || !productRating || !productPrice || !discountPrice)
    {
        alert("Please fill in all fields");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products_details")) || [];

    const productId = products.length > 0 ? products[products.length - 1][0] + 1 : 1;

    const product = [productId, productImgPath, productName, parseFloat(productRating), parseFloat(productPrice), parseFloat(discountPrice)];
    products.push(product);

    localStorage.setItem("products_details", JSON.stringify(products));

    displayProducts();
    clear(productImgPath, productName, productRating, productPrice, discountPrice);
}

function displayProducts()
{
    const productCollection = document.getElementById("product_collection");
    productCollection.innerHTML = "";

    const products = JSON.parse(localStorage.getItem("products_details")) || [];

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product_item");
        productItem.setAttribute("id", `product_${product[0]}`);

        productItem.innerHTML = `
        <a href="#">
            <div class="product_image_div">
                <img src="${product[1]}" alt="${product[2]}" class="product_image">
                <div class="product_image_btns">
                    <div class="view_product_div">
                        <a class="fa fa-eye eye_btn" href="#" onclick="openCart()"></a>
                    </div>
                    <div class="add_to_cart_div">
                        <a class="add_to_cart" href="#">Add to Cart</a>
                    </div>
                </div>
            </div>
        </a>
        <div class="product_name_div">
            <a class="product_name" href="#" onclick="openCart()">${product[2]}</a>
        </div>
        <div class="product_price">
            <span><del>₹ ${product[4]} /-</del></span> &nbsp;
            <span>₹ ${product[5]} /-</span>
        </div>
        `;

        productCollection.appendChild(productItem);
    });
}

window.onload = displayProducts;

// ******************************************************** /ADD PRODUCT TO LOCALSTORAGE AND DISPLAY TO MAIN PAGE ********************************************************


// function openCart()
// {
//     document.getElementById("overlay").style.display="block";
//     document.getElementById("video_window").style.display="none"
//     document.getElementById("product_details_wrapper").style.display="none";
//     document.getElementById("your_cart").style.display="block";
//     document.getElementById("map_window").style.display="none";
// }

// function openProduct()
// {
//     document.getElementById("overlay").style.display="block";
//     document.getElementById("video_window").style.display="none"
//     document.getElementById("product_details_wrapper").style.display="block"
//     document.getElementById("your_cart").style.display="none";
//     document.getElementById("map_window").style.display="none";
// }



// ******************************************************** YOUR CART ********************************************************

// ******************************************************** /YOUR CART ********************************************************


// RATING
document.addEventListener("DOMContentLoaded", function() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("mousedown", function(event)
        {
            let value = parseInt(this.getAttribute("data-value"));

            if (event.button === 0)
            {
                updateStars(value, "full");
            }
            else if (event.button === 2)
            {
                updateStars(value, "half");
            }
        });

        star.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });
    });

    function updateStars(value, type)
    {
        stars.forEach(star => {
            let starValue = parseInt(star.getAttribute("data-value"));

            if (starValue < value)
            {
                star.classList.remove("half");
                star.classList.add("full");
            }
            else if (starValue === value)
            {
                star.classList.remove("full", "half");
                star.classList.add(type);
            }
            else
            {
                star.classList.remove("full", "half");
            }
        });
    }
});
// /RATING

// ======================================================== /PRODUCT SECTION ========================================================
// ======================================================== /CUSTOM DIV ========================================================

