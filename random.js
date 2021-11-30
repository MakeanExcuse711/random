//説明フォームを作りたい
//別のボタンで実行したい
//中央寄せしたい
const input2 = document.getElementById("input2");
const input1 = document.getElementById("input1");
const form = document.getElementById("form");
const ol = document.getElementById("ol");
const em = document.getElementById("em");
//ulとは順番のない箇条書き

//localstrageをtodosに入れる→登録する
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos){
    todos.forEach((todo) => {
        let todoText1 = todo.text1;
        let todoText2 = todo.text2;
        add(todoText1,todoText2);
    });
}

//'登録'をクリックで登録
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    let todoText1 = input1.value;
    let todoText2 = input2.value;
    add(todoText1,todoText2);

  });

//enterを押しても登録
addEventListener("keydown",function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    let todoText1 = input1.value;
    let todoText2 = input2.value;
    add(todoText1,todoText2);
  }
})


form2.addEventListener("submit",function(event){
  event.preventDefault();
  console.log("実行");
  div.innerHTML = "実行";
  calc(todos);
});

//計算をしたい
function calc(todos){
  if(todos){
    var ran = Math.floor(Math.random()*(todos.length)); 
    var eff = Math.floor(Math.random()*(todos[ran].text2-todos[ran].text1)) + Number(todos[ran].text1);
    ran = ran + 1;
    div.innerHTML = ran + "-" + eff;
  }else{
    div.innerHTML = "dataがないです";
  }
}

//登録関数
  function add(todoText1,todoText2){

  
      const li = document.createElement("li");

      li.innerText = todoText1 + "-" + todoText2;
      //きれいに移すやつ
      //li.classList.add("list-group-item");
      //消すやつ
      li.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        li.remove();
        saveData(todoText1,todoText2);
      });

      //olにliを持っていくやつ
      ol.appendChild(li);
      //input1.value = "";
      saveData(todoText1,todoText2);
  }

//データ保存
  function saveData(todoText1,todoText2) {
      const lists = document.querySelectorAll("li");
      const todos = [];

      lists.forEach((li) => {
        let texts = li.innerText;
          todos.push({
              text1: texts[0],
              text2: texts[2],
          });
      });

      localStorage.setItem("todos",JSON.stringify(todos));
  }