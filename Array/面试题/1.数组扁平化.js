var array = [1, [2, [3, [4, 5]]]]

function flat1(arr){
	let result = [];
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])){
			result = result.concat(flat1(arr[i]))
		} else {
			result.push(arr[i])
		}
	}
	return result;
}

function flat2(arr) {
	return arr.toString().split(',').filter(i => i).map(Number)
}

function flat3(arr) {
	return arr.reduce((prev, curr) => {
		 return prev.concat(Array.isArray(curr) ? flat3(curr) : curr)
	}, [])
}

function flat4(arr) {
	while(arr.some(item => Array.isArray(item))) {
		console.log(arr)
		arr = [].concat(...arr)
	}
	return arr
}



// console.log(flat1(array));
// console.log(flat2(array));
// console.log(flat3(array))
console.log(flat4(array))
// console.log(array.flat(Infinity))



