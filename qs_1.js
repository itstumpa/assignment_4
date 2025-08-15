
function totalFine(fare) {
      if(typeof fare !== "number" || fare <= 0) {
      return "Invalid";
}     

let surCharge = fare * (20 / 100);
let serviceCharge = 30;
      
   let totalFine = fare + surCharge + serviceCharge;
   return totalFine;
}

let testFares = [200, 0, 50, 552, -35, "65", "Gorib tai ticket katinai"];

for (let fare of testFares) {
    console.log(totalFine(fare));
}

