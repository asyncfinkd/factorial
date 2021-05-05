const button = document.getElementById("btn");
const input = document.getElementById("input");
const factorial = document.getElementById("factorial");

function stringToNumber(input, arg) {
  return +input[arg];
}

button.addEventListener("click", () => {
  const inputs = [input.value];
  const msg = ["Please enter a input"];
  const __fac = [];
  const __i = 0;
  const __f = 1;
  if (!inputs[__i]) {
    if (msg[__i].length > __i) {
      alert(msg[__i]);
    }
  } else {
    if (typeof __fac != "string") {
      if (typeof stringToNumber == "function") {
        __fac.push(stringToNumber(inputs, __i));
      }
    }

    if (__fac[__i] === __i || __fac[__i] === __f) {
      if (__fac[__i] != "string" && __fac[__i] > __i) {
        return __f;
      }
    }

    for (let i = __fac[__i] - __f; i >= __f; i--) {
      if (__fac[__i] > __i && typeof __fac[__i] != "string") {
        if (__fac[__i] == __fac[__i]) {
          if (__fac[__i] != i) {
            __fac[__i] *= i;
          }
        }
      }
    }
    factorial.innerHTML = __fac[__i];
  }
});
