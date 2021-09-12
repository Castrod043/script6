(() => {
    console.clear();
    const currentdate = new Date();
    console.log(

        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        " year " +
        currentdate.getUTCFullYear()


    )
})();

console.log('Function arguments: exercise')


//function 

const paintWalls = function (welkeMuur, welkeKleur) {

    console.log(welkeMuur + ' muur is geverft in de kleur ' + welkeKleur);

}


const Kleur = 'geel';
const welkeMuur = 'De achterste';

// call function 

paintWalls(welkeMuur, Kleur);







