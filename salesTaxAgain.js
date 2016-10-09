
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var bombSalesData = companySalesData[1]["sales"];
  var bombSalesDatReduc = bombSalesData.reduce(add, 0)
    function add(a, b) {
      return a + b;
    }
  var taxRatesAB = salesTaxRates["AB"];
  var bombTaxRepo = bombSalesDatReduc * taxRatesAB

  var telSalesDataBC = companySalesData[0]["sales"];
  var telSalesDataBCReduc = telSalesDataBC.reduce(add, 0);
    function add(c, d) {
      return c + d;
    }
  var telSalesDataSK = companySalesData[2]["sales"];
  var telSalesDataSKReduc = telSalesDataSK.reduce(add, 0);
    function add (e, f) {
      return e + f
    }
  var telSalesDataTot = telSalesDataSKReduc + telSalesDataBCReduc;
  var taxRatesBC = salesTaxRates["BC"];
  var telTaxBCRepo = telSalesDataBCReduc * taxRatesBC;
  var taxRatesSK = salesTaxRates["SK"];
  var telTaxSKRepo = telSalesDataSKReduc * taxRatesSK;
  var telTaxRepoTot = telTaxBCRepo + telTaxSKRepo

  // console.log(bombSalesDatReduc, bombTaxRepo);
  // console.log(telSalesDataTot, telTaxRepoTot);

  var salesTaxReport = {
    "Telus": 
    {"totalSales": [telSalesDataTot].join(""),
    "totalTaxes": [telTaxRepoTot].join("")
    },
    "Bombardier": 
    {"totalSales": [bombSalesDatReduc].join(""), 
    "totalTaxes": [bombTaxRepo].join("")
    } 
  }
  return salesTaxReport

  

  // var results = salesTaxReport.assign(companySalesData[1], bombSalesDatReduc, bombTaxRepo);
  // console.log(results)

}

// var salesTaxReport = [{name: "Bombardier", sales: "0"}]

console.log(calculateSalesTax());



//var results = salesTaxReport(companySalesData, salesTaxRates);







/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
