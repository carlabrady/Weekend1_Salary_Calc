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
    //add employee to staff array
    staff.push(employee());
    appendDom ()    
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

function appendDom () {
    $('#employeeList').empty();
    for (var i = 0; i < staff.length; i++) {
        var individual = staff[i];
        var $row = $('<tr></tr>');
        $row.append('<td>' + individual.first + '</td>');
        $row.append('<td>' + individual.last + '</td>');
        $row.append('<td>' + individual.empID + '</td>');
        $row.append('<td>' + individual.title + '</td>');
        $row.append('<td>' + '$' + individual.salary + '</td>');
        $('#employeeList').append($row);
    }
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
function employee() {
    var person = {}
    person.first = $('#firstIn').val();
    person.last = $('#lastIn').val();
    person.empID = $('#empNumIn').val();
    person.title = $('#jobTitleIn').val();
    person.salary = $('#salaryIn').val();
    return person;
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
