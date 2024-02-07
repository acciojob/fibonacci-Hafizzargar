
function fibonacci(c) {
	
            // let c1 = 0;
            // let f1 = 0;
            // let f2 = 1;
            // var sum=0;
            // if (c == 1) {
            //     console.log(f1);
            //     return;
            // } else if (c == 2) {
            //     console.log(f2);
            //     return;
            // }
            // c1 = 3;
            // while (c1 <= c) {
            //     sum=f1+f2;
            //     f1=f2;
            //     f2=sum;
            //     c1++

            // }
            // console.log(sum);
	if (c <= 1) {
        return 0;
    } else if (c === 2) {
        return 1;
    } else {
        return fibonacci(c - 1) + fibonacci(c- 2);
    }
	

}
	

module.exports = fibonacci;



