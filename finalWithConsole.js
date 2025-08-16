
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
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



/* ----------------------------------------------------------------- */




function onlyCharacter(str) {
      if (typeof str !== "string") {
            return "Invalid";
      }
      return str.split(" ").join("").toUpperCase();
}

let string = [
      "  h e llo wor   ld",
      "Cy   bar- At  tac k  ",
      " ha ck m e 1 @ru.c  n  ",
      "Serv er : : Do wn",
      ["hack", "me"],
      true
];
string.forEach(item => {
      console.log(onlyCharacter(item));
});




/* ----------------------------------------------------------------- */




function bestTeam( player1, player2 ) {

      if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
            return "Invalid";
      }

      let total1 = player1.foul + player1.cardY + player1.cardR;
      let total2 = player2.foul + player2.cardY + player2.cardR;


      if (total1 < total2) {
            return player1.name;

      } else if (total2 < total1) {
            return player2.name;
      } else {
            return "Tie"
      }

}

console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
      { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));

console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
      { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
      { name: "France", foul: 10, cardY: 2, cardR: 1 }));

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
      "France")); 


/* ----------------------------------------------------------------- */


      
      

function isSame(arr1, arr2) {
      if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            return "Invalid";

      }
      if (arr1.length !== arr2.length) {
            return false;
      }

      for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                  return false;
            }
      }
      return true;

}

console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
console.log(isSame([1, undefined, 3], [1, null, 3]));
console.log(isSame([1, 4, 5], [1, 4, 5]));
console.log(isSame([1, "4", 4], [1, 4, 4]));
console.log(isSame([2, 5, 6], 256));
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));


/* ----------------------------------------------------------------- */


function resultReport(marks) {
      if (!Array.isArray(marks)) {
            return "Invalid";

      }
      if (marks.length === 0) {
            return { finalScore: 0, pass: 0, fail: 0 };
      }
      let total = 0;
      let pass = 0;
      let fail = 0;

      for (let mark of marks) {
            total += mark;
            if (mark >= 40) {
                  pass++;
            } else {
                  fail++;
            }
      }

      let finalScore = Math.round(total / marks.length);
      return {
            finalScore: finalScore,
            pass: pass,
            fail: fail
      };

}
console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));