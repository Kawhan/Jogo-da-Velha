var jogo = [];//Recebe o controle do jogo , o que realmente vai guarda as posições das jogadas , ou seja , se em cada posição eu tenho um x ou uma bolinha . E também guarda as posições vazias.Relacionando ao uma matriz.

var tabuleiro=[];//Controlar os elementos visuais.Cada momento que tiver uma jogada eu vou coloca no array jogo e alterar o array tabuleiro.

var quemJoga=0;//Indicar de quem é a vez de jogar se é da cpu ou do usuario. 0-->JOGADOR 1-->CPU

var verifica;//Responsavel por armazenar uma verificação , que será responsavel por dizer se houve vencedor ou não.

var jogando=true;//Vai me indicar se o jogo está rolando ou não.Eu quero iniciar a pagina com jogo rolando.Em false o jogo está parado.

var nivel=2;//Variavel relacionada com nivel que o jogo está sendo jogado.

var jogadaCpu=1;//Relacionado inicialmente para mostra qual é a jogada da cpu , porque inicialmente a primeira jogada da cpu ela vai joga em uma posição aleatoria , isso aqui vai funcionar no terceiro nivel.Indicar qual jogada a cpu está fazendo se a primeira a segunda , etc.

var quemComeca=1;//Relacionado a dizzer quem começa se é a cpu ou o jogador.

var jogada=0;//Controlando a variavel que será resposanvel por calcular o numero de jogadas no nosso nivel 2 .

function cpuJoga(){//Função responsavel pela jogada do computador ou cpu.
    if(jogando){
        var l,c;
        if(nivel==1){//Criando primeiro nivel da cpu que será responsavel por sortiar uma posição se essa posição estiver vazia ele aplica a 0 nela.
            do{
                l=Math.round(Math.random()*2)
                c=Math.round(Math.random()*2)
            }while(jogo[l][c]!="");//Enquanto nosso jogo for diferente de vazio em linha e coluna ele vai ativar.
            jogo[l][c]="O";
        }
        else if(nivel==2){
            //Ataque=Verificar a posição da nossa bolinha e atacar no melhor modo , afim de completar um ganho.
            //Linha 1
            if((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
                jogo[0][2]="O"
            }else if((jogo[0][0]=="O")&&(jogo[0][2]=="O")&&(jogo[0][1]=="")){
                jogo[0][1]="O"
            }else if((jogo[0][1]=="O")&&(jogo[0][2]=="O")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
            //jogada linha2
            if((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
                jogo[1][2]="O";
            }else if((jogo[1][0]=="O")&&(jogo[1][2]=="O")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="O")&&(jogo[1][2]=="O")&&(jogo[1][0]=="")){
                jogo[1][0]="O";
            }else
            //jogada linha 3
            if((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[2][0]=="O")&&(jogo[2][2]=="O")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[2][1]=="O")&&(jogo[2][2]=="O")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else
            //jogada da coluna 1
            if((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][0]=="O")&&(jogo[2][0]=="O")&&(jogo[1][0]=="")){
                jogo[1][0]="O";
            }else if((jogo[1][0]=="O")&&(jogo[2][0]=="O")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
            //jogada da coluna 2
            if((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[0][1]=="O")&&(jogo[2][1]=="O")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="O")&&(jogo[2][1]=="O")&&(jogo[0][1]=="")){
                jogo[0][1]="O";
            }else
            //jogada da coluna 3
            if((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][2]=="O")&&(jogo[2][2]=="O")&&(jogo[1][2]=="")){
                jogo[1][2]="O";
            }else if((jogo[1][2]=="O")&&(jogo[2][2]=="O")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else
            //jogada da diagonal 1
            if((jogo[0][0]=="O")&&(jogo[1][1]=="O")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][0]=="O")&&(jogo[2][2]=="O")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="O")&&(jogo[2][2]=="O")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
            //Jogada da diagonal 2
            if((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][2]=="O")&(jogo[2][0]=="O")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[2][0]=="O")&&(jogo[1][1]=="O")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else
            //Defesa
            //Jogada linha 1
            if((jogo[0][0]=="X")&&(jogo[0][1]=="X")&&(jogo[0][2]=="")){
                jogo[0][2]="O"
            }else if((jogo[0][0]=="X")&&(jogo[0][2]=="X")&&(jogo[0][1]=="")){
                jogo[0][1]="O"
            }else if((jogo[0][1]=="X")&&(jogo[0][2]=="X")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
            //Jogada linha 2
            if((jogo[1][0]=="X")&&(jogo[1][1]=="X")&&(jogo[1][2]=="")){
                jogo[1][2]="O";
            }else if((jogo[1][0]=="X")&&(jogo[1][2]=="X")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="X")&&(jogo[1][2]=="X")&&(jogo[1][0]=="")){
                jogo[1][0]="O";
            }else
            //jogada linha 3
            if((jogo[2][0]=="X")&&(jogo[2][1]=="X")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[2][0]=="X")&&(jogo[2][2]=="X")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[2][1]=="X")&&(jogo[2][2]=="X")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else
            //jogada da coluna 1
            if((jogo[0][0]=="X")&&(jogo[1][0]=="X")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][0]=="X")&&(jogo[2][0]=="X")&&(jogo[1][0]=="")){
                jogo[1][0]="O";
            }else if((jogo[1][0]=="X")&&(jogo[2][0]=="X")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
            //jogada da coluna 2
            if((jogo[0][1]=="X")&&(jogo[1][1]=="X")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[0][1]=="X")&&(jogo[2][1]=="X")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="X")&&(jogo[2][1]=="X")&&(jogo[0][1]=="")){
                jogo[0][1]="O";
            }else
            //jogada da coluna 3
            if((jogo[0][2]=="X")&&(jogo[1][2]=="X")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][2]=="X")&&(jogo[2][2]=="X")&&(jogo[1][2]=="")){
                jogo[1][2]="O";
            }else if((jogo[1][2]=="X")&&(jogo[2][2]=="X")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else
            //jogada da diagonal 1
            if((jogo[0][0]=="X")&&(jogo[1][1]=="X")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][0]=="X")&&(jogo[2][2]=="X")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[1][1]=="X")&&(jogo[2][2]=="X")&&(jogo[0][0]=="")){
                jogo[0][0]="O";
            }else
             //Jogada da diagonal 2
            if((jogo[0][2]=="X")&&(jogo[1][1]=="X")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][2]=="X")&(jogo[2][0]=="X")&&(jogo[1][1]=="")){
                jogo[1][1]="O";
            }else if((jogo[2][0]=="X")&&(jogo[1][1]=="X")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else{
                if(jogada<8){//Se eu não tiver nenhuma condição de defesa eu vou jogar uma jogada aleatoria.E depois uma jogada na linha vazia assim ele faz a verificação depois de 8 jogadas e acerta a linha vazia, porque assim se ele for menor do que 8 eu sei que tem mais de uma casa vazia.
                    do{
                        l=Math.round(Math.random()*2);
                        c=Math.round(Math.random()*2); 
                    }while(jogo[l][c]!="");
                    jogo[l][c]="O";
                }else{//Se não for menor do que 8 eu sei que tem somente uma casa vazia então eu posso marca aquela casa sem fica procurando com essa rotina.
                    for(var l=0;l<3;l++){
                        for(var c=0;c<3;c++){
                            if(jogo[l][c]==""){
                                jogo[l][c]="O";
                            }
                        }
                    }
                }
            }
        }
        verifica=verificaVitoria();//Verificando se houve vitoria aqui nesse momento.
        if(verifica!=""){//Se vitoria for diferente de vazio ele vai mostra vitoria do simbolo ganhador.
            alert(verifica+" venceu");
            jogando=false;
        }
        atualizaTabuleiro();
        jogada++;
        quemJoga=0;
    }

}

function verificaVitoria(){//Function relacionada para verificar se já houve vitoria ou não tanto do jogador quanto da cpu.
    var l, c;
    //Linhas
    for(l=0;l<3;l++){
        if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){//Se posição da esquerda foir igual posição do meio e posição do meio for igual a esquerda significa que a linha está completa
            return jogo[l][0]//Mostra o vencedor que vai está em uma dessas posições.

        }

    }
    //Colunas
    for(c=0;c<3;c++){
        if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){//Se posição da esquerda foir igual posição do meio e posição do meio for igual a esquerda significa que a linha está completa
            return jogo[0][c]

        }

    }
    //Diagonais
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){//Configuração da primeira diagonal , vencedor da primeira diagonal
        return jogo[0][0]

    }
    if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){//Segunda diagonal.
        return jogo[0][2]

    }
    return "";
}


function jogar(p){//Criando uma função com um parametro "p" que será responsavel por mostra uma posição.Jogada relativa ao jogador e não da cpu.Eu vou usar a mesma função para todos os campos.
    if((jogando)&&(quemJoga==0)){//verificando se o jogando esta true ou seja o jogo está ocorrendo e também se quem joga é o jogador.
        switch(p){
            case 1:
                if(jogo[0][0]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[0][0]="X";
                    quemJoga=1;//Passando a jogada para cpu
                }
            break;
            case 2:
                if(jogo[0][1]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[0][1]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            case 3:
                if(jogo[0][2]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[0][2]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            case 4:
                if(jogo[1][0]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[1][0]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            case 5:
                if(jogo[1][1]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[1][1]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            case 6:
                if(jogo[1][2]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[1][2]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            case 7:
                if(jogo[2][0]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[2][0]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;  
            case 8:
                if(jogo[2][1]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[2][1]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;
            default://Caso 9
                if(jogo[2][2]==""){//Verificando se na posição linha 0 e coluna 0 está vazia , se estiver então ele marca aquele quadrante com X , que a marcação do jogador.
                    jogo[2][2]="X";
                    quemJoga=1;//Passando a jogada para cpu
                    }
            break;    
        }
        if(quemJoga==1){
        atualizaTabuleiro(); //Toda vez que for colocado a questão da posição do nosso X ou 0 ou nada ele vai atualizar o tabuleiro mudando visualmente as divs com atualizaTabuleiro(). 
        verifica=verificaVitoria();//Verificando se houve vitoria aqui nesse momento.
        if(verifica!=""){//Se vitoria for diferente de vazio ele vai mostra vitoria do simbolo ganhador.
            alert(verifica+" venceu");
            jogando=false;
        }
        jogada++;
        cpuJoga();
        }
    }
}

    function atualizaTabuleiro(){//Mudando a  questão do efeito visual depedendo da posição escolhida.COrrer a matriz jogo e atribuir a nossa matriz tabuleiro.
        for(var l=0;l<3;l++){//Configurando a rotina para percorrer o tabuleiro , lembrando que é um for para coluna e outro for para linha.
            for(var c=0;c<3;c++){
                if(jogo[l][c]=="X"){//Então eu vou pegar a questão que se qualquer parte de linha ou coluna estiver marcado com x , o nosso tabuleiro que é relativo a posição da div vai adicionar naquele campo o x.Função do jogador , o cursor é para tirar a maozinha.
                    tabuleiro[l][c].innerHTML="X";
                    tabuleiro[l][c].style.cursor = "default";
                }else if(jogo[l][c]=="O"){//Então eu vou pegar a questão que se qualquer parte de linha ou coluna estiver marcado com O , o nosso tabuleiro que é relativo a posição da div vai adicionar naquele campo o O.Função do computador , o cursor é para tirar a maozinha.
                    tabuleiro[l][c].innerHTML="O";
                    tabuleiro[l][c].style.cursor = "default";
                }else{//Função ligada para limpar o tabuleiro ou sejá para frente ele não recebe nada e o cursor volta a receber point.
                    tabuleiro[l][c].innerHTML="";
                    tabuleiro[l][c].style.cursor = "pointer";
                }
            }
        }
    }

    function inicia(){//Função atribuida ao inicio do jogo onde vai ser definido e aplicado nossa variavel.
        jogando=true;//Definindo que o jogo está ativo
        jogadaCpu=1;//Definindo que o 1 é relativo a jogada da cpu.
        jogada=0;
        jogo=[
            ["","",""],
            ["","",""],
            ["","",""]
        ];//Zerando tudo da nossa matriz.Então como vai ser a aplicação da matriz ela tera tres linha e tres colunas e na questão do inicio do jogo todos eles estarão zerados.
        tabuleiro=[
            [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],[document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")], [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
        ];//Montagem da questão visual da nossa div na questão do x e do 0 no jogo da velha.
        atualizaTabuleiro();
        if(quemComeca==1){//Criando uma rotina para dizer quem começa jógando e tals . Dessa forma
            quemComeca=0;
            quemJoga=quemComeca;
            document.getElementById("dvQuemComeca").innerHTML="Quem começa: Jogador";
        }else{//Quem começa é a cpu
            quemComeca=1;
            quemJoga=quemComeca;
            document.getElementById("dvQuemComeca").innerHTML="Quem começa: Computador";
            cpuJoga();
        }
    }

    window.addEventListener("load",inicia);