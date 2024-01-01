const bill = document.querySelector("body .container .inp .in.bill");
const grids = document.querySelectorAll("body .container .grids .grid");
const people = document.querySelector("body .container .inp .in.people");
const tip = document.querySelector("body .container .second .k.tip-element");
let custom = document.querySelector("body .container .grids .gc");
const resetBtn = document.querySelector("body button");
const total = document.querySelector(
  "body .container .second .k.total-element"
);
//st inp = document.querySelector("body .container .grids .custom .gc");

//functions
const calcTip = (bil, tt, per) => {
  return Math.round((bil * (tt / 100)) / per);
};

const upDate = (position, bil, tips, tot) => {
  grids.forEach((element) => {
    element.classList.remove("active");
  });
  if (!Number(people.value)) {
    people.value = "1";
  }
  if (position === 5) {
    grids[position].setAttribute("data-set", custom.value);
  }
  grids[position].classList.add("active");
  bill.textContent = bil;
  console.log(bil);

  tip.textContent = `$${calcTip(
    bil,
    Number(grids[position].getAttribute("data-set")),
    Number(people.value)
  )}`;

  console.log(grids[position].getAttribute("data-set"));

  console.log((tot + "").length);
  if (grids[position].getAttribute("data-set").length == 2) {
    total.textContent = `$${Math.round(
      (bil / Number(people.value)) *
        Number(`1.${grids[position].getAttribute("data-set")}`)
    )}`;
  } else if (grids[position].getAttribute("data-set").length == 1) {
    total.textContent = `$${Math.round(
      (bil / Number(people.value)) *
        Number(`1.0${grids[position].getAttribute("data-set")}`)
    )}`;
  } else {
    total.textContent = `0-100%`;
  }
};

resetBtn.addEventListener("click", function () {
  upDate(1, 0, 0, 0);
});

grids.forEach((element, value) => {
  element.addEventListener("click", function () {
    upDate(value, Number(bill.value), 0, 1);
  });
});
