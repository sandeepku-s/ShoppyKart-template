// ########################################################  INDEX.HTML ########################################################
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

// ******************************************************** PAGE SETTING ********************************************************
function playVideo()
{
    document.getElementById("overlay").style.display="block";
    document.getElementById("video_window").style.display="block"
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("map_window").style.display="none";
}

function openMap()
{
    document.getElementById("overlay").style.display="block";
    document.getElementById("video_window").style.display="none"
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="none";
    document.getElementById("map_window").style.display="block";
}

function openCart()
{
    document.getElementById("overlay").style.display="block";
    document.getElementById("video_window").style.display="none"
    document.getElementById("product_details_wrapper").style.display="none";
    document.getElementById("your_cart").style.display="block";
    document.getElementById("map_window").style.display="none";
}

function openProduct()
{
    document.getElementById("overlay").style.display="block";
    document.getElementById("video_window").style.display="none"
    document.getElementById("product_details_wrapper").style.display="block"
    document.getElementById("your_cart").style.display="none";
    document.getElementById("map_window").style.display="none";
}

function cls()
{
	document.getElementById("overlay").style.display="none";
}
// ******************************************************** /PAGE SETTING ********************************************************


// ******************************************************** YOUR CART ********************************************************

// ******************************************************** /YOUR CART ********************************************************


// ******************************************************** ADD THE PRODUCT ********************************************************

var productImgPath = '';

document.addEventListener("DOMContentLoaded", function()
{
    let fileInput = document.getElementById("product_picture");
    let pictureDiv = document.getElementById("product_picture_div");
    let pathDisplayDiv = document.createElement('div');
    pathDisplayDiv.style = `display: none;`; 
    pathDisplayDiv.setAttribute("id","product_img_path")

    pictureDiv.addEventListener("click", function() {
        fileInput.click();
    });

    fileInput.addEventListener("change", function(event) {
        let file = event.target.files[0];

        if (file)
        {
            productImgPath = URL.createObjectURL(file);

            pictureDiv.innerHTML = `<img id="product_img" src="${productImgPath}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--border-radius);">`;

            pathDisplayDiv.innerHTML = `<p>${productImgPath}</p>`;
            pictureDiv.parentElement.appendChild(pathDisplayDiv);
        }
    });
});

function addProduct()
{
    let prnt_div = document.getElementById("product_collection");
    let chlEl_div = document.createElement("div");
    chlEl_div.setAttribute("class","product_item");

    chlEl_div.innerHTML=`
    <a href="#">
        <div class="product_image_div">
            <img src="${productImgPath}" alt="" class="product_image">
            <div class="product_image_btns">
                <div class="view_product_div"> <a class="fa fa-eye eye_btn" href="cart.html"></a> </div>
                <div class="add_to_cart_div"> <a class="add_to_cart" href="cart.html">Add to Cart</a> </div>
            </div>
        </div>
    </a>
    <div class="product_name_div"> <a class="product_name" href="cart.html">${ProductName}</a> </div>
    <div class="product_price">
        <span> <del>====================</del> </span> &nbsp;<span>====================</span>
    </div>
    `;

    prnt_div.appendChild(chlEl_div);
}

// RATING
document.addEventListener("DOMContentLoaded", function() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("mousedown", function(event) {
            let value = parseInt(this.getAttribute("data-value"));

            if (event.button === 0) { // Left Click = Full Star
                updateStars(value, "full");
            } else if (event.button === 2) { // Right Click = Half Star
                updateStars(value, "half");
            }
        });

        star.addEventListener("contextmenu", function(event) {
            event.preventDefault(); // Prevents right-click menu
        });
    });

    function updateStars(value, type) {
        stars.forEach(star => {
            let starValue = parseInt(star.getAttribute("data-value"));

            if (starValue < value) {
                star.classList.remove("half");
                star.classList.add("full"); // Full stars for all previous ones
            } else if (starValue === value) {
                star.classList.remove("full", "half");
                star.classList.add(type); // Half star only for the clicked one
            } else {
                star.classList.remove("full", "half"); // Reset the rest
            }
        });
    }
});

// /RATING


// ******************************************************** /ADD THE PRODUCT ********************************************************
// ======================================================== /PRODUCT SECTION ========================================================
// ======================================================== /CUSTOM DIV ========================================================
// ########################################################  /INDEX.HTML ########################################################
