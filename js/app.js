// var demo = document.getElementById('hhhu');
 var light = document.getElementById('lightbox');
 var butbox = document.getElementById('butbox');
var clos = document.getElementById('close')
var butheed = document.getElementById('butheed');
var butspices = document.getElementById('butspices');
var butseeds = document.getElementById('butseeds');
var span =document.getElementById("up");
var back = document.getElementById('back')
var home = document.getElementById('home')
var About = document.getElementById('About')
var Products = document.getElementById('Products')
var Contact = document.getElementById('Contact')
var logo = document.getElementById('logo')


var changTex = function changTex(){
   light.classList.add('d-none')
}

span.onclick = function (){
   window.scrollTo({
      top: 0,
      behavior: "smooth"

   })
}
logo.addEventListener('click',function(){
  
   changTex()
})
home.addEventListener('click',function(){
  
   changTex()
})
About.addEventListener('click',function(){
  
   changTex()
})
Products.addEventListener('click',function(){
  
   changTex()
})
Contact.addEventListener('click',function(){
  
   changTex()
})
window.onscroll = function(){

   this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
}


 butbox.addEventListener('click',function(){
    light.classList.remove('d-none')
 })

 clos.addEventListener('click',function(){
    console.log('sadddas')
    light.classList.add('d-none')
 })

 back.addEventListener('click',function(){
   console.log('sadddas')
   light.classList.add('d-none')
})

 butheed.addEventListener('click',function(){
   light.classList.remove('d-none')
})
butspices.addEventListener('click',function(){
   light.classList.remove('d-none')
})
butseeds.addEventListener('click',function(){
   light.classList.remove('d-none')
})



window.addEventListener('load', function() {
   const loadingScreen = document.querySelector('.loading-screen');
   loadingScreen.style.display = 'none';
 });

