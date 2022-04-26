<?php
     class Aluno{
          public  $nome,  $nota1, $nota2, $nota3, $media;
          function calcularMedia($nota1,$nota2,$nota3){
               $media = ($nota1+$nota2+$nota3)/3;
               return $media;
          }
     }
?>