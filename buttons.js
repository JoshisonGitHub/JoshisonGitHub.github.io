var z = false;
function turn_off_background(){
    
    
    if(!z){
        z = true
        document.getElementById("mainbody").style.backgroundImage = "none";
        console.log("worked")
    }
    else{
        z = false
        document.getElementById("mainbody").style.backgroundImage = "url('purplewave.gif')";
    }
}


var x = document.getElementById("mainpage");
function change(){
    //code sourced from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function archive() {
    x.style.display = "none"
    x = document.getElementById("Archive");
    change();
}

function base_page() {
    x.style.display = "none"
    x = document.getElementById("mainpage");
    change();
}

function votinglist() {
    x.style.display = "none"
    x = document.getElementById("votinglist");
    change();
}

function vote_for_show() {
    x.style.display = "none"
    x = document.getElementById("voteforshow");
    change();
}

const btn = document.getElementById('bgbtn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});