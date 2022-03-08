const calculator = document.querySelector('.block');
const area = document.querySelector('.textarea');
const oper = document.querySelectorAll('.operand__item');
const point = document.querySelector('.point');
const equil = document.querySelector('.equil');

let a, b;

calculator.addEventListener('click', function (event) {
   if (event.target.closest(".number")) {
      area.innerHTML += event.target.innerHTML;
      if (equil.classList.contains("active")) {
         area.innerHTML = event.target.innerHTML;
         equil.classList.remove("active")
      }
      oper.forEach((item) => {
         if (item.classList.contains("active")) {
            area.innerHTML = event.target.innerHTML;
         }
      })
   }
   if (event.target.closest(".operand__item")) {
      oper.forEach((item) => {
         item.classList.remove("active");
         event.target.classList.add("active");
      })
      point.classList.remove("active");
      a = area.innerHTML;
   }
   if (event.target.closest(".equil")) {
      equil.classList.add("active");
      point.classList.add("active");
      b = area.innerHTML;
      area.innerHTML = calc(a, b);
      if (Number.isInteger(+area.innerHTML)) {
         point.classList.remove("active");
      }
      oper.forEach((item) => {
         item.classList.remove("active");
      })
   }
   if (event.target.closest(".close")) {
      area.innerHTML = "";
      oper.forEach((item) => {
         item.classList.remove("active");
      })
      point.classList.remove("active");
   }
   if (event.target.closest(".point")) {
      point.classList.add("active");
   }
})

function calc(a, b) {
   let res = eval(a + document.querySelector(".operand__item.active").innerHTML + b);
   return res;
}