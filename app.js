const navBar = document.querySelector(".navbar ul");
const menuBtn = document.querySelector(".menu-icon"); 
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click",function(){
 navBar.style.display="block";
 menuBtn.style.display="none";
 closeBtn.style.display="block";
});

closeBtn.addEventListener("click",function(){
  navBar.style.display="none";
 menuBtn.style.display="block";
 closeBtn.style.display="none";
});

// // ------- for single products-------

// const ProductImg = document.getElementById("product-img");
//   const smallImag = document.getElementsByClassName("small-img");

//   smallImag[0].onclick = function(){
//    ProductImg.src = smallImag[0].src;
//   };
//   smallImag[1].onclick = function () {
//     ProductImg.src = smallImag[1].src;
//    };
//    smallImag[2].onclick = function () {
//      ProductImg.src = smallImag[2].src;
//     };
//     smallImag[3].onclick = function () {
//       ProductImg.src = smallImag[3].src;
//      };

// ------------or------------

const smallImag = document.querySelectorAll(".small-img");
smallImag.forEach(function(small){
 small.addEventListener("click",function(e){
   document.getElementById("product-img").src = small.src;
 }); 
});

// ---------js for toggle--------



const loginform = document.getElementById("loginform");
const regform = document.getElementById("regform");
const indicator = document.getElementById("indicator");
const login = document.getElementById("login");
const reg = document.getElementById("reg");

reg.addEventListener("click",function(){
  regform.style.transform = "translateX(0px)";
  loginform.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
});

login.addEventListener("click",function(){
  loginform.style.transform = "translateX(300px)";
  regform.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
});




