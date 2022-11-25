$(document).ready(function () {
  /*this will show the first wide img and hide it if any other
   *image is chosen.
   */
//   $("#wide-img1").show();

  $("#img1").click(function () {
    $(".wide-img").hide("slow");
    $("#wide-img1").fadeIn("slow");
  });

  $("#img2").click(function () {
    $(".wide-img").hide("slow");
    $("#wide-img2").fadeIn("slow");
  });

  $("#img3").click(function () {
    $(".wide-img").hide("slow");
    $("#wide-img3").fadeIn("slow");
  });

  $("#img4").click(function () {
    $(".wide-img").hide("slow");
    $("#wide-img4").fadeIn("slow");
  });

  /*This will hide/show the full recipe. The ingredients and description
   *can be visible depending on which the user wants to see.
   *
   */
  const recipeFullRecipe = $(".recepie__frame.fullRecipe");
  const showMoreFullView = $(".overview__showMore.fullView");
  const showMoreSmallView = $(".overview__showMore.smallView");
  const recepeIngredientsList = $(".fullRecipe__ingredients");
  const recipeDescriptionList = $(".fullRecipe__description");
  const recipeIngredientsBtn = $(".fullRecipe__nav__heading.ingredients");
  const recipeDescriptionBtn = $(".fullRecipe__nav__heading.description");

  recipeFullRecipe.hide();
  recipeDescriptionList.hide();

  showMoreFullView.click(function () {
    if (showMoreFullView.text() === "Visa recept ☞") {
      showMoreFullView.text("Dölj recept ☜");
      recipeFullRecipe.toggle("slow");
    } else {
      showMoreFullView.text("Visa recept ☞");
      recipeFullRecipe.toggle("slow");
    }
  });
  showMoreSmallView.click(function () {
    recipeFullRecipe.show();
  });

  recipeIngredientsBtn.click(function () {
    recipeDescriptionList.fadeOut("slow");
    recepeIngredientsList.fadeIn("slow");
  });
  recipeDescriptionBtn.click(function () {
    recipeDescriptionList.fadeIn("slow");
    recepeIngredientsList.fadeOut("slow");
  });
});
