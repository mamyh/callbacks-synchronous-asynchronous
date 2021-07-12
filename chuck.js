
//example of Synchronous JS
const processorder = function (customer) {
    console.log('Processing order for customer');

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log("order Processed for custormer 1")

}
console.log('take order for customer 1');
processorder();
console.log('completed order for customer 1');
//example of Asynchronous Js
const processorder1 = function (customer) {
    console.log('Processing order for customer 2');

    setTimeout(() => {
        console.log('cooking completed')
    }, 3000);

    console.log("order Processed for custormer 2")

}
console.log('take order for customer 2');
processorder1();
console.log('completed order for customer 2');
//callback example for understanding asynchronous
const takeorder = (customer, callback) => {
    console.log('take order for' + customer);
    callback(customer);
}
const processorder2 = (customer, callback) => {
    console.log('Processing order for ' + customer);

    setTimeout(() => {
        console.log('cooking completed')
        console.log("order Processed for " + customer);
        callback(customer);
    }, 3000);
}
const completeOrder = (customer) => {
    console.log('completed order for ' + customer);
}
takeorder("customer 1", function (customer) {
    processorder2(customer, function (customer) {
        completeOrder(customer);
    })
})