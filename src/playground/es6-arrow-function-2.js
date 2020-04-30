const multiplier ={
numbers:[1,2,3],
multiplyby:2,
multiply(){
    return this.numbers.map((number)=>number *this.multiplyby);
}
};

console.log(multiplier.multiply());