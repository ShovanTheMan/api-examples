const countryName = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}
const displayCountry = countries =>{
    const countriesContainer = document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country);
        
    // }
        countries.forEach(country => {
        console.log(country.name.common)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;

        countriesContainer.appendChild(countryDiv);
    })
    
   
  
}


countryName();