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
    hello.boardName = "empty"
  }
}

function removeBoard(boardName){
  let dup = true;
  for(i=0;i<Object.keys(hello).length;i++){
   if(boardName===Object.keys(hello)[i]) {
     console.log("Board doesn't exit")
     dup = false;
   }
   if(dup === true) {
     delete hello.boardName;
   }
}
}

createBoard("New board")
listbBoards();
removeBoard();
listbBoards();
