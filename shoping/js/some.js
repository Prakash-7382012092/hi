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
	//Local Storage Basics
	if(typeof(Storage)!== 'undefined'){
		//const array = ['a','b','c','d'];
		//const object =[{
                       //  name:'Prakash Prakash',
                        // channelName:'Fullyworld web Tutorials',
                      //   address:{
                    //     	houseNo:'252'
                  //       }
                  //        },
                   //      {
                 //        name:'Prakash Prakash2',
                    //     channelName:'Fullyworld web Tutorials',
                  //       address:{
                //         	houseNo:'252'
              //           }
            //         },
		  //            ];
		//localStorage.setItem("localstoragedemotut",JSON.stringify(object));
		//localStorage.setItem("localstoragedemotut",array);
		//localStorage.setItem("localstoragedemotut",45);
		//get data from local Storage..
		//const data = localStorage.getItem("localstoragedemotut");
		//console.log(JSON.parse(data));
		//console.log(array);
		//console.log(data);
		localStorage.removeItem("localstoragedemotut");
	}else{
		console.log('our storage is not  working');
	}
} 