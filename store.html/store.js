
let carts = document.querySelectorAll('.add-cart');
 
let prouducts = [
    {
    name:'dark',
    price: 15
    },

    {
        name:'milk',
        price: 10
      
    },



];

 for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers();
    })
}

function onLoadCartNumbers () {
    let prouductNumbers = localStorge.getItem('cartNumbers')

     if (prouductNumbers ) {
        document.querySelector('.cart span').textContent = prouductNumbers ;
     }
}

function cartNumbers() {
    let productNumbers =  localStorage.setItem('cartNumbers',);

    productNumbers = parseInt(productNumbers);
  
 if(productNumbers){
     localStorage.setItem('cartNumbers', productNumbers +1);
     document.querySelector('.cart span').textContent = productNumbers + 1 ;
 } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1 ;
 }

 }

 onLoadCartNumbers();
 
   

