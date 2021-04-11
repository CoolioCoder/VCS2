var menu_list_array= ["Chicken tandoori pizza",
                  "Veg supreme pizza",
                "Paneer Tikka pizza",
            "Margarita pizza",
        "Deluxe cheese burst pizza"];

function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+ menu_list_array[i]+'</li>';
    }
    htmldata=htmldata+"</ol>";
    Document.getElementById("display_menu").innerHTML=htmldata;
}