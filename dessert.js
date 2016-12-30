var dessert=[
  {
    "name": "Fransk sjokoladekake",
    "photo":"https://www.tine.no/oppskrifter/kaker/krem-og-sjokoladekaker/_image/31678.jpg?_encoded=2f66666666666678302f30352f29312c312c28&_ts=14b15deeefb",
    "Ingredienser":["200g smør","200g koksjokolade","4 egg","2dl sukker", "1.5 dl hvetemel", "1ts bakepulver"],
    "homepage":""
  }
]

readRecipe();

var descripcions={};
var homepages={};
function readRecipe(){
  //read form json object:
  console.log(dessert);
  for(i=0; i<dessert.length; i++){
    //adding elements for info on events

    var name=document.createElement("h2");
    name.innerHTML=dessert[i].name;
    var locImg=document.createElement("img");


    var colDiv=document.createElement("div");
    colDiv.setAttribute("class","col-sm-4");

    var link=document.createElement("a");

    link.setAttribute("href","#");
    link.setAttribute("onclick","popup('popUpDiv', this)");
    //Må jeg sette tom id også?
    var td=document.createElement("div");
    td.setAttribute("class","to-do-box");
    td.setAttribute("id",i);
    td.setAttribute("homepage", dessert[i].homepage);
    td.setAttribute("img-url",dessert[i].photo);
    td.setAttribute("style", "background-image: url("+dessert[i].photo);


    var text=document.createElement("div");
    text.setAttribute("class","text");
    text.appendChild(name);

    td.appendChild(text);
    link.appendChild(td);
    colDiv.appendChild(link);
    var insert=document.getElementById("insert");
    insert.appendChild(colDiv);

    //save info for later on object
    //descripcions contains id and descripcion pairs

    homepage=dessert[i].homepage;
    //homepages[i]=homepage;
  }
}


function toggle(div_id) {
  var el = document.getElementById(div_id);
  if ( el.style.display == 'none' ) {
    el.style.display = 'block';
  }
  else {
    el.style.display = 'none';
  }
}
function blanket_size(windowActive) {
  if (typeof window.innerWidth != 'undefined') {
    viewportheight = window.innerHeight;
  } else {
    viewportheight = document.documentElement.clientHeight;
  }
  if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
    blanket_height = viewportheight;
  } else {
    if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
      blanket_height = document.body.parentNode.clientHeight;
    } else {
      blanket_height = document.body.parentNode.scrollHeight;
    }
  }
  var blanket = document.getElementById('Blanket');
  blanket.style.height = blanket_height + 'px';
  var windowAct = document.getElementById(windowActive);

  popUpDiv_height=blanket_height/2-200;//200 is half popup's height
  windowAct.style.top = popUpDiv_height + 'px';
}
function window_pos(windowActive) {
  if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerHeight;
  } else {
    viewportwidth = document.documentElement.clientHeight;
  }
  if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
    window_width = viewportwidth;
  } else {
    if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
      window_width = document.body.parentNode.clientWidth;
    } else {
      window_width = document.body.parentNode.scrollWidth;
    }
  }
  var windowAct = document.getElementById(windowActive);
  window_width=window_width/2-200;//200 is half popup's width
  windowAct.style.left = window_width + 'px';
}

function popup(windowname, element) {
  //console.log(windowname);
  blanket_size(windowname);
  window_pos(windowname);
  toggle('Blanket');
  try{
    makeContent(windowname, element);

   }catch(error){
     console.log("closing");
  }

  toggle(windowname);

  //contentIntPopup(windowname);
}

function makeContent(windowname, element){
  console.log("making content");
  if(windowname === "popUpDiv"){
    console.log(element);
    var srcn=element.getElementsByClassName('to-do-box')[0].getAttribute("img-url");
    var img=document.getElementsByClassName("pop-up-photo")[0];
    img.src=srcn;

    var nameElement=document.getElementsByClassName("pp-name")[0];
    var name=element.children[0].children[0].children[0].innerHTML;
    nameElement.innerHTML=name;

    //var descElement=document.getElementsByClassName("descripcion")[0];
    var idNumber=element.children[0].getAttribute("id");
    //descElement.innerHTML=descripcions[idNumber];

    //Ingredienser:
    var ingDomList=document.getElementsByClassName("ingredienser")[0];
    var ingredienser=dessert[idNumber].Ingredienser;
    console.log("HEEEER");
    console.log("ing "+ingredienser);

    //empty from last popup
    while(document.getElementById("ingr").firstChild){
      document.getElementById("ingr").removeChild(document.getElementById("ingr").firstChild);
    }

    for(var j=0; j<ingredienser.length; j++){
      var ingrediensElement=document.createElement("li");
      console.log(dessert[idNumber]);
      ingrediensElement.innerHTML=dessert[idNumber].Ingredienser[j];
      ingDomList.appendChild(ingrediensElement);
    }
    //homepageElement.appendChild(ingDomList);

    var homepageElement=document.getElementsByClassName("pp-homepage")[0];
    homepageElement.setAttribute("href", element.getAttribute("homepage"));

  }else{//new event

  }
}

document.getElementById("saveEvent").onclick = function(){
  console.log("in save event");
  var name=document.getElementById("name").value;
  var date=document.getElementById("date").value;
  var location=document.getElementById("location").value;
  //var descripcion=document.getElementById("descripcion").value;
  var homepage=document.getElementById('homepage').value;

  if(name.length<1){
    alert("Missing info");
  }else if(date.length<1){
    alert("Missing info");
  }else if(descripcion.length<1){
    alert("Missing info");
  }else{
    console.log(name+", "+date+", "+location+", "+homepage);
    //save to recipe:
    eventObj={
      "name": name,
      "photo": photo,
      "homepage": homepage
    };
    recipe.push(eventObj);
    readRecipe();
    toggle('Blanket');
    toggle('popUpNewEvent');
  }
}

//document.getElementById('eventDone').onclick=function(){

  //Delete from recipe
  //Add to done
//}
