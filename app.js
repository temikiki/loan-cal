//listen for submit button
document.getElementById('loan-form').addEventListener('submit', function(e){
//hide results
document.getElementById('results').style.display = 'none';

  //show loader
  document.getElementById('loading').style.display = "block";

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

//calculate Results

function calculateResults(e){
//UI vars
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/ 100 /12;
const calculatePayments = parseFloat(years.value)* 12;

//compute monthly payment
const x =Math.pow(1 + calculatedInterest, calculatePayments);

const monthly = (principal*x* calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly* calculatePayments).toFixed(2);
  totalInterest.value = ((monthly* calculatePayments)- principal).toFixed(2);
  //display result
  document.getElementById('results').style.display = 'block';
  //hide loader
  document.getElementById('loading').style.display = 'none';
  //setTimeout(clearResult, 5000);
 
}else{
 // console.log('Please check your numbers')
 showError('Please check your numbers');
 document.getElementById('loading').style.display = 'none';
 

}

}

function clearResult(){
  document.getElementById('results').style.display = 'none';
}

function showError(error){
  const errorDiv = document.createElement('div');


  //get elements
  const card = document.querySelector('.card');
  const heading =document.querySelector('.heading');
  //add class
  errorDiv.className = 'alert alert-danger';
  
  //create text node and append to div

  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3 secs
  setTimeout(clearError, 3000);


  function clearError(){
    document.querySelector('.alert').remove(); 
   
    
  }

}