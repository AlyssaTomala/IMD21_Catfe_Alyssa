var burger = document.querySelector(".burger");
var navigation = document.querySelector(".navigation");
var openNavigation = function () {
  navigation.classList.toggle("is-open");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", openNavigation);
