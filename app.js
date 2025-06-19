// mensagem de caixinha alerta do jogo
alert ("jogo do número secreto"); 

//limite maximo de numeros do jogo
let limite_numero_secreto= 100; 

// variável para guardar o número secreto   paseInt pega so numero inteiro e mathrandom pega um no intervalo de 0 a menos de 1
let numero_secreto = parseInt (Math.random () * limite_numero_secreto + 1);



//variável para armazenar quantidade de tentativas até a pessoa acertar
let numero_de_tentativas=1;

//mensagem no console que remete a variável do número secreto
console.log ("numero secreto é " + numero_secreto);

// cria variável vazia que será preenchida para que a função while se aperfeiçoe 
let numero_inserido; 

//mensagem no console que remete a variável do numero_inserido
console.log ("numero_inserido é " + numero_inserido);

//enquanto é uma estrutura que permite com que o aplicativo continue rodando até que se encerre sua condição
while (numero_inserido != numero_secreto)
{
         //comando que permite realizar uma pergunta pra inserir informação ao mesmo tempo que armazena o valor na variável
        numero_inserido= prompt (`escolha um número entre 1 e ${limite_numero_secreto}` ); 

         // condição de comparação dos valores

             if (numero_inserido == numero_secreto)
             {
                //para parar o while
                break;
               
             }
            else
            {
                   // condição de dica 
                 if (numero_inserido > numero_secreto)
                {
                      //mensagem de caixinha alerta e sistema de string
                     alert (`você errou, o ${numero_inserido} é maior que o secreto` ); 
                     console.log ("errou"); 
                }

                     //condicional else com função
                 else if (numero_inserido < numero_secreto)
                {
                    //mensagem de caixinha alerta e sistema de string
                      alert (`você errou, o ${numero_inserido} é menor que o secreto` ); 
                    console.log ("errou"); 
                }

                //armazena uma soma de tentativas a cada erro
                numero_de_tentativas= numero_de_tentativas+1; 

            }   
}
// vai começar a partir do break
//operador ternario: leia-se: se o número de tentativas maior que um, então o valor da variável é tentativas, caso contrário é tentativa
let palavra_tentativa = numero_de_tentativas > 1 ? "tentativas":"tentativa";

alert (`você acertou! e o número secreto é ${numero_secreto}. Você fez isso com ${numero_de_tentativas} ${palavra_tentativa} `); 
console.log ("acertou");
