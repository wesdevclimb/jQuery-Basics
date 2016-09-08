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
//create button    
var $button = $("<button>Go</button>");
$("#menu").append($button);
//bind click to button
$button.click(function(){
    //go to select's location
    window.location = $select.val();
});
