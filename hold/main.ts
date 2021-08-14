
async function get_ph_data(fiche: any) {
  try {
    var data = await fetch('https://pornhub.com')
    var html = await data.text()
    html = html.split('id="searchInput"')[1].split(">")[0]
  } catch (err) {
    html = "err"
  }
  fiche = fiche.replace('by.videos', "3M+ video")
  return fiche
}



//on lance tout le tralala
var fiche = Deno.readTextFileSync('./default.md')
fiche = await get_ph_data(fiche)
console.log("done")


Deno.writeTextFileSync('./README.md', fiche)
console.log("[SYSTEM] - Fiche Done")