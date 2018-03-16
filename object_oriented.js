// -------------- Tasks question---------------

// class Task {
//   constructor(taskname, assignee) {
//     this.taskname = taskname
//     this.assignee = assignee
//   }
//
//   render() {
//     if(this.assignee === undefined) console.log(this.taskname)
//     else console.log(`${this.assignee}+${this.taskname}`)
//   }
// }

// const myTask = new Task('Clean dishes');
// const myTaskWithAssignee = new Task('Wash clothes', 'You')
//
// myTask.render()
// myTaskWithAssignee.render()
// ------------- Tasks Question end ----------------

// ------------ List Question start -----------------
// class Task {
//   constructor(taskname, assignee) {
//     this.taskname = taskname
//     this.assignee = assignee
//   }
//
//   render() {
//     if(this.assignee === undefined) {
//       return this.taskname
//
//     }
//     else{
//       return `${this.assignee}+${this.taskname}`
//     }
//   }
// }
//
// class List {
//   constructor(listname) {
//     this.listname = listname;
//     this.taskarr = []
//   }
//   addTask(fnc) {
//     this.taskarr.push(`${fnc.taskname},${fnc.assignee}`)
//
//     return this
//   }
//   removeTask(taskname) {
//     for (let i = 0; i < this.taskarr.length; i++) {
//       let spt = this.taskarr[i].split("_")
//       if (spt[0] === taskname) {
//         this.taskarr.splice(i, 1)
//       }
//     }
//   }
//   render() {
//     let result = "";
//     for (let i = 0; i < this.taskarr.length; i++) {
//       result += `${i}>${this.taskarr[i]}\n`
//     }
//
//     console.log(`------------------\n     ${this.listname}\n-------------------\n${result}`)
//     return `------------------\n${this.listname}-------------------\n${result}`
//   }
// }
//
// const toDoList = new List('To Do');
//
// toDoList.addTask(new Task('Laundry', 'You')).addTask(new Task('Pay Phone Bill', 'Me'));

// ----------------List Question End --------------------------------

// ----------------Board Question Start ------------------------------

// class Board {
//   constructor(boardname) {
//     this.boardname = boardname;
//     this.boardobj = {}
//   }
//
//   addList(fnc) {
//     this.boardobj[fnc.listname]=fnc.taskarr
//     return this
//   }
//
//   removeList(listname) {
//     delete this.boardobj[listname]
//   }
//
//   render(){
//     let keys = Object.keys(this.boardobj);
//     let resulttask="";
//     console.log('*********************')
//     console.log(`**** ${this.boardname} ****`)
//     console.log('*********************')
//     for(let k=0;k<keys.length;k++){
//       console.log(`------------------\n     ${keys[k]}\n-------------------\n`)
//     for(let i=0;i<this.boardobj[keys[k]].length;i++){
//       console.log(`${i}>${this.boardobj[keys[k]][i]}\n`)
//     }
//     }
//   }
//
//   moveTaskTo(taskname,clistname,tlistname){
//     let keys = Object.keys(this.boardobj);
//     let currentvalue
//
//
//     for(let i=0; i<this.boardobj[clistname].length; i++){
//        let spt=this.boardobj[clistname][i].split("_")
//        if(spt[0]===taskname) {
//          currentvalue= spt.join('_')
//          this.boardobj[clistname].splice(i,1)
//        }
//      }
//
//      this.boardobj[tlistname].push(currentvalue)
//
//   }
//
// }
//
// const toDoList = new List('To Do')
//   .addTask(new Task('Laundry', 'You'))
//   .addTask(new Task('Buy Apples'))
//   .addTask(new Task('Pay Phone Bill', 'Me'));
//
// const doingList = new List('Doing')
//   .addTask(new Task('Laundry'))
//   .addTask(new Task('Study JavaScript', 'Jill'))
//   .addTask(new Task('Study HTML', 'Jill'))
//   .addTask(new Task('Study Ruby', 'Me'));
//
// const doneList = new List('Done')
//   .addTask(new Task('Laundry'))
//   .addTask(new Task('Ruby Exercises Homework'));
//
// const myBoard = new Board('My Board')
//   .addList(toDoList)
//   .addList(doingList)
//   .addList(doneList);
//
// myBoard.addList(new List('Remove Me!'));
// // Finds and removes the list named 'Remove Me!'
// myBoard.removeList('Remove Me!');
//
// // myBoard
// console.log(myBoard.render());
//
// myBoard.moveTaskTo('Laundry', 'To Do', 'Doing');
// myBoard.moveTaskTo('Buy Apples', 'To Do', 'Doing');
//
// console.log(myBoard.render());
