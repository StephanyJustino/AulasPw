<?php
     require './conexao.php';
     require './fechaConexao.php';
 
     $nome = $_POST['nome'];
     $nota1 =  $_POST['nota1'];
     $nota2 = $_POST['nota2'];
     $nota3 = $_POST['nota3'];
 
     $link = abrirConexao();
 
             $sql = "DELETE tbAluno(nomeAluno,nota1,nota2,nota3) FROM tbAluno WHERE idAluno = ";
 
 
         if (mysqli_query($link, $sql)) {
             # code...
             echo 'DELETADO com sucesso!';
         }else {
             # code...
             echo '[ERRO]';
         }
         
             fecharConexao($link);
         
             echo 'DELETAR com sucesso!';
?>