let btn1 = document.getElementsByClassName("button")
btn1[0].addEventListener('click', function(){
    alert('Isso mesmo ❤️, te dou um beijo e uma flor. 💘')
})

btn1[1].addEventListener('mouseover', function(){
    btn1[1].style.position = 'absolute';
    btn1[1].style.bottom = position(10,90);
    btn1[1].style.left = position(10, 90);
    console.log('funcionou')
} )
function position (min , max){
    return (Math.random() * (max - min) + min) + "%";
}
