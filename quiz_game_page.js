player1_name=localStorage.getItem('player1_name');
player2_name=localStorage.getItem('player2_name');
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_ques").innerHTML="question turn:"+player1_name;
document.getElementById("player_ans").innerHTML="answer turn:"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    answer=parseInt(number1)*parseInt(number2);
    ques="<h4>"+number1+"x"+number2+"</h4>";
    box="<br><input type='number' id='inputAnswer'>";
 button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
 row=ques+box+button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("number1").value="";
   document.getElementById("number2").value="";
}
questionTurn="player1";
answerTurn="player2";
function check(){
 get_ans=document.getElementById("inputAnswer").value;
 if(get_ans==answer){
     if(answerTurn=="player1"){
         player1score=player1score+1;
         document.getElementById("player1_score").innerHTML=player1score;
     }
     else{
        player2score=player2score+1;
        document.getElementById("player2_score").innerHTML=player2score;
     }
 }
 if(questionTurn=="player1"){
     questionTurn="player2";
     document.getElementById("player_ques").innerHTML="question turn:"+player2_name;
    }
    else{
        questionTurn="player1";
     document.getElementById("player_ques").innerHTML="question turn:"+player1_name;
    }
    if(answerTurn=="player1"){
        answerTurn="player2";
        document.getElementById("player_ans").innerHTML="answer turn:"+player2_name;
       }
       else{
           answerTurn="player1";
        document.getElementById("player_ans").innerHTML="answer turn:"+player1_name;
       }
       document.getElementById("output").innerHTML="";
}