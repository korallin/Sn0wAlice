function create_food() {
  //ICI C LA TEUF
  var petit_dej = JSON.parse(Deno.readTextFileSync('./food/ptidej.json'))
  var r = JSON.parse(Deno.readTextFileSync('./food/r.json'))
  var gouter = JSON.parse(Deno.readTextFileSync('./food/gouter.json'))
  var apero = JSON.parse(Deno.readTextFileSync('./food/apero.json'))
  var emote = ["4334_pepe1", "5869_TakagiShhh", "7577_CatDancing", "8395_CerberusFastTap", "560610208536068118", "734622115159867473", "734622150908182588",
  "734622181589254245", "734622241639104532", "dance", "Deadpool_aw_shock", "Deadpool_clapping_appreciating", "Deadpool_heart_love"]

  var date = new Date();
  var date_final = date
  var table = Deno.readTextFileSync('./table.txt')

  //<img src="pic/560610208536068118.gif" height="20">


  var the_petit_dej = petit_dej[Math.floor(Math.random() * (petit_dej.length))];
  if (the_petit_dej.emote) {
    the_petit_dej.name = the_petit_dej.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }
  var the_apero0 = apero[Math.floor(Math.random() * (apero.length))];
  if (the_apero0.emote) {
    the_apero0.name = the_apero0.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }
  var the_apero = apero[Math.floor(Math.random() * (apero.length))];
  if (the_apero.emote) {
    the_apero.name = the_apero.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }
  var the_gouter = gouter[Math.floor(Math.random() * (gouter.length))];
  if (the_gouter.emote) {
    the_gouter.name = the_gouter.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }

  var the_r0 = r[Math.floor(Math.random() * (r.length))];
  if (the_r0.emote) {
    the_r0.name = the_r0.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }
  var the_r = r[Math.floor(Math.random() * (r.length))];
  if (the_r.emote) {
    the_r.name = the_r.name + " <img src='pic/"+emote[Math.floor(Math.random() * (emote.length))]+".gif' height='20'>";
  }

  var table = table.replace('food.day', date_final)
  var table = table.replace('food.petitdej', the_petit_dej.name)
  var table = table.replace('food.dej', the_r0.name)
  var table = table.replace('food.gouter', the_gouter.name)
  var table = table.replace('food.apero0', the_apero0.name)
  var table = table.replace('food.apero', the_apero.name)
  var table = table.replace('food.diner', the_r.name)


  var fiche = Deno.readTextFileSync('./default.md').replace("food.table", table)
  
  return fiche
}

async function get_ph_data(fiche: any) {
  try {
    var data = await fetch('https://pornhub.com')
    var html = await data.text()
    html = html.split('"videos":"Search ')[1].split('...')[0]
  } catch (err) {
    html = "err"
  }
  fiche = fiche.replace('by.videos', html)
  return fiche
}



//on lance tout le tralala
var fiche = create_food()
fiche = await get_ph_data(fiche)
console.log("done")


Deno.writeTextFileSync('./README.md', fiche)
console.log("[SYSTEM] - Fiche Done")