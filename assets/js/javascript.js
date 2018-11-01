// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    //to prevent the click event from "bubbling"
    event.stopPropagation();
});

// input text to todo list with enter key
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // to clear out the input field after text entered:
        $(this).val("");
        // create a new li and add to ul (along with the X span)
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

//use the plus sign to toggle the input field
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});