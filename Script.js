// ======================================================== HEADER ========================================================
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

// ======================================================== PRODUCT SECTION ========================================================
// ******************************************************** ADD THE PRODUCT ********************************************************
function addProduct()
{
    let prnt_div = document.getElementById("product_collection");
    let chlEl_div = document.createElement("div");
    chlEl_div.setAttribute("class","product_item");

    chlEl_div.innerHTML=`
    <a href="#">
        <div class="product_image_div">
            <img src="====================" alt="" class="product_image">
            <div class="product_image_btns">
                <div class="view_product_div"> <a class="fa fa-eye eye_btn" href="cart.html"></a> </div>
                <div class="add_to_cart_div"> <a class="add_to_cart" href="cart.html">Add to Cart</a> </div>
            </div>
        </div>
    </a>
    <div class="product_name_div"> <a class="product_name" href="cart.html">====================</a> </div>
    <div class="product_price">
        <span> <del>====================</del> </span> &nbsp;<span>====================</span>
    </div>
    `;

    prnt_div.insertBefore(chlEl_div,prnt_div.children[0]);
}
// ******************************************************** /ADD THE PRODUCT ********************************************************
// ======================================================== PRODUCT SECTION ========================================================



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