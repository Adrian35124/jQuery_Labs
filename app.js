$(document).ready(function () {
  let $input = $("#btnSubmit");
  let $textId = $("#textId");

  //when document loads, button is disabled by default
  $input.prop("disabled", true);

  $input.click(function (e) {
      e.preventDefault();
    let h2Text = (`<h2>${$textId.val()}</h2>`)
    let $newDiv = ('<div>' + h2Text + '</div>')
    $('body').append($newDiv)
  });

  $textId.keyup(function () {
    if ($textId.val() == "") {
      $input.prop("disabled", true);
    } else {
      $input.prop("disabled", false);
    }
  });
//   h2text.mouseover(mouseOver)

//       function mouseOver() {
//       $(this).css({
//           backgroundColor: "blue", 
//           borderRadius: "10px"
//       })
//   }

});
