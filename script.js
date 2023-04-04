var bars = document.getElementById('bars')
var smallNav= document.getElementById('small-nav')


var x = true
bars.addEventListener('click',()=>{
    
    if(x){
        smallNav.style.transform = ' translateY(10%)'
        x = false
    }
    else{  
        smallNav.style.transform  = ' translateY(-100%)'
        x = true
    }


})