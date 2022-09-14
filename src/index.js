

let numStr = "0";
let numArray = new Array();
let totalEl = document.getElementById("textbox");

totalEl.innerHTML = numStr;


function updateArray(number){
  if(number=="*"||number=="/"||number=="+"||number=="-"){
    numArray.push(number);
  }
  else if(numArray[numArray.length-1]=="*"
  ||numArray[numArray.length-1]=="/"
  ||numArray[numArray.length-1]=="+"
  ||numArray[numArray.length-1]=="-"){
    numArray.push(number);
  }
  else if (numArray.length <= 0){
    numArray.push(number);
  }
  else{
    numArray[numArray.length-1] += number;
  }
  console.log(numArray)
  
  
}

function updateTextbox(button){
  let number = button.textContent;
  updateArray(number);
  updateString();
  totalEl.innerHTML = numStr;

}


function clearTotal(){
  numArray = new Array();
  numStr = "0";
  totalEl.innerHTML = numStr;

}

function backspace(){
  numArray = numArray.slice(0,-1);
  updateString();
  totalEl.textContent = numStr;
}

function updateString(){
  numStr = "";
  for(let i=0; i < numArray.length; i++){

    numStr += numArray[i];

  }

  if(numStr==""){
    numStr = "0";
  }
}

function calculateTotal(){
  
  for(let i=0; i < numArray.length; i++){

    let sum = 0;
    if(numArray[i] == "*"){
      let firstNum = parseFloat(numArray[i-1]);
      console.log(firstNum);
      let secondNum = parseFloat(numArray[i+1]);

      sum = firstNum * secondNum;
      result = numArray.splice(i-1,3,sum)
      console.log(numArray);

      i = i-1;

    }

  }

  for(let i=0; i < numArray.length; i++){

    let sum = 0;
    if(numArray[i] == "/"){
      let firstNum = parseFloat(numArray[i-1]);
      let secondNum = parseFloat(numArray[i+1]);

      sum = firstNum / secondNum;
      result = numArray.splice(i-1,3,sum)
      console.log(numArray);

      i = i-1;

    }

  }

  for(let i=0; i < numArray.length; i++){

    let sum = 0;
    if(numArray[i] == "+"){
      let firstNum = parseFloat(numArray[i-1]);
      let secondNum = parseFloat(numArray[i+1]);

      sum = firstNum + secondNum;
      result = numArray.splice(i-1,3,sum)
      console.log(numArray);

      i = i-1;

    }

  }

  for(let i=0; i < numArray.length; i++){

    let sum = 0;
    if(numArray[i] == "-"){
      let firstNum = parseFloat(numArray[i-1]);
      let secondNum = parseFloat(numArray[i+1]);

      sum = firstNum - secondNum;
      result = numArray.splice(i-1,3,sum)
      console.log(numArray);

      i = i-1;

    }

  }

  updateString();
  totalEl.innerHTML = numStr;
}





/*function updateTotal(button){
  number = button.textContent;
    if(total != "0")
    {
      
      if((total.charAt(total.length-1) == "/" || total.charAt(total.length-1) == "*" || total.charAt(total.length-1) == "+" || total.charAt(total.length-1) == "-") 
      && (number == "/" || number == "*" || number == "+" || number == "-")){
        total = total.substring(0,total.length-1) + number;
        totalEl.innerHTML = total;
      }
      else{
        total += number;
        totalEl.innerHTML = total;
      }
    
  }
  else{
    if((number == "/" || number == "*" || number == "+" || number == "-") && (total == "0" || total == null)){
      console.log("Cannot put operator in");
    }
    
    else{
      number = button.textContent;
      total = number;
      totalEl.innerHTML = total;
    }
    
  
  }

  

  

 
}

function clearTotal(){

  total = 0;
  totalEl.innerHTML = total;
}

function backspace(){
  if(totalEl.textContent != "" && totalEl.textContent != "0"){
    total = total.substring(0,total.length-1)
    totalEl.innerHTML = total;

  }
  

}


function calculateTotal(){

  for (let i=0; i < total.length; i++){

    let num = total[i];

    if(num == "*"){
      let firstnum = parseInt(total[i-1]);
      let secondnum = parseInt(total[i+1]);

      let sum = firstnum * secondnum;

      total = total.substring(0,i-1) + sum + total.substring(i+2);
      console.log(total);
    }

    
  }

  for (let i=0; i < total.length; i++){

    let num = total[i];

    if(num == "/"){
      let firstnum = parseInt(total[i-1]);
      let secondnum = parseInt(total[i+1]);

      let sum = firstnum / secondnum;

      total = total.substring(0,i-1) + sum + total.substring(i+2);
      console.log(total);
    }

    
  }

  for (let i=0; i < total.length; i++){

    let num = total[i];

    if(num == "+"){
      let firstnum = parseInt(total[i-1]);
      let secondnum = parseInt(total[i+1]);

      let sum = firstnum + secondnum;

      total = total.substring(0,i-1) + sum + total.substring(i+2);
      console.log(total);
    }

    
  }

  for (let i=0; i < total.length; i++){

    let num = total[i];

    if(num == "-"){
      let firstnum = parseInt(total[i-1]);
      let secondnum = parseInt(total[i+1]);

      let sum = firstnum - secondnum;

      total = total.substring(0,i-1) + sum + total.substring(i+2);
      console.log(total);
    }

    
  }

  totalEl.innerHTML = total;
  
}*/