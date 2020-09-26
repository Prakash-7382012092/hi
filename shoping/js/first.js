window.onload = function(){
	const iconShopping = document.querySelector('.iconShopping');
	const CartCloseBtn = document.querySelector('.fa-close');
	const cartBox =document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
         cartBox.classList.add('active');
	});
	CartCloseBtn.addEventListener("click",function(){
         cartBox.classList.remove('active');
	});
	//adding data to Local Storage
    const addToCartBtn =document.getElementsByClassName('addToCart');
    
     let items=[];
    for(let i=0; i<addToCartBtn.length;i++){
    	addToCartBtn[i].addEventListener("click",function(e){
    console.log(e.target.parentElement.children[1].children[0].textContent);
	if(typeof(Storage)!== 'undefined'){
		let item = {
             id:i+1,
             name:e.target.parentElement.children[0].textContent,
             price:e.target.parentElement.children[1].children[0].textContent, 
             no:1
		};
		if(JSON.parse(localStorage.getItem('items'))===null){
			items.push(item);
		localStorage.setItem("items",JSON.stringify(items));
		window.location.reload();
	}else{
		const localItems = JSON.parse(localStorage.getItem("items"));
      localItems.map(data=>{
	if(item.id == data.id){
	     item.no = data.no + 1;	    
	}else{
		items.push(data);
	}
});
      items.push(item);
      localStorage.setItem('items',JSON.stringify(items));
      window.location.reload();
	}
}else{
		alert('our storage is not  working');
		}
    });
}	
// adding data to shopping cart
const iconShoppingP = document.querySelector('.iconShopping p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data=>{
	no = no + data.no;
});
iconShoppingP.innerHTML = no;
//adding cart box data in table
const cartBoxTable = cartBox.querySelector('table');
let tableData = '';
tableData += '<tr><th>S.no </th><th>itemName</th><th>Item No</th><th>Price</th><th></th></tr>';
if(JSON.parse(localStorage.getItem('items')) === null){
	tableData += '<tr><td colspan="5">No items found</td></tr>';
}else{
	JSON.parse(localStorage.getItem('items')).map(data=>{
          tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
	});//onlick is not a function  it is a even handler
}
cartBoxTable.innerHTML = tableData;//i think you have dome some erros in this code again watch it and check that again
	
}