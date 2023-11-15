$(document).ready(function () {
  // Smooth scrolling with offset for sticky header
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var target = $($(this).attr("href"));

    if (target.length) {
      // Tikrina, ar tai tik "#"
      var offset = $(this).attr("href") === "#" ? 0 : $("header").outerHeight();

      $("html, body").animate(
        {
          scrollTop: target.offset().top - offset,
        },
        10
      );
    }
  });
});

function setActive(element) {
  // Pašalinti aktyvumo klasę nuo visų meniu punktų
  var menuItems = document.querySelectorAll("#mainMenu li");
  menuItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Pridėti aktyvumo klasę paspaudusiam punktui
  element.parentElement.classList.add("active");
}
