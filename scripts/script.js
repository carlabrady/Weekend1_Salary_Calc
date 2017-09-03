console.log('js test');

var staff = [];

function onReady() {
    console.log('JQ test');
    $('#addInfoButton').on('click', infoSubmit);
    $('#delete').on('click', deleteFunc)
}

function infoSubmit() {
    console.log('submit button has been clicked');
    //create employee object
    var employee = new Employee ($('#firstIn').val(), $('#lastIn').val(), $('#empNumIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());
    //add employee to staff array
    staff.push(employee);
    //reset input info
    $('#firstIn').val('');
    $('#lastIn').val('');
    $('#empNumIn').val('');
    $('#jobTitleIn').val('');
    $('#salaryIn').val('');
    //reconfigure total monthly cost
    computeSalary()
    //adds name to delete list
    deleteSelectList();
}
// totaling salary
function computeSalary() {
    var monthlyCost = 0;
    for (var i = 0; i < staff.length; i++) {
        monthlyCost += staff[i].salary/12;
    }
    console.log(monthlyCost);
    $('#monthCostCalc').html(monthlyCost.toFixed(2));
}
//object constructor
function Employee(firstIn, lastIn, empNumIn, jobTitleIn, salaryIn) {
    this.first = firstIn;
    this.last = lastIn;
    this.empID = empNumIn;
    this.title = jobTitleIn;
    this.salary = salaryIn;
}
//adding employees to drop down select
function deleteSelectList () {
    var option = '';
    for (var i=0;i<staff.length;i++){
       option += '<option value="'+ i + '">' + staff[i].first + '</option>';
    }
    $('#removeEmployee').html(option);
}
//removing names from select and updating monthly cost
function deleteFunc () {
    var itemDelete = staff[$('#removeEmployee').val()];
    staff.splice($.inArray(itemDelete, staff), 1);
    deleteSelectList();
    computeSalary();
}

$(document).ready(onReady);
