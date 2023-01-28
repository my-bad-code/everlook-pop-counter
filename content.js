let content = JSON.parse(document.getElementsByTagName("pre")[0].innerHTML)[0]
let horde_pop = parseInt(content.horde)
let alliance_pop = parseInt(content.alliance)
let overall_pop = horde_pop + alliance_pop

let options = {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },

formatter = new Intl.DateTimeFormat([], options);
let date = formatter.format(new Date())

let date_box = document.createElement("div")
date_box.classList.add("date_box")
date_box.innerHTML = "Population on Everlook at: " + date

let body = document.getElementsByTagName("body")[0]
body.innerHTML = "" 

let headline = document.createElement("h1")
headline.innerHTML = "Everlook"

let subline = document.createElement("h2")
subline.innerHTML = "Pop Counter"

let headline_wrapper = document.createElement("div")
headline_wrapper.classList.add("headline_wrapper")

let icon = document.createElement("img")
icon.classList.add("icon")
icon.src = "https://www.dkpminus.com/wp-content/uploads/2022/10/everlook-poc-raster.png"

headline_wrapper.appendChild(icon)
headline_wrapper.appendChild(headline)
headline_wrapper.appendChild(subline)

let pop_wrapper = document.createElement("div")
pop_wrapper.classList.add("pop_wrapper")

let overall_div = document.createElement("div")
overall_div.classList.add("overall")
overall_div.innerHTML = overall_pop

let bars_wrapper = document.createElement("div")
bars_wrapper.classList.add("bars_wrapper")

let dominant_div = document.createElement("div")
dominant_div.classList.add("dominant")
dominant_div.classList.add("bar")
dominant_div.style.width = "100%"

dominant_div.innerHTML = horde_pop

let submissive_div = document.createElement("div")
submissive_div.classList.add("submissive")
submissive_div.classList.add("bar")
submissive_div.innerHTML = alliance_pop

bars_wrapper.appendChild(dominant_div);
bars_wrapper.appendChild(submissive_div); 

pop_wrapper.appendChild(overall_div)
pop_wrapper.appendChild(bars_wrapper)

body.appendChild(date_box)
body.appendChild(pop_wrapper)

if( alliance_pop > horde_pop ) {
    dominant_div.innerHTML =  alliance_pop + " (Alliance)"
    dominant_div.classList.add("alliance")
    dominant_div.classList.remove("horde")

    submissive_div.innerHTML = horde_pop + " (Horde)"
    submissive_div.classList.add("horde")
    submissive_div.classList.remove("alliance")

    submissive_div.style.width = (horde_pop / alliance_pop  * 100) + "%"

} else {
    dominant_div.innerHTML = horde_pop + " (Horde)"
    dominant_div.classList.add("horde")
    dominant_div.classList.remove("alliance")

    submissive_div.innerHTML = alliance_pop + " (Alliance)"
    submissive_div.classList.add("alliance")
    submissive_div.classList.remove("horde")

    submissive_div.style.width = (alliance_pop / horde_pop * 100) + "%"
}



