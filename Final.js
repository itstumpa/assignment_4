
function totalFine( fare ) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    let surCharge = fare * (20 / 100);
    let serviceCharge = 30;

    let totalFine = fare + surCharge + serviceCharge;
    return totalFine;
}


/* ----------------------------------------------------------------- */


function onlyCharacter( str ) {
      if (typeof str !== "string") {
            return "Invalid";
      }
       return str.split(" ").join("").toUpperCase();
}

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

/* ----------------------------------------------------------------- */


function resultReport( marks ) {
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
            finalScore:finalScore,
            pass: pass,
            fail: fail
      };

}
