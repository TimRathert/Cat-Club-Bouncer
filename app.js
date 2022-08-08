let gameActive = false;
let dailyCount;
class CatID {
    constructor(picNum, name, age, fur, eyeColor, isLegit, isCat = true){
        this.getPic(picNum);
        this.catNamer(name);
        this.age = age
        this.fur = fur;
        this.eyeColor = eyeColor;
        this.isLegit;
        this.realOrFake(isLegit);
        this.isCat = isCat;
        this.name;
        this.updateID();
        
        }
      
    getPic(picNum){
        let idPhoto = document.querySelector('.id-photo');
        if (picNum === 'ran'){
        picNum = Math.floor(Math.random()*6)
        }
        let picArr = [
           `/id-pics/id0.jpg`,  
           `/id-pics/id1.jpg`,  
           `/id-pics/id2.jpg`,  
           `/id-pics/id3.jpg`,  
           `/id-pics/id4.jpg`,  
           `/id-pics/id5.jpg`,  
           `/id-pics/id6.jpg`,  
            ] 
        idPhoto.src = picArr[picNum];
    }
    catNamer(name){
        if (name.toLowerCase() === 'random'){
            let nameList = ['Elmer', 'Cornelius','Sprout','Bok Choy', 'Luna', 'Milo', 'Oliver', 'Leo', 'Loki', 'Bella', 'Charlie', 'Willow', 'Lucy', 'Simba', 'Beans'];
            let  ran = Math.floor(Math.random()*nameList.length)
                this.name = nameList[ran]}
        else {this.name = name}
            ;
    }
    updateID(){
    let idName = document.querySelector('.id-name');
    idName.innerHTML = this.name;       
    let idAge = document.querySelector('.idAge');
    idAge.innerHTML = this.age;       
    let idFur = document.querySelector('.idFur');
    idFur.innerHTML = this.fur;       
    let idEyeColor = document.querySelector('.idEyeColor');
    idEyeColor.innerHTML = this.eyeColor;       
          
    }
    realOrFake(isLegit){
        if (isLegit !== true){
            if (Math.floor(Math.random()*100)<50){
                document.getElementById('watermark').style.opacity = 0;
                this.isLegit = false;
            }
            else {document.getElementById('watermark').style.opacity = 0.1;
            this.isLegit = true;}
        }
        else{document.getElementById('watermark').style.opacity = 0.1;
            this.isLegit = true;}
       
    }
}

let cats =
    [
        function cat0(){
        return cat = new CatID(0, 'random', (Math.floor(Math.random()*14)+1), 'Grey', 'Green', true)},
        function cat1(){
        return cat = new CatID(1, 'random', (Math.floor(Math.random()*14)+1), 'Orange', 'Green', true)},
        function cat2(){
        return cat = new CatID(2, 'random', (Math.floor(Math.random()*14)+1), 'Orange', 'Green', true)},
        function cat3(){
        return cat = new CatID(3, 'random', (Math.floor(Math.random()*14)+1), 'Grey', 'Green')},
        function cat4(){
        return cat = new CatID(4, 'random', (Math.floor(Math.random()*14)+1), 'Black', 'Green')},
        function cat5(){
        return cat = new CatID(5, 'random', (Math.floor(Math.random()*14)+1), 'Brown', 'Green')},
        function cat6(){
        return cat = new CatID(6, 'random', (Math.floor(Math.random()*14)+1), 'White', 'Green', true)},
];

//pausing this to make buttons
function generateCriteria(day){
    if (day !== undefined){
    }
    else{
        //generate some criteria
   }
}



let allow = document.querySelector('.allow');
let deny = document.querySelector('.deny');
let start = document.querySelector('.start');
let dailyCorrect;
let daysWorked;
start.addEventListener('click', startGame)

function startGame(e){
    startDay();
    gameActive = true;
    start.style.opacity = 0;
    start.removeEventListener('click', startGame);
    buttonsOn();
    daysWorked = 0;
   }

function startDay(){
    //criteria text insert
    document.querySelector('.criteria-text').innerHTML="Keep all the kids out today. No one under the age of 7.";
    todaysCat = cats[Math.floor(Math.random()*cats.length)]();
    dailyCount = 0;
    dailyCorrect = 0;
}
function buttonsOn(){
    if (gameActive === true){
        allow.addEventListener('click', idCheck);
        deny.addEventListener('click', idCheck);
    }
}
function idCheck(e){
    response = document.querySelector('.response');
    let classes =e.target.classList.toString();
    let currentCheck;
    if(classes.includes('allow')){
        currentCheck = classes.includes('allow')
        responsePos= ["Come on in, pal!", "Right this way, friend","Hurry on inside, chum"];
        response.innerHTML = responsePos[Math.floor(Math.random()*responsePos.length)];     
    }
    if(classes.includes('deny')){
        responseNeg= ["No way!", "Scram, ya chump!","Who do you think you're fooling?", "Not today, friend."];
        response.innerHTML = responseNeg[Math.floor(Math.random()*responseNeg.length)];              
    }
    //criteria math insert
    
    if (todaysCat.age >= 7 && classes.includes('allow')){dailyCorrect += 1};
    if (todaysCat.age < 7 && classes.includes('deny')){dailyCorrect += 1};

    dailyCount += 1;
    
    console.log(e);
    setTimeout(function(){
        response.innerHTML="";        
        todaysCat = cats[Math.floor(Math.random()*cats.length)]()    
    }, 1500);
    
    if (dailyCount === 5){setTimeout(endOfDayCheck(),1000)}
}

let daysFailed = 0;
function endOfDayCheck(){
    //add prompt or window or something for this score
    console.log(`You got ${dailyCorrect} out of 5`);
    if ((dailyCorrect/5)<=.6){
        daysFailed += 1;
        //add gameOver function for what to do at the end
        if (daysFailed >= 2){gameOver()}
       // else {//FUNCTION TO START NEW DAY ON DELAY}
        
    }
    else if((dailyCorrect/5)>.6){
        daysWorked += 1;
      //  FUNCTION TO START NEW DAY ON DELAY
    }
}


 //generates a random cat from the cats array

/* let todaysCriteria = PLACEHOLDER */ 
//cats[1]()
//function to check answers


/*at start of day
    make a cat ID (done todaysCat)
    make some rules
    move day counter forward (save this)
*/
