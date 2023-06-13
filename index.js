function pow(number, degree) {

    if (typeof number !== 'number') {
        console.error('Invalid number')
        return null
    }
    if (typeof degree !== 'number' || !Number.isInteger(degree)) { 
        console.error('Invalid degree')
        return null
    }

    if (degree === 0) {
        return 1;
    }

    if(degree < 0){
        return 1/number * pow(number, degree + 1);
    }

    return number * pow(number, degree - 1);

}

console.log(pow(3, 2));
console.log(pow(3, -3)); // 3**(-3) = 1/ 3**3 = 0.037037037037037035