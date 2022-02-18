player1_name=localStorage.getItem('player1_name');
player2_name=localStorage.getItem('player2_name');
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