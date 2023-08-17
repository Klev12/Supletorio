let animals = ['gato', 'perro'];

let winningTicket = {
    number1: 1,
    number2: 2,
    number3: 2,
    number4: 1,
    animal: 'gato'
};


function getTicket() {
    let number1 = Math.floor(Math.random()< 0.5 ? 1:2);
    let number2 = Math.floor(Math.random()< 0.5 ? 1:2);
    let number3 = Math.floor(Math.random()< 0.5 ? 1:2);
    let number4 = Math.floor(Math.random()< 0.5 ? 1:2);
    let animal = animals[Math.floor(Math.random() * animals.length)];

    return {
        number1,
        number2,
        number3,
        number4,
        animal
    };
}

function checkTicket(playerTicket, winningTicket) {
    if (playerTicket.number1 === winningTicket.number1) {
        console.log(`Tu animal es: ${playerTicket.animal}. Tienes otra oportunidad!`);
        return true;
    } else {
        console.log('Lo siento perdiste, intentalo de nuevo!');
        return false;
    }
}


console.log(`Boleto ganador: Number1: ${winningTicket.number1}, Number2: ${winningTicket.number2},Number3: ${winningTicket.number3},Number4: ${winningTicket.number4} Animal: ${winningTicket.animal}`);

let playerTicket = getTicket();
console.log(`Tu boleto: Number1: ${playerTicket.number1}, Number2: ${playerTicket.number2},Number3: ${playerTicket.number3}, Number4: ${playerTicket.number4} Animal: ${playerTicket.animal}`);

checkTicket(playerTicket, winningTicket);
