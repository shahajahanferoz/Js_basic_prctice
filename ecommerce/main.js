document.getElementById('cart').addEventListener('click', (e)=> {
    const cartDiv = document.getElementById('cart-item');
    console.log(cartDiv);
    cartDiv.style.display = 'block'
});

document.getElementById('closeBtn').addEventListener('click', function(){
    const cartDiv = document.getElementById('cart-item');
    console.log(cartDiv);
    cartDiv.style.display = 'none'
})

const addCart =(e)=>{
    const text = e.parentNode.childNodes[0].innerText;
    
}