const btn1 = document.getElementById("btn1");

function madlib()
{
    const ad1 = document.getElementById("ad1").value.fontcolor("red").fontsize("20px");
    const ad2 = document.getElementById("ad2").value.fontcolor("red").fontsize("20px");;
    const ad3 = document.getElementById("ad3").value.fontcolor("red").fontsize("20px");;
    const no1 = document.getElementById("no1").value.fontcolor("red").fontsize("20px");;
    const no2 = document.getElementById("no2").value.fontcolor("red").fontsize("20px");;
    const no3 = document.getElementById("no3").value.fontcolor("red").fontsize("20px");;
    const pno1 = document.getElementById("pno1").value.fontcolor("red").fontsize("20px");;
    const pno2 = document.getElementById("pno2").value.fontcolor("red").fontsize("20px");;
    const pno3 = document.getElementById("pno3").value.fontcolor("red").fontsize("20px");;
    const pno4 = document.getElementById("pno4").value.fontcolor("red").fontsize("20px");;
    const game = document.getElementById("game").value.fontcolor("red").fontsize("20px");;
    const vIng1= document.getElementById("vIng1").value.fontcolor("red").fontsize("20px");;
    const vIng2 = document.getElementById("vIng2").value.fontcolor("red").fontsize("20px");;
    const vIng3 = document.getElementById("vIng3").value.fontcolor("red").fontsize("20px");;
    const vIng4 = document.getElementById("vIng4").value.fontcolor("red").fontsize("20px");;
    const plant = document.getElementById("plant").value.fontcolor("red").fontsize("20px");;
    const potb = document.getElementById("potb").value.fontcolor("red").fontsize("20px");;
    const plc = document.getElementById("plc").value.fontcolor("red").fontsize("20px");;
    const num = document.getElementById("num").value.fontcolor("red").fontsize("20px");;
    const out1 = document.getElementById("output1");
   

    out1.innerHTML = "A vacation is when you take a trip to some "+ ad1 +" place<br>"+  
    "with your "+ ad2 +" family. Usually you go to some place<br>"+
    "that is near a/an "+ no1 +" or up on a/an "+ no2 +".<br>"+
    "A good vacation place is one where you can ride "+ pno1 +"<br>"+
    "or play "+ game +" or go hunting for "+ pno2 +".<br>"+
    "I like to spend my time "+ vIng1 +" or "+ vIng2 +".<br>"+
    "When parents go on a vacation, then spend their time eating <br>"+
    "three "+ pno3 +" a day, and fathers play golf, and mothers<br>"+
    "sit around "+ vIng3 +" . Last summer, my little brother<br>"+
    "fell in a/an "+ no3 +" and got posion "+ plant +" all<br>"+
    "over his "+ potb +". My family is going to go to (the)<br>"+
    plc +", and I will practice "+ vIng4 + ". Parents<br>"+ 
    "need vacations more than kids because parents are always very <br>" +ad3 +
    " and because they have to work "+ num +"<br>"+
    "hours every day all year making enough "+ pno4 +" to pay<br>"+
    "for the vacation";
    

}

function hideShow(){
    madlib();
    const boxes = document.getElementById("textboxes");
    const results = document.getElementById("results");
    const btn2 = document.getElementById("btn2");
    boxes.style.display = "none";
    results.style.display = "block";
    btn2.style.display = "block";
}

btn1.addEventListener("click",hideShow);