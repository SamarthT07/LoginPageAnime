const signinbtn = document.querySelector('.signinbtn');
const signupbtn = document.querySelector('.signupbtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
const svg = document.querySelector('svg');

signupbtn.onclick = function(){
    formBx.classList.add('active');
    body.classList.add('active');
    svg.classList.add('active');
    // svg.

}

signinbtn.onclick = function(){
    formBx.classList.remove('active');
    body.classList.remove('active');
    svg.classList.remove('active')
}
 
 
 const user = document.getElementById("user");
 user.onclick = function(){
     user.style.border = 1 + 'px';
    
     user.style.borderColor = "black";
     user.style.borderStyle = "solid";
   
      
 }

