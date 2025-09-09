var no = document.querySelectorAll("button").length;

//Function to play sound after a specific button is pressed.
function playsound(sound) {
        var sonud = sound.toLowerCase();
        var audio = new Audio("Sound/" + sonud + ".mp3");
        audio.play();
}

//Function to and animation when the button is pressed.
function animation(button) {
        var button = button.toLowerCase();
        var activebt = document.querySelector("#n"+ button );

        activebt.classList.add("pressed");

        setTimeout(function() {
                activebt.classList.remove("pressed")
        }, 100);
}

//Main program starts hear
//Loop to check which button is clicked.
for (var i = 0; i < no; i++) {
        document.querySelectorAll("button")[i].addEventListener("click",function() {
                var button = this.innerHTML;
                button = button[6];

                //calling play sound function.
                playsound(button);

                //calling animation function.
                animation(button);
        })
}

//To check which key is pressed
document.addEventListener("keypress", function(event){
        var key = event.key;

        //calling play sound function.
        playsound(key);

        //callimg animation function.
        animation(key);
})
