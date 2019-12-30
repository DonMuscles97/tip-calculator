
// Listen for the submit button
document.querySelector('#tip-form').addEventListener('submit', calculateTotal);


// Calculate Total

function calculateTotal(e){
    let amount = parseFloat(document.querySelector('#amount').value);
  
    let tip = parseFloat(document.querySelector('input[name = "tip"]:checked').value);

    // console.log(typeof tip)


  if (isNaN(amount)) {
    alert('Please input a valid number')
  } else {
  
  // console.log(amount);

    createTotal()
    
  function createTotal() {
    let custom = parseFloat(document.querySelector('#custom').value)
    let total = 0;
    if (tip === 0) {
     total = custom;
    } else {
      total = tip * amount
    }
    
    if (isNaN(total)) {
      alert('Please input a valid number')
    } else {

    console.log(total)
    console.log(typeof total)

    document.querySelector('#amount').value = ''
    document.querySelector('#custom').value = ''

   grat = document.querySelector('#grat')
   grat.value = (total).toFixed(2);

   let results = document.querySelector('#results')
   results.value = (total + amount).toFixed(2);
    }
  }
  
   
  
}
 
  e.preventDefault();
}