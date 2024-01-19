function showCountry(country){
  const div = document.createElement('div')
  div.classList.add("country")
  const countryName = country.name.common
  const name = document.createElement('h2')
  name.textContent = countryName
  const img = document.createElement('img')
  img.src = country.flags.svg
  img.alt = countryName
  div.append(name,img)
  const main = document.querySelector('#countries')
  main.appendChild(div)
}
async function request(){
  const response = await fetch('https://restcountries.com/v3.1/all')
  const json = await response.json()
  showCountry(json[52])
  showCountry(json[175])
  // json.forEach(showCountry())
}

request()