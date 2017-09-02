console.log('js test');

var staff = [];
var money = 0;

$(document).ready(onReady);

function onReady() {
    console.log('JQ test');
    $('#addInfoButton').on('click', infoSubmit);
}

function infoSubmit() {
    console.log('submit button has been clicked');
    //create employee object
    new Employee ($('#firstIn').val(), $('#lastIn').val(), $('#empNumIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());

    //add salary to span
    var $singleSalary = parseFloat($('#salaryIn').val());
    var $originalAmount = parseFloat($('#monthCostCalc').html());
    var newCost = $singleSalary/12 + $originalAmount;
    console.log(newCost);
    $('#monthCostCalc').html(newCost.toFixed(2));
   
    //reset info
    $( '#firstIn' ).val( '' );
    $( '#lastIn' ).val( '' );
    $( '#empNumIn' ).val( '' );
    $( '#jobTitleIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
}
//object constructor
function Employee(firstIn, lastIn, empNumIn, jobTitleIn, salaryIn) {
    this.first = firstIn;
    this.last = lastIn;
    this.empID = empNumIn;
    this.title = jobTitleIn;
    this.salary = salaryIn;
    staff.push(this);
}
