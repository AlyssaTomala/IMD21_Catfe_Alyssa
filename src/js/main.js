var burger = document.querySelector(".burger-menu");
var navigation = document.querySelector(".navigation");
var openNavigation = function (event) {
  event.preventDefault();
  navigation.classList.toggle("is-open");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", openNavigation);
