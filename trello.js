  const hello = {
    'Tester Board': {
      'To Do': ['Laundry', 'Buy Apples', 'Pay Phone Bill'],
      'Doing': ['Laundry', 'Studying Javascript', 'Studying HTML', 'Studying Ruby'],
      'Done': ['Laundry']
    },
    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};


function listbBoards() {
 listnum = 1;

 for(i=0; i<Object.keys(hello).length ; i++){
   console.log(`
   ---------------------
   ${listnum}- ${Object.keys(hello)[listnum-1]}`)
  listnum++
 }
 console.log(`
   ---------------------`)
}

function createBoard(boardName) {
  let dup = false;
  for(i=0;i<Object.keys(hello).length;i++){
   if(boardName===Object.keys(hello)[i]) {
     console.log("Board already exists")
     dup = true;
   }
 }
  if(dup === false) {
    hello[boardName] = "empty"
  }
}

function removeBoard(boardName){

  if(hello.hasOwnProperty(boardName)){
  delete hello[boardName]

  } else {
  console.log("Board doesn't exit")
  }
}

function displayBoard(boardName){
  if(hello.hasOwnProperty(boardName)){
    for(let i in hello[boardName]){
    console.log("-----------");
      console.log(i)
    console.log("-----------");
      for(let k in hello[boardName][i])
      console.log(hello[boardName][i][k])
    }
  } else {
    console.log("Board doesn't exist")
  }
}

function createList(boardName,listName){
  if(hello.hasOwnProperty(boardName)) {
    if(!hello[boardName].hasOwnProperty(listName)){
      hello[boardName][listName] = [];
  }else {
    console.log("List name already exists")
  }
}else{
  console.log("Board doesn't exist")
}
}

function createCard(boardName,listName,cardName){
  if(hello.hasOwnProperty(boardName)){
    if(hello[boardName].hasOwnProperty(listName)){
      hello[boardName][listName].push(cardName)
    }else {
      console.log("List name doesn't exist")
    }
  }else{
    console.log("Board doesn't exist")
  }
}


function removeList(boardName, listName){
  if(hello.hasOwnProperty(boardName)){
    if(hello[boardName].hasOwnProperty(listName)){
      delete hello[boardName][listName]
    }else {
      console.log("List name doesn't exits")
    }
  } else {
  console.log("Board doesn't exit")
  }
}

function removeCard(boardName, listName, cardName){
  if(hello.hasOwnProperty(boardName)){
    if(hello[boardName].hasOwnProperty(listName)){
         let index=hello[boardName][listName].indexOf(cardName);
         if (index !== -1) hello[boardName][listName].splice(index, 1);//
    }else {
      console.log("List name doesn't exits")
  }
  }else {
  console.log("Board doesn't exit")
}
}

function moveCard(boardName,fromList,toList,fromCardIndex,toCardIndex) {
  if(hello.hasOwnProperty(boardName)){
    if(hello[boardName].hasOwnProperty(fromList)){
       let temp = hello[boardName][fromList][fromCardIndex]
         hello[boardName][fromList].splice(fromCardIndex, 1);//
         hello[boardName][toList].splice(toCardIndex,1,temp);
    }else {
      console.log("List name doesn't exits")
  }
  }else {
  console.log("Board doesn't exit")
}
}
// createBoard("New board")
// listbBoards();
// removeBoard("Dreams");
// removeList("Tester Board","To Do")
// listbBoards();
// createList("Tester Board","Gaming")
// createCard("Tester Board","To Do","playing game")
// removeCard("Tester Board","To Do","Laundry")
// moveCard("Tester Board","To Do","Doing",1,1)
// displayBoard("Tester Board")
// console.log(hello.hasOwnProperty("Tester Board"))
