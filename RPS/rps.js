function game(yourChoice){
  console.log(yourChoice);
  var humanChoice,botChoice,final,message;
  humanChoice=yourChoice.id;
  console.log(humanChoice);
  botChoice=choice(random());
  console.log(botChoice);
  console.log(winner(botChoice,humanChoice));
  final=winner(botChoice,humanChoice);
  console.log(final);
  console.log(finalMessage(final));
  message=finalMessage(final);
  frontend(humanChoice,botChoice,message);
}
function random(){
  return Math.floor(Math.random()*3);
}
function choice(number){
  return ["rock","paper","scissors"][number];
}
function winner(computerChoice,yourChoice){
  var database={
    "rock":{"scissors":1,"rock":0.5,"paper":0},
    "paper":{"scissors":0,"rock":1,"paper":0.5},
    "scissors":{"scissors":0.5,"rock":0,"paper":1},
  };
  var computerScore=database[computerChoice][yourChoice];
  var yourScore=database[yourChoice][computerChoice];
  return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
  if(yourScore==0){
    return {"message":"You lost","color":"red"};
  }
  else if(yourScore==0.5) {
    return{"message":"Draw","color":"yellow"};
  }
  else if(yourScore==1){
    return{"message":"You Win","color":"green"};
  }
}
function frontend(humanImageChoice,botImageChoice,finalImageMessage){
  var imagesDatabase={
    "rock": document.getElementById("rock").src,
    "paper": document.getElementById("paper").src,
    "scissors": document.getElementById("scissors").src,
  }
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    var image_1=document.createElement('img');
    var image_2=document.createElement('img');
    image_1=imagesDatabase[humanImageChoice];
    image_2=imagesDatabase[botImageChoice];
   /*  humanDiv.innerHTML="<img src' "+imagesDatabase[humanImageChoice]+"' height=150,width=150 style='box-shadow: 0px 0px 19px 8px #673AB7;'>"
    messageDiv.innerHTML="<h1 style='color:"+finalImageMessage['color']+";font-size:60px; padding:30px;'>"+finalImageMessage['message']+"</h1>"
    botDiv.innerHTML="<img src' "+imagesDatabase[botImageChoice]+" 'height=150,width=150 style='box-shadow: 0px 0px 19px 8px rgb(224, 80, 44);'>" */
    humanDiv.appendChild(image_1);
    messageDiv.innerHTML="<h1 style='color:"+finalImageMessage['color']+";font-size:60px; padding:30px;'>"+finalImageMessage['message']+"</h1>"
    botDiv.appendChild(image_2);  
    document.getElementById("rps").appendChild(humanDiv);  
    document.getElementById("rps").appendChild(messageDiv);  
    document.getElementById("rps").appendChild(botDiv);  
}