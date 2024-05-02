document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var n = parseInt(document.getElementById("number").value);
    var stirlingApprox = Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
    var trueValue = factorial(n);
    var error = ((trueValue - stirlingApprox) / trueValue) * 100;
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Aproximación de Stirling: " + stirlingApprox.toFixed(2) + "<br>" +
                          "Valor Real: " + trueValue + "<br>" +
                          "Error: " + error.toFixed(2) + "%";
    resultDiv.classList.add("resultStyle");
  });
  
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  