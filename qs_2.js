

function onlyCharacter(str) {
      if (typeof str !== "string") {
            return "Invalid";
      }
      return str.replace(/\s+/g, "").toUpperCase();
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
