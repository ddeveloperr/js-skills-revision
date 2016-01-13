var beanCounter = 10;
function getNumberOfItems(ordertype) {
var beanCounter = 0;
if (ordertype == "order") {
// do some stuff with beanCounter...
}
return beanCounter;
}

console.log(beanCounter);
getNumberOfItems("order");