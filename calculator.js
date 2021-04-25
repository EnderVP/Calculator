var actual_value_d = document.getElementById('actual-value');
const number_buttons = document.getElementsByName('data');
const results_button = document.getElementsByName("result_button")[0];
const clean_button = document.getElementsByName('clean')[0]
const operator_buttons = document.getElementsByName('operation');

var actual_oper = '';
var old_oper = '';
var operator = undefined;

console.log(actual_value_d);

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
    update_display();
});

clean_button.addEventListener('click',function(){
    //clean display
    clean_display();
    update_display();
});

//funtions operations, display
function add_number_to_display(number){
    //console.log(number)
    if(number.toString().includes('.')){
        if(check_dot()) return;
    }
    if(actual_oper === '0' && number==='0') return;
    actual_oper = actual_oper.toString() + number.toString();
    update_display();
}
function clean_display(){
    old_oper = '';
    operator = undefined;
    actual_oper = '';   
    
};
function check_dot(){
    if(actual_oper.toString().includes('.')) return true;
};
function update_display(){
    actual_value_d.textContent = actual_oper; 

};
function operation(new_operator){
    operator = new_operator.toString();
    if(actual_oper === '') {

        return;
    }
    if(old_oper !==''){
        calculate();
    }    
    old_oper = actual_oper;    
    actual_oper = '';
};
clean_display();