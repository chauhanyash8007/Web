let msg = "    hello    ";
msg.trim();
console.log(msg);

let str = "help!";
console.log(str.trim().toUpperCase());

let str1 = "ApnaCollege";

console.log(str1.slice(4,9));
console.log(str1.indexOf("na"));
console.log(str1.replace("Apna","our"));
console.log(str1.slice(4).replace("l","t"));

let students = ["Yash","Rishi","priyanshu","Karan"];
let nums = [2,4,6,8];

let start = ['january','july','march','august'];
start[0]='july';
start[1]='june';
console.log(start);

let month = ['january','july','march','august'];
console.log(month);
// month.splice(0,1);
month.splice(0,2,'july','june');
console.log(month);

let tic_tac_toe = [['X',' ','O'],[' ','X',' '],['O',' ','X']];
console.log(tic_tac_toe);
tic_tac_toe[0][1]='O';
console.log(tic_tac_toe);

let n =10;
for(let i=1;i<=10;i++){
    console.log(i,'*',n,'=',i*n)
}

let num=10;
for(let i=1;i<=num;i++){
    if(i%2==0){
        console.log(i);
    }
}
for (let j = 1; j <= 15; j=j + 2) {
    console.log(j);
}

let movie = "avatar";

let guess = prompt("Enter movie name");

while((guess!=movie)&&(guess!="quit")){
    guess = prompt("Wrong name please try again");
}

if(guess == movie){
    console.log("congress");
}else {
    console.log("you quit");
}

let Name = ["yash","rishi","priyanshu","karan"];
for(let i=0;i<Name.length;i++){
    console.log(Name[i]);
}

let heros =[["ironman","spiderman","thor"],["superman","wounder women","flash"]];
for(let i=0;i<heros.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<heros[i].length;j++){
        console.log(heros[i][j]);
    }
}

let fruits = ["mango","apple","banana","litchi","orange"];
for(Fruit of fruits){
    console.log(Fruit);

}

let todo = [];

let req = prompt("Enter the Request");

while(true){
    if(req=="quit"){
        console.log("Quit");
        break;
    }

    if(req=="list"){
        console.log("---------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------");
    }else if(req=="add"){
        let task = prompt("Enter the task you want to added");
        todo.push(task);
        console.log("Task added");
    }else if(req=="delete"){
        let idx=prompt("Enter the task index you want to delete");
        todo.splice(idx,1);
        console.log("Task deleted");
    } else{
        console.log("wrong request");
    }

    req = prompt("Enter the Request");

}