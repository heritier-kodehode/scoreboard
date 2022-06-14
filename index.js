
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function incrementHome(x){
    homeScore += x;
    homeScoreEl.textContent = homeScore;
    if(homeScore > guestScore){
        homeScoreEl.classList.add("inLead");
        guestScoreEl.classList.remove("inLead");
    }else if(homeScore === guestScore){
        homeScoreEl.classList.remove("inLead");
        guestScoreEl.classList.remove("inLead");
    }
}

function incrementGuest(x){
    guestScore += x;
    guestScoreEl.textContent = guestScore;
    if(guestScore > homeScore){
        guestScoreEl.classList.add("inLead");
        homeScoreEl.classList.remove("inLead");
    }else if(guestScore === homeScore){
        homeScoreEl.classList.remove("inLead");
        guestScoreEl.classList.remove("inLead");
    }
}

function resetGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    homeScoreEl.classList.remove("inLead");
    guestScoreEl.classList.remove("inLead");
}