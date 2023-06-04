import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref ,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
databaseURL :"https://login-with-firebase-data-b4355-default-rtdb.asia-southeast1.firebasedatabase.app/"

}
const app = initializeApp(appSettings)
const database = getDatabase(app);
const shoppingListInDB = ref(database , "userData") //(location , what the ref called(name) )


const passwordEl = document.getElementById("password")
const loginbtn = document.getElementById("login")
const emailEl = document.getElementById("email")


//putting data to the database when we clicking add to cart
loginbtn.addEventListener("click",function () {
    let passwordValue = passwordEl.value
    let emailValue = emailEl.value
    if(emailValue.length <= 8 && passwordValue.length <= 7){
        alert("Please Enter Valid data")
    }
    else{
        
   
        push(shoppingListInDB,emailValue ) //ref first argu and value 2nd argu
        push(shoppingListInDB,passwordValue ) //ref first argu and value 2nd argu
        
        clearInputFieldEl();
        
        // appendItemto(inputValue) ;  from commenting this line we prevent double fetching and adding element bug in while add to parentEl
    
        console.log(` ${passwordValue} added to database`);
 }
})

//function for clearing input 
function clearInputFieldEl(){
       passwordEl.value="";
}


