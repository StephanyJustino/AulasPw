
function calcularMedia(){
    var tr = document.querySelectorAll("tr");
    var media = 0, linha = 1, coluna = 1;

    while(linha<tr.length){
        while(coluna<4){
            media += parseInt(tr[linha].children[coluna].textContent);
            coluna++;
        }

        media = media/3;
        tr[linha].children[coluna].textContent = media;
        coluna = 1;
        linha++;
        media = 0;
    }
} 

calcularMedia();