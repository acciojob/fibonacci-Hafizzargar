function fibonacci(c) {
// your code here
	let c=1;
let f1=0;
let f2=1;
let sum=0;
if(c==1){
	return f1;
}
if(c==2){
	return f2;
}
let c1=3;
while(c1<=5){
	sum=f1+f2;
	f1=f2;
	
	f2=sum;
	c1++;
	console.log(sum);
}

}

module.exports = fibonacci;
