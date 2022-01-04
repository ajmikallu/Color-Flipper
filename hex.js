const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn = document.querySelector('.btn')
let color = document.querySelector('.colors')






	let getColor = function(){
	let hexColor= '#';
	for(let i =0; i<6;i++){
		hexColor+=hex[getRandomNo()]
	}
	
	console.log(hexColor)
	document.body.style.backgroundColor = hexColor
	
	if (color) {
    color.textContent = hexColor
}
}
btn.addEventListener('click',getColor)
document.body.style.backgroundColor = getColor()
function getRandomNo(){
	return Math.floor(Math.random()*hex.length)
}

// function changeColor() {
  
//   document.body.style.backgroundColor = color[randomColor];
// }