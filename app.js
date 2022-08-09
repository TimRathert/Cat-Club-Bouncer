let gameActive = false;
let dailyCount;
let notifyIsOpen;
let revDiv = document.querySelector('.reviewDiv');
let scoreUpdate = document.querySelector('.notify-text');
window.onload = startup => {
    noteBoxOn();
    scoreUpdate.style.margin = `1em`;
    scoreUpdate.innerHTML = 'Ok, kid. Thanks for accepting the job as a bouncer for my club. I\'ll let you know who to let in each day. Check that list and make sure the IDs aren\'t fake (check the watermark).<br><br> Good luck<br>\- Boss';
    revDiv.innerHTML = ``;
    nextBtn.innerHTML=`I'll do my best`;
    nextBtn.removeEventListener('click',startDay);
    nextBtn.addEventListener('click', noteBoxOff);
    nextBtn.addEventListener('click',reset)
    function reset(){
        nextBtn.removeEventListener('click',noteBoxOff);
        nextBtn.removeEventListener('click', reset)
        nextBtn.addEventListener('click', startDay)}
        
    

 }
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
function generateCriteria(){
    let day = daysWorked;
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
    daysWorked = 0;
    startDay();
    gameActive = true;
    start.style.opacity = 0;
    start.removeEventListener('click', startGame);
    buttonsToggle();
    }

function startDay(){
    //criteria text insert
    noteBoxOff();
    document.querySelector('.criteria-text').innerHTML="Keep all the kids out today. No one under the age of 7.";
    dailyCount = 0;
    dailyCorrect = 0;
    if(daysWorked >= 0){
        let daysWorkedText = document.querySelector('.counters');
       
        daysWorkedText.innerHTML = `Days Worked: ${daysWorked}.`
        
    }
    if (gameActive === true){
        todaysCat = cats[Math.floor(Math.random()*cats.length)]();
    }
    else {
        todaysCat = cats[Math.floor(Math.random()*cats.length)]();
    }
}
function buttonsToggle(){
    if (gameActive === true){
        allow.addEventListener('click', idCheck);
        deny.addEventListener('click', idCheck);
    }
    else if (gameActive === false){
        allow.removeEventListener('click', idCheck);
        deny.removeEventListener('click', idCheck);
    }
}
function idCheck(e){
    response = document.querySelector('.response');
    let whichBtn =e.target.classList.toString();
    let currentCheck;
    if(whichBtn.includes('allow')){
        currentCheck = whichBtn.includes('allow')
        responsePos= ["Come on in, pal!", "Right this way, friend","Hurry on inside, chum"];
        response.innerHTML = responsePos[Math.floor(Math.random()*responsePos.length)];     
    }
    if(whichBtn.includes('deny')){
        responseNeg= ["No way!", "Scram, ya chump!","Who do you think you're fooling?", "Not today, friend."];
        response.innerHTML = responseNeg[Math.floor(Math.random()*responseNeg.length)];              
    }
    //criteria math insert
    
    if (todaysCat.age >= 7 && todaysCat.isLegit === true && whichBtn.includes('allow')){dailyCorrect += 1};
    if (todaysCat.age < 7 || todaysCat.isLegit !==true && whichBtn.includes('deny')){dailyCorrect += 1};

    dailyCount += 1;
    //deactivate buttons until timeout
    gameActive = false; 
    buttonsToggle();
    //
    //console.log(e);
    setTimeout(function(){
        response.innerHTML="";
        gameActive = true;
        buttonsToggle();
        todaysCat = cats[Math.floor(Math.random()*cats.length)]()    
    }, 1500);
    
    if (dailyCount === 5){setTimeout(endOfDayCheck(),1000)}
}

let daysFailed = 0;

function endOfDayCheck(){
    daysWorked += 1;
    noteBoxOn();
    scoreUpdate.innerHTML = `You got ${dailyCorrect} out of 5`
    let score = dailyCorrect/5
    nextBtn.innerHTML=`Next Day`;
        if (score<=0.6){
            daysFailed += 1;
        if (daysFailed < 2){
            revDiv.innerHTML= `Disappointing Performance. Another day like that and you're fired!`; 
        }
        //add gameOver function for what to do at the end
        else if (daysFailed >= 2){gameOver()}
       // else {//FUNCTION TO START NEW GAME ON DELAY}     
    }
    else if(score>.6){ 
        let goodJobText = [
            `I knew I could count on you! Great work!`,
            `Thank you for keeping this place running smooth!`,
            `Fantastic work today`,
            `I couldn't do it without you. Great job!`,
            `You're just the best :)`,
            `I don't know how I did this without an employee like you!`,
            ];
        revDiv.innerHTML = goodJobText[Math.floor(Math.random()*goodJobText.length)]
        }
    function gameOver(){
        let gameOverText = [
            `Are you even paying attention? You're fired!`,
            `I'm not mad, just disappointed. You're fired.`,
            `Can you read? YOU'RE FIRED!`,
            `Your work is repugnant. You're fired.`,
            ];
        revDiv.innerHTML= gameOverText[Math.floor(Math.random()*gameOverText.length)];
        nextBtn.innerHTML = 'Go Find A New Job';
        nextBtn.removeEventListener('click',startDay)
        nextBtn.addEventListener('click', startGame)

    }
}

let nextBtn = document.querySelector('.next') 
nextBtn.addEventListener('click',startDay)

function noteBoxOff(){
    let noteBox = document.querySelector('.notify-box');
        noteBox.style.zIndex = 1;
        noteBox.style.opacity = 0;
        notifyIsOpen = false;
    }
function noteBoxOn(){
    let noteBox = document.querySelector('.notify-box');
        noteBox.style.zIndex = 4;
        noteBox.style.opacity = 1;
        notifyIsOpen = true;
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
