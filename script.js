//worse apporach to select similar elements
/*
const image = document.getElementById('image');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
*/
const popupcontianer = document.querySelector('.popupcontianer');
const closebtn = document.querySelector('.closebtn');

//select popup image tag
const popuimg = document.querySelector('.popupimg img');

//make array with elements which you have selected
/*
const images = [image, image1, image2];
*/
//best approach

const images_array =  document.querySelectorAll('.image')


//worse approach

/*
image.addEventListener("click", function(){
    console.log("clicked on images");
})
image1.addEventListener("click", function(){
    console.log("clicked on images");
})
image2.addEventListener("click", function(){
    console.log("clicked on images");
})
*/

//good approach
/*
images.forEach(function(e){
    e.addEventListener('click', function(element){
        alert(element.target);
    })
})
*/

images_array.forEach(function(e){
    e.addEventListener('click', function(element){
        // console.log(element.target);
        popupcontianer.style.display = 'block';
        clicked_img = element.target;
        //change popup image src with clicked image src
        popuimg.src = clicked_img.src;
    })
})

//popup close button

closebtn.addEventListener("click", function(){
    popupcontianer.style.display = 'none';
})
