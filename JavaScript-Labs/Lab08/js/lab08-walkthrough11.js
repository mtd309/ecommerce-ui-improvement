// define constructor function for Country objects
function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}

// create an array of country objects
var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
];

// you can also push each new country object onto the end of the array
countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));



for (var i=0;i<countries.length;i++) {
 var country=countries[i];
 document.write("<div class='box'><img class='boxImg' src='flags/"+country.iso+".png'>");
 for (var property in country) {
  if (Object.prototype.hasOwnProperty.call(country,property)) document.write('<strong>'+property+': </strong>'+country[property]+'<br>');
 }
 document.write('</div>');
}
