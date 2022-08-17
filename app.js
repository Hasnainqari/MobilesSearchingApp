//  var drop = document.getElementById("drop");

var mobiles = {
    Samsung: {
        samsunggalaxys21ultra: {
            image: "https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS21Ultra-b.jpg",
            model: "Samsung Galaxy S21 Ultra",
            price: 242999,
            color: ["Black", "White"],
            isPta: "Pta Approved",
        },
    },
    Oppo: {
        opporeno6pro: {
            image: "https://www.whatmobile.com.pk/admin/images/Oppo/OppoReno6Pro-b.jpg",
            model: "Oppo Reno 6 Pro",
            price: 109999,
            color: "black",
            isPta: "Pta Approved",
        },
    },
    Vivo: {
        vivox80: {
            image: "https://www.whatmobile.com.pk/admin/images/Vivo/VivoX80-b.jpg",
            model: "Vivo X 80",
            price: 169999,
            color: "Offwhite",
            isPta: "Pta Approved",
        },
    },
    Infinix: {
        infinixzeroxpro: {
            image: "https://www.whatmobile.com.pk/admin/images/Infinix/InfinixZeroXPro-b.jpg",
            model: "Infinix Zero X Pro",
            price: 49000,
            color: "Black",
            isPta: "Pta Approved",
        },
    },
    Redmi: {
        redmi: {
            image: "https://www.whatmobile.com.pk/admin/images/Xiaomi/XiaomiRedmiNote10-b.jpg",
            model: "Redmi",
            price: 35000,
            color: "Black",
            isPta: "Pta Approved",
        },
    },
    Iphone: {
        Apple: {
            image: "https://www.whatmobile.com.pk/admin/images/Apple/iPhone%2013%20Pro%20Max/Apple-iPhone-13-Pro-Max-Image-2.jpg",
            model: "Iphone 13 Pro Max",
            price: 349000,
            color: "Skyblue",
            isPta: "Not Approved",
        },
    },
};

//  var colors = mobiles["samsung"]["s8"].color;
//  for(i=0; i<colors.length; i++){

//    console.log(i + ":" + colors[i]);
//  }

var dropmenu = document.getElementById("dropmenu");
for (key in mobiles) {
    var options = document.createElement("option");
    options.innerHTML = key;

    dropmenu.appendChild(options);
}

var inputVal = document.getElementById("inputVal");
var products = document.getElementById("products");

function mobileSearch() {
    var ipvalue = inputVal.value;
    ipvalue = ipvalue.replaceAll(" ", "").toLowerCase();
    console.log(ipvalue)
    var dropvalue = dropmenu.value;

    if (ipvalue in mobiles[dropvalue]) {
        products.innerHTML = `
          <div class="singleProduct">
          <img src="${mobiles[dropvalue][ipvalue].image}" alt="img">
          <div class="productContent">
          <p class="title">${mobiles[dropvalue][ipvalue].model}</p>
          <p>Rs.${mobiles[dropvalue][ipvalue].price}</p>
          <p>Status: ${mobiles[dropvalue][ipvalue].isPta}</p>
          <p>Colors: ${mobiles[dropvalue][ipvalue].color}</p>
          </div>
          </div>`
    }
    else if (ipvalue == "") {
        products.innerHTML = "Please Select a Mobile or Brand!"
    }
    else if (ipvalue != mobiles[key]) {
        inputVal.innerHTML = "Currently Not Available";
    }
}

function allProducts() {
    var allProducts = document.getElementById("allProducts");
    for (key in mobiles) {
        for (key2 in mobiles[key])
            // console.log(mobiles[key][key2])
            allProducts.innerHTML += `
             <div class="productCards">
             <img src="${mobiles[key][key2].image}" alt="img">
             <div class="content">
             <p class="title">${mobiles[key][key2].model}</p>
             <p> Rs.${mobiles[key][key2].price}</p>
             <p> Status: ${mobiles[key][key2].isPta}</p>
             <p>Colors: ${mobiles[key][key2].color}</p>
             </div>
             </div>
             `
    }
}
allProducts();