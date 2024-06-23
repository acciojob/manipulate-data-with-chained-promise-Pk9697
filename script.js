//your JS code here. If required.
const outputDiv=document.getElementById('output')

const getArrayOfNumbers=(arr=[])=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(arr),3000)
	})
}

const filterOutOddNumbers=(arr=[])=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(arr.filter(num=>(num&1)==0)),1000)
	})
}

const multiplyNumbersBy2=(arr=[])=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>res(arr.map(num=>num*2)),2000)
	})
}
 
const arr=[1,2,3,4]
 
getArrayOfNumbers(arr)
	.then((arr1)=> {
		return filterOutOddNumbers(arr1)
	})
	.then((filteredArr)=> {
		outputDiv.textContent=filteredArr.join(', ')
		return multiplyNumbersBy2(filteredArr)
	})
	.then((multipliedArr)=> {
		outputDiv.textContent=multipliedArr.join(', ')
	})
	.catch((error)=>{
		console.log(error)
	})


