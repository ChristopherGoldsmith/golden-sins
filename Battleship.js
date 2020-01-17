//Major variables, functions, and ships.
//Ship placement function
shipBlueprint.prototype.place = function(){
    console.log('place is working');
    let locN = Math.floor(Math.random() * 10);
    let locLCord = Math.floor(Math.random() * 10)
    let horizontal = true;
    let rando = Math.floor(Math.random() * 10)
    let moverN = 0;
    let moverL = 0;
    let shipType = this.type;

    if(rando >= 5){
        horizontal = false;
    }
//Variables that keep ships from moving out of bounds
    if ( locLCord >= 5){
        moverL = -1;
    } else {
        moverL = 1;
    }
    if ( locN >= 5){
        moverN = -1;
    } else {
        moverN = 1;
    }

    for(i = 0; this.size > i; i++){
        if(horizontal){
            let locL = coordinates[locLCord]
            locLCord = locLCord + moverL;
            let shipPosition = `${locL}-${locN}`;
            this.units[i] = shipPosition;
            for(x = 0; ships.length > x; x++){
                //keeps ships from overlapping
                if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != ships[shipType]){
                    locN = Math.floor(Math.random() * 10);
                    locLCord = Math.floor(Math.random() * 10);
                    i = -1;
                }
            }
        } else{
            let locL = coordinates[locLCord]
            locN = locN + moverN;
            let shipPosition = `${locL}-${locN}`;
            this.units[i] = shipPosition;
            for(x = 0; ships.length > x; x++){
                //keeps ships from overlapping
                if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != ships[shipType]){
                    locN = Math.floor(Math.random() * 10);
                    locLCord = Math.floor(Math.random() * 10);
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
let ships = [];
let coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let score = 0;
let hits = 0;
let misses = 0;
let turns = 1;
let pressed = false;
let radarUsed = false;

let useRadar = () =>{
    if(radarUsed == false){
    let radar = document.getElementById('radar');
    let locator = Math.floor(Math.random() * ships.length);
    let foundShip = ships[locator];
    console.log(foundShip.size);
        for(i = 0; foundShip.size > i; i++){
        let searcher = foundShip.units[i];
            if(searcher != 0){
                radar.innerHTML = searcher;
                console.log(searcher);
                radarUsed = true;
                return radar;
            };
        };
    };
};

let scoring = () => {
    score = Math.round(200 + (hits * 128) - (turns * 19 * 1.2));
    return score;
};

window.onload = () => {
    document.getElementById('startButton').className= 'innerUI2';
    document.getElementById('startButton').innerHTML= 'ENEMY!'
    //Generates ships on load
    if(!pressed){
        pressed = true;
        shipCreate();
        shipGen();
    };
};

function attack(cord){
if(pressed){
    let atkCord = document.getElementById(cord).innerHTML;
    for(i = 0; i < ships.length; i++){

        let shipID = ships[i];
        ifHit = shipID.units.indexOf(atkCord);

        if (-1 < ifHit){
            document.getElementById(cord).className = 'hit';
            hits = hits + 1;
            turns = turns + 1;
            ships[i].units[ifHit] = 0;
            scoring();
            document.getElementById('turns').innerHTML = `Turn: ${turns}`;
            document.getElementById('hits').innerHTML = `Hits: ${hits}`;
            document.getElementById('score').innerHTML = `Score: ${score}`;
            var audio = new Audio('hit.ogg');
            audio.pause();
            audio.play();
            if(score >= 1000 || hits == 17){
               alert('You win!')
               document.getElementById('startButton').innerHTML= 'VICTORY'
               pressed = false;
            }
            break
        
        }
    } if (-1 >= ifHit){
        document.getElementById(cord).className = 'miss';
        misses = misses + 1;
        turns = turns + 1;
        scoring();
        document.getElementById('turns').innerHTML = `Turn: ${turns}`
        document.getElementById('score').innerHTML = `Score: ${score}`;
        var audio = new Audio('miss.ogg');
        audio.pause();
        audio.play();
            if( score < 0){
               alert('Your base is lost to the enemy forces.');
               document.getElementById('startButton').innerHTML= 'DEFEAT'
               pressed = false;
            }
        }
    }
}