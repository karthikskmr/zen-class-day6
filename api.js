xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = () =>{
    let response = JSON.parse(xhr.responseText);
    console.log('***** Asia countries name ****')
    response.filter((city) => {
        if(city.region && city.region ===  'Asia'){
            console.log(city);
        }
    });

    console.log("**** Country with lessthan 2lakhs population");
    console.log(response.filter((people) => people.population <= 200000));

    response.forEach(element => {
       //name ,capital, flog
        console.log(element.name.common,element.capital,element.flag);

        // us doller contry names
        if(element.currencies && element.currencies.USD){
            console.log(element.name.common);
        }
    });
   
    // total population
    let total =response.reduce((accVal, curVal) => {
        return accVal+curVal.population;
    },0);
    console.log(total);
};