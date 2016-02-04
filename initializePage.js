function initializePage(){
  //var todo=document.getElementByClass("to-do-box");
  for(int i; i<toDo.length; i++){
    //adding elements for info on events
    var name=document.createElement("h2");
    name.value=toDo[i].attr("name");
    var location=document.createElement("h4");
    var locImg=document.createElement("img");
    locImg.src="http://www.clker.com/cliparts/p/R/D/Q/Q/L/map-pin-white-hi.png");
    location.value=toDo[i].attr("location");
    location.appendChild(locImg);

    var date= document.createElement("h3");
    date.value=todo.attr("date");

    var colDiv=document.createElement("div");
    colDiv.setAttribute("class","col-sm-4");

    var link=document.createElement("a href");
    link.setAttribute("href","");
    //Må jeg sette tom id også?
    var td=document.createElement("div");
    td.setAttribute("class","to-do-box");
    td.setAttribute("style", todo.attr("photo"));

    var text=document.createElement("div");
    text.setAttribute("class","text");

    text.appendChild(name);
    text.appendChild(date);
    if(date.length>0){
      text.appendChild(location);
    }

    td.appendChild(text);
    link.appendChild(td);
    colDiv.appendChild(link);
    var insert=document.getElementById("insert");
    insert.appendChild(colDiv);
  }
}
