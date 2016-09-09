<<<<<<< HEAD
//problem: looks gross in small browser widths
//solution: hide text links and add better nav method

//create a select and append to #menu
//cycle over menu links
  //create an option
  //option's value is the href
  // option's text is the text of links
  //append option to select
//create button
//bind click to button
  //go to slect location
//modify css to hide link on small widths and show button and select
  //also hides select and button on larger widths
//deal with seleced option depending on current page
=======
//problem: looks gross on small widths
//solution: dropdown menu

//create select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function(){
    var $anchor = $(this);
    //create an option
    var $option = $("<option></option>");
    //deal with selected options depending on current page
    if($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    //option's value is the href
    $option.val($anchor.attr("href"));
    //option's text is the text of the link
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
});
//bind change listener to the select
$select.change(function(){
    //go to select's location
    window.location = $select.val();
});
>>>>>>> 5d94b8a1e5d4746b6717971b43d2498f25576821
