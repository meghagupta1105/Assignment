function calculateTax() {
  
  var grossIncome = parseFloat(document.getElementById('grossIncome').value);
  var extraIncome = parseFloat(document.getElementById('extraIncome').value);
  var age = document.getElementById('age').value;
  var deductions = parseFloat(document.getElementById('deductions').value);


  var error = false;
  var errorMessage = "";

  
  if (isNaN(grossIncome)) {
    error = true;
    errorMessage += "Please enter a valid number for gross annual income.\n";
    document.getElementById('grossIncomeError').style.display = 'inline'; 
  } else {
    document.getElementById('grossIncomeError').style.display = 'none'; 
  }

 
  if (isNaN(extraIncome)) {
    error = true;
    errorMessage += "Please enter a valid number for extra income.\n";
    document.getElementById('extraIncomeError').style.display = 'inline'; 
  } else {
    document.getElementById('extraIncomeError').style.display = 'none'; 
  }

  
  if (isNaN(deductions)) {
    error = true;
    errorMessage += "Please enter a valid number for deductions.\n";
    document.getElementById('deductionsError').style.display = 'inline';
  } else {
    document.getElementById('deductionsError').style.display = 'none'; 
  }

  if (age === "") {
    error = true;
    errorMessage += "Please select age range.\n";
    document.getElementById('ageError').style.display = 'inline'; 
  } else {
    document.getElementById('ageError').style.display = 'none'; 
  }

  if (error) {
    alert(errorMessage);
    return;
  }

 
  var totalIncome = grossIncome + extraIncome - deductions;
  var taxableIncome = totalIncome > 800000 ? totalIncome - 800000 : 0;


  var taxRate;
  switch (age) {
    case "<40":
      taxRate = 0.3;
      break;
    case ">=40&<60":
      taxRate = 0.4;
      break;
    case ">=60":
      taxRate = 0.1;
      break;
  }

  var tax = taxableIncome * taxRate;

  var modal = document.getElementById('modal');
  var taxResult = document.getElementById('taxResult');
  taxResult.innerHTML = "<span class='overall-income'>Your Overall income will be</span>" +
                        "<span id='taxAmount'>" + tax.toFixed(2) + "</span>" +
                        "<span class='deduction'>after tax deductions</span>";
  modal.style.display = "block";

 
  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = function() {
    modal.style.display = "none";
  }
}
