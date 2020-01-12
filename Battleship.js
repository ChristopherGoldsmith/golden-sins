//Major variables and ships.

let carrier = {
    size: 5,
    units: ['0', '0', '0', '0','0'],
    place: function place(){
        let locN = Math.floor(Math.random() * 10);
        let locLCord = Math.floor(Math.random() * 10)
        let horizontal = true;
        let rando = Math.floor(Math.random() * 10)
        let moverN = 0;
        let moverL = 0;

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
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != carrier){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                    }
                }
            } else{
                let locL = coordinates[locLCord]
                locN = locN + moverN;
                let shipPosition = `${locL}-${locN}`;
                this.units[i] = shipPosition;
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != carrier){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                        
                    }
                }
            };

        } 
    }
};
let battleship = {
    size: 4,
    units: ['0', '0', '0', '0'],
    place: function place(){
        let locN = Math.floor(Math.random() * 10);
        let locLCord = Math.floor(Math.random() * 10)
        let horizontal = true;
        let rando = Math.floor(Math.random() * 10)
        let moverN = 0;
        let moverL = 0;

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
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != battleship){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                    }
                }
            } else{
                let locL = coordinates[locLCord]
                locN = locN + moverN;
                let shipPosition = `${locL}-${locN}`;
                this.units[i] = shipPosition;
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != battleship){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                        
                    }
                }
            };

        } 
    }
};
let submarine = {
    size: 3,
    units: ['2', '2', '2'],
    place: function place(){
        let locN = Math.floor(Math.random() * 10);
        let locLCord = Math.floor(Math.random() * 10)
        let horizontal = true;
        let rando = Math.floor(Math.random() * 10)
        let moverN = 0;
        let moverL = 0;

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
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != submarine){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                    }
                }
            } else{
                let locL = coordinates[locLCord]
                locN = locN + moverN;
                let shipPosition = `${locL}-${locN}`;
                this.units[i] = shipPosition;
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != submarine){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                        
                    }
                }
            };

        } 
    }
};
let cruiser = {
    size: 3,
    units: ['5', '6', '7'],
    place: function place(){
        let locN = Math.floor(Math.random() * 10);
        let locLCord = Math.floor(Math.random() * 10)
        let horizontal = true;
        let rando = Math.floor(Math.random() * 10)
        let moverN = 0;
        let moverL = 0;

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
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != cruiser){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                    }
                }
            } else{
                let locL = coordinates[locLCord]
                locN = locN + moverN;
                let shipPosition = `${locL}-${locN}`;
                this.units[i] = shipPosition;
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != cruiser){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                        
                    }
                }
            };

        } 
    }
};
let destroyer = {
    size: 2,
    units: ['9', '9'],
    place: function place(){
        let locN = Math.floor(Math.random() * 10);
        let locLCord = Math.floor(Math.random() * 10)
        let horizontal = true;
        let rando = Math.floor(Math.random() * 10)
        let moverN = 0;
        let moverL = 0;

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
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != destroyer){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                    }
                }
            } else{
                let locL = coordinates[locLCord]
                locN = locN + moverN;
                let shipPosition = `${locL}-${locN}`;
                this.units[i] = shipPosition;
                console.log(this.units);
                for(x = 0; ships.length > x; x++){
                    //keeps ships from overlapping
                    if (ships[x].units.indexOf(shipPosition) != -1 && ships[x] != destroyer){
                        locN = Math.floor(Math.random() * 10);
                        locLCord = Math.floor(Math.random() * 10);
                        i = -1;
                        console.log(shipPosition);
                        console.log(ships[x].units.indexOf(shipPosition))
                        
                    }
                }
            };

        } 
    }
};
let ships = [carrier, battleship, submarine, cruiser, destroyer];
let coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let score = 0;
let hits = 0;
let misses = 0;
let turns = 1;
let pressed = false;

function scoring(){
    score = Math.round(200 + (hits * 128) - (turns * 19 * 1.2));
    return score;
}

window.onload = function setEnemyShips(){

    document.getElementById('startButton').className= 'innerUI2';
    document.getElementById('startButton').innerHTML= 'DANGER'

    if(!pressed){

    carrier.place();
    battleship.place();
    submarine.place();
    cruiser.place();
    destroyer.place();
    pressed = true;
    }
}

function attack(cord){
if(pressed){
    let atkCord = document.getElementById(cord).innerHTML;
    
    for(i = 0; i < ships.length; i++){

        let shipID = ships[i];
        ifHit = shipID.units.indexOf(atkCord);
        console.log(ifHit);
        console.log(atkCord);

        if (-1 < ifHit){
            document.getElementById(cord).className = 'hit';
            hits = hits + 1;
            turns = turns + 1;
            ships[i].units[ifHit] = 0;
            scoring();
            document.getElementById('turns').innerHTML = `Turns: ${turns}`;
            document.getElementById('hits').innerHTML = `Hits: ${hits}`;
            document.getElementById('score').innerHTML = `Score: ${score}`;
            console.log('fart')
            var audio = new Audio('hit.ogg');
            audio.pause();
            audio.play();
            if(score >= 1000 || hits == 17){
               alert('You win!')
               document.getElementById('startButton').innerHTML= 'VICTORY'
            }
            break
        
        }
    } if (-1 >= ifHit){
        document.getElementById(cord).className = 'miss';
        misses = misses + 1;
        turns = turns + 1;
        scoring();
        document.getElementById('turns').innerHTML = `Turns: ${turns}`
        document.getElementById('score').innerHTML = `Score: ${score}`;
        console.log('no fart')
        var audio = new Audio('miss.ogg');
        audio.pause();
        audio.play();
            if( score < 0){
               alert('Your base is lost to the enemy forces.');
               document.getElementById('startButton').innerHTML= 'DEFEAT'
            }
        }
    }
}