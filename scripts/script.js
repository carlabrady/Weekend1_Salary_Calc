console.log('js test');

var staff = [];

$(document).ready(onReady);

function onReady() {
    console.log('JQ test');
    $('#addInfoButton').on('click', infoSubmit);
}

function infoSubmit() {
    console.log('submit button has been clicked');
    new Employee ($('#firstIn').val(), $('#lastIn').val(), $('#empNumIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val())
    
}

function Employee(firstIn, lastIn, empNumIn, jobTitleIn, salaryIn) {
    this.first = firstIn;
    this.last = lastIn;
    this.empID = empNumIn;
    this.title = jobTitleIn;
    this.salary = salaryIn;
    staff.push(this);
}