const para = document.getElementById('firstP')
const show = document.getElementById('show-me')
const hide = document.getElementById('hide-me')

hide.addEventListener('click',function(){
        para.style.display = 'none'
        console.log("hidden");
})
show.addEventListener('click',function(){
        para.style.display = 'block'
        console.log("shown");
})
