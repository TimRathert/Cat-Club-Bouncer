let gameActive;
let dailyCount;
let notifyIsOpen;
let revDiv = document.querySelector('.reviewDiv');
let scoreUpdate = document.querySelector('.notify-text');
let gameTimer;
let time;

function startUp(){
    daysFailed = 0;
    noteBoxOn();
    gameActive = false
    buttonsToggle();
    scoreUpdate.style.margin = `1em`;
    scoreUpdate.innerHTML = 'Ok, kid. Thanks for accepting the job as a bouncer for my club. I\'ll let you know who to let in each day. Check that list and make sure the IDs aren\'t fake (check the watermark).<br><br> Good luck<br>\- Boss';
    revDiv.innerHTML = ``;
    nextBtn.innerHTML=`I'll do my best`;
    nextBtn.removeEventListener('click', startUp);
    nextBtn.removeEventListener('click',startDay);
    nextBtn.addEventListener('click', noteBoxOff);
    nextBtn.addEventListener('click',reset)
    function reset(){
        nextBtn.removeEventListener('click',noteBoxOff);
        nextBtn.removeEventListener('click', reset)
        nextBtn.addEventListener('click', startDay)
    };
    let id = document.querySelector('.id-photo').src = `./resources/titleID.gif`;
}
    
window.onload = startUp;
    
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
           `./resources/id0.jpg`,  
           `./resources/id1.jpg`,  
           `./resources/id2.jpg`,  
           `./resources/id3.jpg`,  
           `./resources/id4.jpg`,  
           `./resources/id5.jpg`,  
           `./resources/id6.jpg`,  
            ] 
        idPhoto.src = picArr[picNum];
    }
    catNamer(name){
        let nameList = ['Elmer', 'Cornelius','Sprout','Bok Choy', 'Luna', 'Milo', 'Oliver', 'Leo', 'Loki', 'Bella', 'Charlie', 'Willow', 'Lucy', 'Simba', 'Beans'];
        this.nameList = nameList;

        if (name.toLowerCase() === 'random'){
            
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
        if (!isLegit){
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
        return cat = new CatID(6, 'random', (Math.floor(Math.random()*14)+1), 'White', 'Blue', true)},
];

let allow = document.querySelector('.allow');
let deny = document.querySelector('.deny');
let start = document.querySelector('.start');
let dailyCorrect;
let daysWorked;
let kidName;
start.addEventListener('click', startGame)

function startGame(e){
    daysWorked = 0;
    startDay();
    start.style.opacity = 0;
    start.removeEventListener('click', startGame);
    start.addEventListener('click', startDay);
    buttonsToggle();
    }

function startDay(){
    gameActive = true;
    buttonsToggle();
    noteBoxOff();
    dailyCount = 0;
    dailyCorrect = 0;
    if(daysWorked >= 0){
        let daysWorkedText = document.querySelector('.days-worked');
        daysWorkedText.innerHTML = `Days Worked: ${daysWorked}`
        
    }
    if (gameActive === true){
        todaysCat = cats[Math.floor(Math.random()*cats.length)]();
    }
    else {
        todaysCat = cats[Math.floor(Math.random()*cats.length)]();
    }
    criteriaGen(daysWorked);
    time = setTimer();
    clearInterval(gameTimer);
    gameTimer = setInterval(function(){
        if(time <= 0){
                setTimeout(endOfDayCheck(),1000);
            }
        else{
            time--;
            document.querySelector('.timer').innerHTML = `Time until shift ends: ${time}`;
        }},1000); 
    
}

let todaysAge;
let fakeCount;
let ranLet;
function setTimer(){
    if (daysWorked<3){return 40}
    else if (daysWorked<5){return 30}
    else if (daysWorked<7){return 20}
    else if (daysWorked<9){return 15}
    else if (daysWorked<11){return 10}
    else if (daysWorked<13){return 8}
    else{return 5};
} 

function criteriaGen(daysWorked){
    let textHolder;
    
    Math.floor(Math.random());
    if ((daysWorked+2)%5 === 0){todaysAge = Math.floor(Math.random()*4+10);
        textHolder = `Senior night! No one under the age of ${todaysAge}.`;}
    else if ((daysWorked+2)%9 === 0){
        todaysAge = Math.floor(Math.random()*4+2);
        shortNameList = ['Elmer', 'Cornelius','Sprout'];
        kidName =shortNameList[Math.floor(Math.random()*shortNameList.length)];
        textHolder = `Same old thing today. No one under ${todaysAge} unless it's my sibling's kid, ${kidName}. I'm watching ${kidName} after school. Might be more than one?`;
    }
    else{
            todaysAge = Math.floor(Math.random()*4+4);
            textHolder = `Keep the kids out. No one under the age of ${todaysAge}.`;
            let letArr = ['s','c','l'];
            ranLet = letArr[Math.floor(Math.random()*3)];
            if(daysWorked>1)
                {textHolder += ` Oh and no one with a name that starts with '${ranLet.toUpperCase()}'.`}

    }
    if(!todaysCat.isLegit){fakeCount += 1}
    
           
    document.querySelector('.criteria-text').innerHTML=textHolder;
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
    function criteriaCheck(){
        if ((daysWorked+2)%5 === 0){
            criteriaArr = [];
            criteriaArr.push(whichBtn.includes('allow'));
            criteriaArr.push(todaysCat.age>todaysAge);
            criteriaArr.push(todaysCat.isLegit);
        }
        else if ((daysWorked+2)%9 === 0){
            criteriaArr = [];
            if (todaysCat.name === kidName){
                criteriaArr.push(whichBtn.includes('allow'));
                criteriaArr.push(todaysCat.name === kidName);    
            }
            else{
                criteriaArr.push(whichBtn.includes('allow'));
                criteriaArr.push(todaysCat.age>todaysAge);
                criteriaArr.push(todaysCat.isLegit)
            }   
        }
        else{
            criteriaArr = [];
            criteriaArr.push(whichBtn.includes('allow'));
            criteriaArr.push(todaysCat.age >= todaysAge);
            criteriaArr.push(todaysCat.isLegit);
            if (daysWorked>1){
                criteriaArr.push(todaysCat.name[0].toLowerCase() !== ranLet);
            }       
        }    
        if(criteriaArr[0] === true && !criteriaArr.includes(false, 1)){dailyCorrect += 1}
            else if(criteriaArr[0] === false && criteriaArr.includes(false, 1)){dailyCorrect += 1}  
        }
    criteriaCheck();
    dailyCount += 1;
    gameActive = false; 
    buttonsToggle();
    setTimeout(function(){
        response.innerHTML="";
        if(daysFailed<2){
            gameActive = true;
            todaysCat = cats[Math.floor(Math.random()*cats.length)]();
            buttonsToggle();
        }    
    }, 1500);
    
    if (dailyCount === 5){setTimeout(endOfDayCheck(),1000)}
}

let daysFailed = 0;

function endOfDayCheck(){
    gameActive = false; 
    buttonsToggle();
    setTimeout(function(){
        response.innerHTML="";
        buttonsToggle();   
    }, 1500);
    daysWorked += 1;
    time = 0;
    clearInterval(gameTimer);
    noteBoxOn();
    scoreUpdate.innerHTML = `You got ${dailyCorrect} out of 5`
    let score;
    score = dailyCorrect/5
    nextBtn.innerHTML=`Next Day`;
        if (score<=0.6){
            daysFailed += 1;
        if (daysFailed < 2){
            revDiv.innerHTML= `Disappointing Performance. Another day like that and you're fired!`; 
        }
        else if (daysFailed >= 2){gameOver()}
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
        gameActive = false;
        revDiv.innerHTML= gameOverText[Math.floor(Math.random()*gameOverText.length)];
        nextBtn.innerHTML = 'Go Find A New Job';
        nextBtn.removeEventListener('click',startDay);
        nextBtn.addEventListener('click',startUp);
        start.style.opacity = 1;
        start.addEventListener('click', startGame);
        buttonsToggle();
        response.innerHTML = '';    
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


let arr = [];
window.addEventListener('keydown', e => {
    if(arr.length === 0 && e.keyCode === 38){
        arr.push(1);
        return;
    }
    if(arr.length === 1 && e.keyCode === 38){
        arr.push(1);
        return;
    }
    if(arr.length === 2 && e.keyCode === 40){
        arr.push(1);
        return;
    }
    if(arr.length === 3 && e.keyCode === 40){
        arr.push(1);
        return;
    }
    if(arr.length === 4 && e.keyCode === 37){
        arr.push(1);
        return;
    }
    if(arr.length === 5 && e.keyCode === 39){
        arr.push(1);
        return;
    }
    if(arr.length === 6 && e.keyCode === 37){
        arr.push(1);
        return;
    }
    if(arr.length === 7 && e.keyCode === 39){
        arr.push(1);
        return;
    }
    if(arr.length === 8 && e.keyCode === 66){
        arr.push(1);
        return;
    }
    if(arr.length === 9 && e.keyCode === 65){
        arr.push(1);
        return;
    }
    if(arr.length === 10 && e.keyCode === 66){
        arr.push(1);
        return;
    }
    if(arr.length === 11 && e.keyCode === 65){
        arr.push(1);
        return;
    }
    if(arr.length === 12 && e.keyCode === 13){
        arr.push(1);
        document.body.style.backgroundImage = 'url(./resources/cat-explosion.gif)';
        document.body.style.backgroundSize = '25%';
        return;
    }    
    else{arr = [];}
})

