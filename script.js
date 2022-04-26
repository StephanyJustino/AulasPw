function calcularMedia () {
var tr = document.querySelectorAll("tr");

    
    var linha = 1;
    var coluna = 1;
    var media = 0;
    var numeroMedia= parseFloat(media);

        while(linha<tr.length){
        while(coluna<4){
            numeroMedia += parseFloat(tr[linha].children[coluna].textContent);
            console.log(numeroMedia);
            coluna++;
        }
         numeroMedia=numeroMedia/3;
        tr[linha].children[coluna].textContent= numeroMedia.toFixed(1);
        coluna = 1;
        linha ++; 
        numeroMedia = 0;
} }

calcularMedia();

