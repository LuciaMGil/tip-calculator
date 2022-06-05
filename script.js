var tipPercent = $("#tipPercent");
var total = $("#total");
var submitBtn = $("#submit");
var splitTotal = $("#splitTotal");

// When button
submitBtn.on('click', function(){
    // Changes button color on click
    $(this).addClass("buttonColor");
    // Gather the value for the total bill 
    var billVal = total.val();
    // Gather the value for the tip percentage
    var tipPercentVal =  tipPercent.val();
    // Gather the value for the number of people, if no input, set  value to 1
    var splitNum = splitTotal.val() || 1;

    // Calculates and stores the value of the tip amount
    var tipAmountVal = billVal*(tipPercentVal/100);

    // Calculates and stores the total bill amount using parseFloat to add the values together
    var totalBillVal = (parseFloat(billVal) + parseFloat(tipAmountVal))/splitNum;

     // Displays tip amount on the screen as a number with two decimals
    var tipamount = $("#tip-amount").text("$" + (tipAmountVal.toFixed(2)));

    // Displays total bill amount on the screen as a number with two decimals
    var totalBill = $("#totalAmount").text("$" +totalBillVal.toFixed(2));
    
})
