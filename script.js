const colors = ["green","red","cyan",'blue','yellow']
const btn = document.querySelector('.btn')
const color = document.querySelector('.colors')


	let getColor = function(){
	// console.log(document.body)
	// const random =Math.floor(Math.random()*100)
	//get random number between 0-2
	const randon = getRandomNo()
	console.log(randon)
	document.body.style.backgroundColor = colors[randon];
	color.textContent=colors[randon].toUpperCase()
}
document.body.style.backgroundColor = getColor()
btn.addEventListener('click',getColor)
function getRandomNo(){
	return  Math.floor(Math.random()*colors.length)
}