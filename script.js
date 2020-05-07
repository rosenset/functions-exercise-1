function getAreaOfCircle(radius){
    const area = radius*radius* Math.PI;
    return area;
}
console.log(getAreaOfCircle(12));

function getCircumferenceOfCircle(radius){
    const circumference =  2* Math.PI * radius;
    return circumference;
}
console.log(getCircumferenceOfCircle(10));

function getAreaOfSquare(side){
    const area = side * side;
    return area;
}
console.log(getAreaOfSquare(55));

function getAreaOfTriangle(base, height){
    const area = .5 * (base + height);
    return area;
}
console.log(getAreaOfTriangle(325, 500));