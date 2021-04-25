var actual_value_d = document.getElementById('actual-value');
const number_buttons = document.getElementsByName('data');
const results_button = document.getElementsByName("result_button")[0];
const clean_button = document.getElementsByName('clean')[0]
const operator_buttons = document.getElementsByName('operation');

var actual_oper = '';
var old_oper = '';
var operator = undefined;

//get buttons values 
number_buttons.forEach(function(button){
    button.addEventListener('click',function(){
        add_number_to_display(button.innerText);
    })
});

operator_buttons.forEach(function(button){
    button.addEventListener('click',function(){
        //console.log(button.innerText);
        operation(button.innerText);
    });
});

results_button.addEventListener('click',function(){
    //calculate

});

clean_button.addEventListener('click',function(){
    //clean display
});