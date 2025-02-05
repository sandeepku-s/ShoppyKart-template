// let  productsDetails= [
//     [0,'Images/product_1.jpg', 'Shirt', 4.0, 300.0, 280.0],
//     [1,'Images/product_2.jpg', 'Dumbell', 4.0, 400.0, 350.0],
//     [2,'Images/product_3.jpg', 'Blazers', 4.5, 4000.0, 3800.0],
//     [3,'Images/product_4.jpg', 'Woolen clothes', 4.0, 159.0, 140.0],
//     [4,'Images/product_5.jpg', 'Saree', 5.0, 2000.0, 1900.0],
//     [5,'Images/product_6.jpg', 'Heel slippers', 4.0, 1000.0, 900.0],
//     [6,'Images/product_7.jpg', 'Swing chair', 3.5, 5000.0, 4500.0],
//     [7,'Images/product_8.jpg', 'Chair', 4.0, 2500.0, 2400.0],
//     [8,'Images/product_9.jpg', 'Mirror', 2.5, 500.0, 480.0],
//     [9,'Images/product_10.jpg', 'Makeup kit', 3.5, 400.0, 390.0],
//     [10,'Images/product_11.jpg', 'Hand bag', 3.0, 1700.0, 1650.0],
//     [11,'Images/product_12.jpg', 'Deodrant', 4.0, 1000.0, 950.0],
//     [12,'Images/product_13.jpg', 'Boys Pack of 3 Shorts & T-Shirt Set', 3.0, 1500.0, 1450.0],
//     [13,'Images/product_14.jpg', 'Makeup pack', 4.0, 1000.0, 950.0],
//     [14,'Images/product_15.jpg', 'Heel slippers', 4.0, 1000.0, 950.0],
//     [15,'Images/product_16.jpg', 'Animal toys', 2.0, 100.0, 95.0],
//     [16,'Images/product_17.jpg', 'Makeup set', 4.0, 800.0, 750.0],
//     [17,'Images/product_18.jpg', 'Shirt', 4.0, 700.0, 670.0],
//     [18,'Images/product_19.jpg', 'Frock', 4.0, 800.0, 770.0],
//     [19,'Images/product_20.jpg', 'Formal Shirt', 4.5, 1000.0, 950.0],
//     [20,'Images/product_21.jpg', 'Kruti', 4.0, 500.0, 450.0],
//     [21,'Images/product_22.jpg', 'Mens blazers', 4.5, 5000.0, 4500.0],
//     [22,'Images/product_23.jpg', 'Womens blazers', 4.5, 5000.0, 4800.0],
//     [23,'Images/product_24.jpg', 'T-shirt', 4.0, 500.0, 400.0],
//     [24,'Images/product_25.jpg', 'Mens blazers', 5.0, 5000.0, 4900.0],
//     [25,'Images/product_26.png', 'Ladies-finger', 4.0, 60.0, 55.0],
//     [26,'Images/product_27.png', 'Brinjal', 4.5, 40.0, 38.0],
//     [27,'Images/product_28.png', 'Spinach', 4.0, 10.0, 10.0],
//     [28,'Images/product_29.png', 'Prawn', 4.0, 1150.0, 1120.0],
//     [29,'Images/product_30.png', 'Fish', 4.0, 200.0, 190.0],
//     [30,'Images/product_31.png', 'Prawns Small - Deshelled', 4.0, 600.0, 580.0],
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
    history.back();
}

// ******************************************************** VIDEO AND MAP ********************************************************
function playVideo()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("video_window").style.display="block"

    document.getElementById("map_window").style.display="none";
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("product_info_div").style.display="none";
}

function openMap()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("map_window").style.display="block";

    document.getElementById("video_window").style.display="none"
    document.getElementById("product_info_div").style.display="none";
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
}
// ******************************************************** /VIDEO AND MAP ********************************************************

// ******************************************************** ADD PRODUCT TO LOCALSTORAGE AND DISPLAY TO MAIN PAGE ********************************************************
function addMoreProduct()
{
    document.getElementById("overlay").style.display="block";

    document.getElementById("product_info_div").style.display="block";

    document.getElementById("video_window").style.display="none"
    document.getElementById("map_window").style.display="none";
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
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

    const productId = products.length;

    const product = [productId, productImgPath, productName, parseFloat(productRating), parseFloat(productPrice), parseFloat(discountPrice)];
    products.push(product);

    localStorage.setItem("products_details", JSON.stringify(products));

    clearFields();
    displayProducts();
}

function clearFields()
{
    document.getElementById("prdc_name_path").value = "";
    document.getElementById("prdc_name").value = "";
    document.getElementById("prdc_rating").value = "";
    document.getElementById("prdc_org_price").value = "";
    document.getElementById("prdc_dis_price").value = "";
}

function displayProducts()
{
    const productCollection = document.getElementById("product_collection");
    productCollection.innerHTML = "";

    const products = JSON.parse(localStorage.getItem("products_details")) || [];

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product_item");
        productItem.setAttribute("id", product[0]);

        productItem.innerHTML = `
        <div class="product_image_div">
            <img src="${product[1]}" alt="${product[2]}" class="product_image">
            <div class="product_image_btns">
                <div class="view_product_div">
                    <i class="fa fa-eye eye_btn" onclick="productDetailsPanel(${product[0]})"></i>
                </div>
                <div class="add_to_cart_div">
                    <i class="add_to_cart" onclick="addProductToCart(${product[0]})">Add to Cart</i>
                </div>
            </div>
        </div>
        <div class="product_name_div">
            <i class="product_name" onclick="productDetailsPanel(${product[0]})">${product[2]}</i>
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

// ******************************************************** PRODUCT DETAILS PANEL ********************************************************
function productDetailsPanel(product_Id)
{
    document.getElementById("overlay").style.display = "block";
    document.getElementById("product_details_wrapper").style.display = "block";

    document.getElementById("video_window").style.display = "none";
    document.getElementById("map_window").style.display = "none";
    document.getElementById("product_info_div").style.display = "none";
    document.getElementById("your_cart").style.display = "none";

    let productsDetails = JSON.parse(localStorage.getItem("products_details")) || [];
    let product = productsDetails.find(p => p[0] === product_Id);

    if (product) {
        let productImgPath = product[1];
        let productName = product[2];
        let productRating = parseFloat(product[3]);
        let productPrice = product[4];
        let discountPrice = product[5];

        document.querySelector("#product_picture_div img").src = productImgPath;
        document.getElementById("product_name_detls").innerText = productName;
        document.getElementById("product_rating_detls").innerHTML = generateStarRating(productRating);
        document.getElementById("product_price_detls").innerHTML = `<del>₹ ${productPrice}</del>`;
        document.getElementById("product_discounted_price_detls").innerText = `₹ ${discountPrice}`;
    }
}

function generateStarRating(rating)
{
    let starsHTML = "";
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fullStars - halfStar;

    for (let i = 0; i < fullStars; i++)
    {
        starsHTML += `<span class="fa fa-star"></span> `;
    }
    if (halfStar)
    {
        starsHTML += `<span class="fa fa-star-half-alt"></span> `;
    }
    for (let i = 0; i < emptyStars; i++)
    {
        starsHTML += `<span class="fa fa-star-o"></span> `;
    }

    return starsHTML;
}

function magnifier(e, imgSrc)
{
    document.getElementById('mouse_hover_box').style.display = "block";

    var x = e.offsetX;
    var y = e.offsetY;
    var scaleFactor = 2;
    var nx = x * scaleFactor - 180;
    var ny = y * scaleFactor - 225;

    document.getElementById('mouse_hover_box').style.background = `url(${imgSrc}) -${nx}px -${ny}px`;
    document.getElementById('mouse_hover_box').style.backgroundSize = "700px 900px";
}

function showBox()
{
    document.getElementById('mouse_hover_box').style.display = "block";
}

function hideBox()
{
    document.getElementById('mouse_hover_box').style.display = "none";
}
// ******************************************************** /PRODUCT DETAILS PANEL ********************************************************

// ******************************************************** ADD TO CART ********************************************************
let cartSlno = 0;

function addProductToCart(_product_Id)
{
    let productsDetails = JSON.parse(localStorage.getItem("products_details")) || [];
    let product = productsDetails.find(p => p[0] === _product_Id);

    if (product) {
        let productImgPath = product[1];
        let productName = product[2];
        let productRating = parseFloat(product[3]);
        let productPrice = product[4];
        let discountPrice = product[5];

        cartSlno++;
        const cartSection = document.getElementById("your_cart_section");
        let productCartDiv = document.createElement("div");
        productCartDiv.classList.add("cart_product");
        productCartDiv.setAttribute("id", cartSlno);

        productCartDiv.innerHTML = `
        <table width="800px" height="100px">
            <tr>
                <th class="cart_slno">${cartSlno}</th>
                <td class="cart_product_details">
                    <span class="product_name" onmouseover="showProductImage('${productImgPath}')" onmouseout="hideProductImage()">${productName} &nbsp; &nbsp; &nbsp; <span class="cart_star">${generateStarRating(productRating)}</span></span> 
                    <br> 
                    <del>₹ ${productPrice} /-</del>  ₹ ${discountPrice} /-
                </td>
                <th class="total_price" id="total_price_${cartSlno}">₹ ${discountPrice} /-</th>
            </tr>
        </table>
        `;

        cartSection.appendChild(productCartDiv);
        document.getElementById("count").innerHTML = cartSlno;
    }
}

function showProductImage(imgPath)
{
    const productImageDiv = document.getElementById("product_cart_image");
    const imgElement = productImageDiv.querySelector("img");

    imgElement.src = imgPath;
    productImageDiv.style.display = "block";
}

function hideProductImage()
{
    document.getElementById("product_cart_image").style.display = "none";
}

function openCart()
{
    document.getElementById("overlay").style.display = "block";

    document.getElementById("your_cart").style.display = "block";

    document.getElementById("video_window").style.display = "none";
    document.getElementById("map_window").style.display = "none";
    document.getElementById("product_info_div").style.display = "none";
    document.getElementById("product_details_wrapper").style.display = "none";
}

function checkout()
{
    let totalAmount = 0;
    let priceElements = document.querySelectorAll(".total_price");

    priceElements.forEach(priceElement => {
        let priceText = priceElement.textContent.trim();
        let priceValue = parseFloat(priceText.replace('₹', '').replace('/-', '').trim());
        
        if (!isNaN(priceValue))
        {
            totalAmount += priceValue;
        }
    });

    document.getElementById("total_amount").textContent = `TOTAL AMOUNT : ₹ ${totalAmount} /-`;
    swal(`Congrats, Order is placed`,`Total Amount is ₹ ${totalAmount} only`,'success');

    document.getElementById("your_cart_section").innerHTML = "";
    document.getElementById("count").innerHTML = 0;
    cartSlno = 0;
}
// ******************************************************** /ADD TO CART ********************************************************
// ======================================================== /PRODUCT SECTION ========================================================
// ======================================================== /CUSTOM DIV ========================================================

