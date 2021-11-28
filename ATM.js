//	ATM solved by mustapha chqoubi
function withDraw(x, y){
	if(x % 5 === 0 && x + 0.50 <= y){
		return y - x - 0.50
	}
	else{
		return y
	}
}

console.log(withDraw(30, 120.00))
