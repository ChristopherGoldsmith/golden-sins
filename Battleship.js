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
function newBattery(){
    battery = new powerBat(5, 0);
    console.log('this is working');
    return radarBat;
};
//
let ships = [];
let score = 0;
let hits = 0;
let turns = 1;
let pressed = false;
let radarBat;
let launchMis = false;
let hitPoints = 100;
uCharge = 0;
//
window.onload = () => {
    document.getElementById('startButton').className= 'innerUI2';
    document.getElementById('startButton').innerHTML= 'ENEMY!';
    //Generates ships on load
    if(!pressed){
        pressed = true;
        shipCreate();
        shipGen();
        newBattery();
    };
};
let chargeBattery = () => {
    battery.charge(1);
    uCharge = uCharge + 1;
    chargeUp(uCharge);
    console.log('works');
};
let useRadar = () =>{
    if(battery.energy == battery.max){
    battery.useCharge();
    chargeDwn(battery.max);
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
        alert(`You need ${battery.max - battery.energy} charges to use this ability!`);
    }
};
let prepMissile = () =>{
    if(battery.energy >= 3){
    launchMis = true;
    alert('Missile is ready to launch');
    };
};
function movement(array, dir){
    hitOrMiss(array);
    newArr = Array.from(array);
    locL = newArr[0];
    locN = newArr[1];
    if (dir == 1){
        if(locL >= 1){
            locL = locL - 1;
        };
        array = `${locL}${locN}`;
        hitOrMiss(array);
    } else if(dir == 2){
        if(locL <= 8){
        locL = locL - -1;
        };
        array = `${locL}${locN}`;
        hitOrMiss(array);
    } else if(dir == 3){
        if(locN <= 8){
            locN = locN - -1;
            };
        array = `${locL}${locN}`;
        hitOrMiss(array);
    } else if (dir == 4){
        if(locN >= 1){
            locN = locN - 1;
        }
        array = `${locL}${locN}`;
        hitOrMiss(array);
    } else {

    }
}
function superMissile(cord){
    for(n = 0; 5 > n; n++){
            newCord = cord;
            movement(newCord, n)
        }
    chargeDwn(battery.max);
    launchMis = false;
    uCharge = uCharge - 3;
};
function hitOrMiss(cord){
    if (document.getElementById(cord).className == 'hit' || document.getElementById(cord).className == 'miss'){
        return;
    }
    for(i = 0; i < ships.length; i++){
        let shipID = ships[i];
        ifHit = shipID.units.indexOf(cord);
        if (-1 < ifHit){
            document.getElementById(cord).className = 'hit';
            hits = hits + 1;
            if(!launchMis){
                turns = turns + 1;
            }
            ships[i].units[ifHit] = 0;
            scoring();
            scoreCard();
            var audio = new Audio('hit.ogg');
            audio.pause();
            audio.play();
                if(hits == 17){
                    alert('You win!')
                    document.getElementById('startButton').innerHTML= 'VICTORY'

            }
            break;
        }
    } if (-1 >= ifHit){
        document.getElementById(cord).className = 'miss';
        if(!launchMis){
            turns = turns + 1;
        }
        scoring();
        scoreCard();
        var audio = new Audio('miss.ogg');
        audio.pause();
        audio.play();
            if( turns > 30){
               alert('Your base is lost to the enemy forces.');
               document.getElementById('startButton').innerHTML= 'DEFEAT'
               pressed = false;
            }
        }
}
function chargeChance(funct){
    randomNum = Math.floor(Math.random() * (8 + hits))
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
    if(launchMis){
        superMissile(cord);
    }
else if(pressed && document.getElementById(cord).className != 'hit'){
    chargeChance(chargeBattery);
    hitOrMiss(cord);
    }
};
function shipStats(){
    for(i = 0; ships.length > i; i++ ){
    console.log(ships[i]);
    }
}
function bide(){
    chargeBattery();
    turns = turns + 1;
    scoreCard();
}
var sample = document.getElementById("bgnoise");
function playSound(){
    sample.play();
}        