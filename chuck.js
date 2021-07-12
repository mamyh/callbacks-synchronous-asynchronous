
//example of Synchronous JS
const processorder = function (customer) {
    console.log('Processing order for customer');

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log("order Processed for custormer 1")

}
console.log('take order for customer 1');
processorder();
console.log('completed order for customer 1')