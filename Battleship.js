//Major variables, functions, and ships.
//Ship placement function
shipBlueprint.prototype.place = function(){
    console.log('place is working');
    let locN = Math.floor(Math.random() * 10);
    let locL = Math.floor(Math.random() * 10)
    let horizontal = true;
    let rando = Math.floor(Math.random() * 10)
    let moverN = 0;
    let moverL = 0;
    let shipType = this.type;
    function noOverOrOut(){
            if(rando >= 5){
            horizontal = false;
        }
        if ( locL >= 5){
            moverL = -1;
        } else {
            moverL = 1;
        }
        if ( locN >= 5){
          moverN = -1;
        } else {
            moverN = 1;
        }
    }
    noOverOrOut();
    for(i = 0; this.size > i; i++){
        if(horizontal){
            locL = locL + moverL;
            let shipPosition = `${locL}${locN}`;
            this.units[i] = shipPosition;
            for(x = 0; ships.length > x; x++){
                //keeps ships from overlapping
                if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != ships[shipType]){
                    locN = Math.floor(Math.random() * 10);
                    locL = Math.floor(Math.random() * 10);
                    noOverOrOut();
                    i = -1;
                }
            }
        } else{
            locN = locN + moverN;
            let shipPosition = `${locL}${locN}`;
            this.units[i] = shipPosition;
            for(x = 0; ships.length > x; x++){
                //keeps ships from overlapping
                if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != ships[shipType]){
                    locN = Math.floor(Math.random() * 10);
                    locL = Math.floor(Math.random() * 10);
                    noOverOrOut();
                    i = -1;
                }
            }
        };

    } 
};
let shipGen = function(){
    for(k = 0; ships.length > k; k++){
    ships[k].place();
    }
}
function shipBlueprint(type, size){
    this.type = type,
    this.size = size,
    this.units = []
};
function shipCreate(){
    let carrier = new shipBlueprint(0, 5);
    let battleship = new shipBlueprint(1, 4);
    let submarine = new shipBlueprint(2, 3);
    let cruiser = new shipBlueprint(3, 3);
    let destroyer = new shipBlueprint(4, 2);
    return ships = [carrier, battleship, submarine, cruiser, destroyer]
};
function powerBat(max, energy){
    this.max = max,
    this.energy = energy,
    this.useCharge = function(){
        this.energy = 0;
        return this.energy;
    }
    this.charge = function(num){
        this.energy = this.energy + num;
        if ( this.energy > this.max){
            this.energy = this.max;
            return this.energy;
        } else{
            return this.energy;
        }
    }
}
function radarBattery(){
    radarBat = new powerBat(5, 0);
    console.log('this is working');
    return radarBat;
}
//
let ships = [];
let score = 0;
let hits = 0;
let misses = 0;
let turns = 1;
let pressed = false;
let radarBat;
uCharge = 0;
//
window.onload = () => {
    document.getElementById('startButton').className= 'innerUI2';
    document.getElementById('startButton').innerHTML= 'ENEMY!'
    //Generates ships on load
    if(!pressed){
        pressed = true;
        shipCreate();
        shipGen();
        radarBattery();
    };
};
let chargeRadar = () => {
    radarBat.charge(1);
    uCharge = uCharge + 1;
    chargeUp(uCharge);
    console.log('works');
};
let useRadar = () =>{
    if(radarBat.energy == radarBat.max){
    radarBat.useCharge();
    chargeDwn(5);
    uCharge = 0;
    let locator = Math.floor(Math.random() * ships.length);
    let foundShip = ships[locator];
    turns = turns + 1;
        for(i = 0; foundShip.size > i; i++){
        let searcher = foundShip.units[i];
            if (searcher == 0){
            locator = Math.floor(Math.random() * ships.length);
            foundShip = ships[locator]; 
        }
            else if(searcher != 0){
                document.getElementById(searcher).className = 'detect';
                scoreCard();
                console.log(searcher);
                break
            }
        };
    } else {
        alert(`You need ${radarBat.max - radarBat.energy} charges to use this ability!`);
    }
};
function sMissile(){

};
function hitOrMiss(hit, cord){
    if(hit){
        document.getElementById(cord).className = 'hit';
        hits = hits + 1;
        turns = turns + 1;
        ships[i].units[ifHit] = 0;
        scoring();
        scoreCard();
        var audio = new Audio('hit.ogg');
        audio.pause();
        audio.play();

    } else if(!hit){
        document.getElementById(cord).className = 'miss';
        misses = misses + 1;
        turns = turns + 1;
        scoring();
        scoreCard();
        var audio = new Audio('miss.ogg');
        audio.pause();
        audio.play();
    }
}
function coinFlip(funct){
    randomNum = Math.floor(Math.random() * 10)
    if( randomNum < 5){
        console.log(randomNum);
        return funct();
    }
}
let scoring = () => {
    score = Math.round(200 + (hits * 128) - (turns * 19 * 1.2));
    return score;
};
let scoreCard = () => {
    document.getElementById('turns').innerHTML = `Turn: ${turns}`;
    document.getElementById('hits').innerHTML = `Hits: ${hits}`;
    document.getElementById('score').innerHTML = `Score: ${score}`;
};
let chargeUp = (num) => {
    if(num <= 5){
        for(i = 1; i <= num; i++){
            document.getElementById(`charge${i}`).className = 'charged';
        }
    }
}
let chargeDwn = (num) => {
    j = 5;
    for(i = 0; i < num; i++){
    j = 5 - i;
    document.getElementById(`charge${j}`).className = 'noCharge';
    }
};
//Attack function
function attack(cord){
if(pressed){
    coinFlip(chargeRadar);
    for(i = 0; i < ships.length; i++){
        let shipID = ships[i];
        ifHit = shipID.units.indexOf(cord);
        if (-1 < ifHit){
            hitOrMiss(true, cord);
            if(score >= 1000 || hits == 17){
               alert('You win!')
               document.getElementById('startButton').innerHTML= 'VICTORY'
               pressed = false;
            }
            break
        }
    } if (-1 >= ifHit){
            hitOrMiss(false, cord);
            if( score < 0){
               alert('Your base is lost to the enemy forces.');
               document.getElementById('startButton').innerHTML= 'DEFEAT'
               pressed = false;
            }
        }
    }
}
function shipStats(){
    for(i=0;i<=4;i++){
    console.log(ships[i]);
    }
}