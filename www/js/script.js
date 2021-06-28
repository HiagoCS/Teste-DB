 document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady(){
   //Criando database escrita em sql
   var db = openDatabase("MeuBanco", "1.0", "Mybase", 40048);
   db.transaction(function(criar){
     criar.executeSql("create table user (id primary key, name text, password text)");
   });
  //Inserindo dados ao apertar o botão
   $("#btn").click(function(){
     const name = $("#username").val();
     const password = $("#password").val();
     db.transaction(function(save){
       save.executeSql("insert into user(name,password) values(?,?)",[name, password]);
     });
     $("#add").append("<div class='col-12'>Nome: </div>")
   });
 }