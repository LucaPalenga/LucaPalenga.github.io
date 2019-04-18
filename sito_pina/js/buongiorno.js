var oggi = new Date();
var ora = oggi.getHours();
var messaggio;

if(ora>20){
    messaggio = "Buonanotte";
}else if(ora>14){
  messaggio = "Buonasera";
}else {
  messaggio = "Buongiorno"
}

document.write("<h3>"+messaggio+"</h3>");
