$(document).ready(function () {
  //this sets the year and name of the copyright text in the bottom of the page.
  const year = new Date().getFullYear();
  $(".copyright").append(` ${year} Hemmaköket AB`);

  //this hides the short info for each recipe box.
  $(".shortInfo").hide();
  /*this shows the short info for each recipe box when pressing 
  the "More info" button. */
  $(".btnMoreInfo").click(function () {
    const btnVal = $(this).val();

    if (btnVal === "Mer info") {
      $(this).val("Dölj info");
    } else {
      $(this).val("Mer info");
    }
    $(this).siblings(".shortInfo").toggle(this);
  });

  //this hides the filter bar in the all "All recipe section"
  $(".filterBar__filters").hide();
  /* This opens the filter bar when pressing "Show filter" and
   * changes the text to be "Hide filter"
   */
  $(".filterBar__headding").click(function () {
    const filterBar = $(".filterBar__filters");
    const filterHeadding = $(".filterBar__headding").text();

    if (filterHeadding === "Visa filter") {
      $(this).text("Dölj filter");
      $(filterBar).fadeIn("slow");
    } else {
      $(this).text("Visa filter");
      $(filterBar).fadeOut("slow");
    }
  });

  //this links the added span message with the actual file input message
  $(".imgInput__section__fileInput").change(function () {
    const input = $(this);
    const inputSection = input.parent();
    const inputMsg = $(".imgInput__section__fileInput__msg", inputSection);
    //this removes the filepath of selected file and leaves only the file name.
    const fileName = input.val()?.replace(/^[A-z]:\\.*\\/, "");

    inputMsg.text(fileName);
  });

  /*this will add another ingredient box in the end of the list of
   *ingredient boxes.
   */
  $("#addIngredient").click(function () {
    const ingredientBox = $(this).parent().prev().children().last();
    const ingredientList = $(this).parent().prev();
    const addIngredient = ingredientBox.clone();
    console.log();
    ingredientList.append(addIngredient);
  });

  /*this will remove the last ingredient box in the end of the list of
   *ingredient boxes. The user cannot remove a ingredient box if there
   *is only one left and then a message will appear.
   */
  $("#removeIngredient").click(function () {
    const ingredientList = $(this).parent().prev().children();
    const ingredientBox = $(this).parent().prev().children().last();

    if (ingredientList.length > 2) {
      ingredientBox.remove();
    } else {
      $(".removeIgredient__msg").fadeIn("slow");
      $(".removeIgredient__msg").text("Du måste ha minst 2 ingredienser");
      setTimeout(function () {
        $(".removeIgredient__msg").fadeOut("slow");
        $(".removeIgredient__msg").text("");
      }, 3000);
    }
  });

  /*this will add another description box in the end of the list of
   *description boxes.
   */
  $("#addItem").click(function () {
    const descriptionBox = $(this).parent().prev().children().last();
    const descriptionList = $(this).parent().prev();
    const addDescription = descriptionBox.clone();

    descriptionList.append(addDescription);
  });

  /*this will remove the last description box in the end of the list of
   *description boxes. The user cannot remove a description box if there
   *is only one left and then a message will appear.
   */
  $("#removeItem").click(function () {
    const descriptionList = $(this).parent().prev().children();
    const descriptionBox = $(this).parent().prev().children().last();

    if (descriptionList.length > 1) {
      descriptionBox.remove();
    } else {
      $(".removeItem__msg").fadeIn("slow");
      $(".removeItem__msg").text("Du måste ha minst 1 beskrivning");
      setTimeout(function () {
        $(".removeItem__msg").fadeOut("slow");
        $(".removeItem__msg").text("");
      }, 3000);
    }
  });

  //this set the date value in the form to be "todays date"
  const date = new Date();
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  const todaysDate = yyyy + "-" + mm + "-" + dd;
  $("#date").val(todaysDate);

  /*this hides a message that that will be visible after a user has registered
   *a new recipe
   */
  $(".btnCreateRecipe__msg").hide();
  //this shows a message after a user has registered a new recipe
  $(".createRecipe__form").submit(function (event) {
    event.preventDefault();
    const form = $(this);
    $(".btnCreateRecipe").fadeOut("slow").hide();
    $(".btnCreateRecipe__msg").fadeIn("slow").show();

    setTimeout(function () {
      $(".btnCreateRecipe__msg").fadeOut("slow").hide();
      $(".btnCreateRecipe").fadeIn("slow").show();
      form.trigger("reset");
    }, 5000);
  });

  //this hides the contact information for each person
  $(".contactInfo").hide();
  /*this shows the contact information for each person when the
   *user presses the text "Show contact information" and will change
   *the text to "Hide contact information".
   */
  $(".contactButton").click(function () {
    const btnChoice = $(this).val();

    if (btnChoice === "Visa kontaktinfo") {
      $(this).val("Dölj kontaktinfo");
    } else {
      $(this).val("Visa kontaktinfo");
    }
    $(this).siblings(".contactInfo").toggle();
  });

  /*this will hide the contact form message that will be visible when
   *the user submits a message.
   */
  const formMessage = $(".frameForm__contactForm__message");
  formMessage.hide();
  /*This will hide the form when the user submits their message and show
   *thankful reply to the submitted message and after 6 seconds the
   *original will be visible again and be empty of information.
   */
  $(".frameForm__contactForm__formInput").submit(function (event) {
    event.preventDefault();
    const inputName = $("#name").val();
    const inputEmail = $("#email").val();
    const inputMessage = $("#message").val();
    const formLabels = $(".frameForm__contactForm__labels");
    const formInputs = $(".frameForm__contactForm__formInput");
    const form = $(this);
    formLabels.fadeOut("slow").hide();
    form.fadeOut("slow").hide();

    formMessage.fadeIn("slow").show();
    setTimeout(function () {
      formMessage.fadeOut("slow").hide();
      formLabels.fadeIn("slow");
      formInputs.fadeIn("slow");
      form.trigger("reset");
    }, 6000);
  });
});
