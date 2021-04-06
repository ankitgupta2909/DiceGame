function myfun(){
    // alert("Hey");
    var i1=1+Math.floor(Math.random()*6);
    var i2=1+Math.floor(Math.random()*6);
    var img1src="images/dice"+i1+".png";
    var img2src="images/dice"+i2+".png";
    document.querySelectorAll("img")[0].src=img1src;
    document.querySelectorAll("img")[1].src=img2src;
    if(i1>i2){
        document.querySelector("h1").textContent="🚩 Player 1 wins";
        document.querySelector("h1").style.fontSize="6rem";
    }
    else if(i1<i2){
        document.querySelector("h1").textContent="Player 2 wins 🚩";
        document.querySelector("h1").style.fontSize="6rem";
    }
    else{
        document.querySelector("h1").textContent="It's a draw";
        document.querySelector("h1").style.fontSize="6rem";
    }
}