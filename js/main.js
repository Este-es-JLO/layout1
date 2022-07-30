$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
  
  $("ul").on("click", "span", function () {
    $(this).parent().remove();
  });
  
  $("input").keypress(function (event) {
    if (event.which === 13) {
      // We will do stuff here
      var listItem = $(this).val();
      $("ul").append(`
      <li>${listItem}
      <span>
      <i class="fa-solid fa-trash-can"></i>
      </span>
      `);
    }
  });
  