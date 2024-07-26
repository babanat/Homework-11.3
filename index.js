document.addEventListener('DOMContentLoaded', function() {
const imageCount = 9;
const imageFolderPass = 'img/'
const random = Math.floor(Math.random() * imageCount)+ 1; 
const imgSrc = `${imageFolderPass}${random}img.png`; 
 const image = document.getElementById('image');
 image.setAttribute('src',imgSrc);
});