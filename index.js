let homeScore = 0
let guestScore = 0

let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")
let leadingTeam = document.getElementById("leading-team")




        function addhome1() {
            homeScore = homeScore + 1
            homeDisplay.textContent = homeScore
            leader()
        }
        function addhome2() {
            homeScore = homeScore + 2
            homeDisplay.textContent = homeScore
            leader()

        }
        function addhome3() {
            homeScore = homeScore + 3
            homeDisplay.textContent = homeScore
            leader()

        }
       





    function addguest1() {
        guestScore = guestScore + 1
        guestDisplay.textContent = guestScore
        leader()

    }
    function addguest2() {
        guestScore = guestScore + 2
        guestDisplay.textContent = guestScore
        leader()

    }
    function addguest3() {
        guestScore = guestScore + 3
        guestDisplay.textContent = guestScore
        leader()

    }
    

    function newgame() {
        homeScore = 0
        guestScore = 0
        homeDisplay.textContent = 0
        guestDisplay.textContent = 0
        leadingTeam.textContent = "Leader:"
    }

    function leader() {
        if(guestScore > homeScore) {
            leadingTeam.textContent = "Leader: Guest"
        }
        else if(guestScore < homeScore) {
            leadingTeam.textContent = "Leader: Home"
        }
        else {
            leadingTeam.textContent = "Tie"

        }
    }
