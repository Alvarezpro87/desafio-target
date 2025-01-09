/*
  Solução dos 5 desafios, usando Node.js.
 
*/

// Módulo para ler arquivos (usado no exercício 3)
const fs = require("fs");

/* 
  =========================================================================
  EXERCÍCIO 1
  =========================================================================
  - Dado o pseudocódigo:
      int INDICE = 13, SOMA = 0, K = 0;
      enquanto K < INDICE faça
      {
        K = K + 1;
        SOMA = SOMA + K;
      }
      imprimir(SOMA);

    Pergunta: Qual o valor final de SOMA?
    Explicação: Soma de 1 até 13 => 1+2+3+...+13 = 91
*/
function exercicio1() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K++;
    SOMA += K;
  }

  console.log("===== Exercício 1 =====");
  console.log("Valor de SOMA =", SOMA); // Deve ser 91
  console.log();
}

/* 
  =========================================================================
  EXERCÍCIO 2
  =========================================================================
  - Verificar se um número informado pertence à sequência de Fibonacci
    (sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...).
  - Dado um número, gerar a sequência até que ultrapasse ou iguale o número.
  - Verificar se o número aparece na lista gerada.
*/
function exercicio2(numero) {
  // Cria o array inicial [0, 1]
  let fib = [0, 1];

  // Gera próximos até passar (ou igualar) o 'numero'
  while (fib[fib.length - 1] < numero) {
    let proximo = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(proximo);
  }

  console.log("===== Exercício 2 =====");
  console.log("Sequência de Fibonacci até ultrapassar/alcançar o número:", fib);

  // Verifica se o 'numero' está dentro do array fib
  if (fib.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci!`);
  } else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }
  console.log();
}

/* 
  =========================================================================
  EXERCÍCIO 3
  =========================================================================
  - Temos um arquivo JSON (dados.json) com o faturamento diário de uma distribuidora.
  - Precisamos:
    1) Menor valor de faturamento em um dia do mês (desconsiderando 0).
    2) Maior valor de faturamento em um dia do mês (desconsiderando 0).
    3) Quantos dias tiveram faturamento > média (desconsiderando dias com 0).
*/
function exercicio3() {
  // Lê o arquivo dados.json (que deve estar na mesma pasta)
  const jsonData = fs.readFileSync("dados.json", "utf8");
  const data = JSON.parse(jsonData);

  // Filtra somente os dias com valor > 0
  const faturamentos = data
    .filter(item => item.valor > 0)
    .map(item => item.valor);

  // Calcula o menor e o maior (desconsiderando 0)
  const menor = Math.min(...faturamentos);
  const maior = Math.max(...faturamentos);

  // Calcula a média (soma / quantidade)
  const soma = faturamentos.reduce((acc, val) => acc + val, 0);
  const media = soma / faturamentos.length;

  // Quantos dias com valor > média
  const diasAcimaDaMedia = faturamentos.filter(val => val > media).length;

  console.log("===== Exercício 3 =====");
  console.log("Menor valor de faturamento (ignorado 0):", menor);
  console.log("Maior valor de faturamento (ignorado 0):", maior);
  console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
  console.log();
}

/* 
  =========================================================================
  EXERCÍCIO 4
  =========================================================================
  - Dado o faturamento mensal por estado:
      SP – R$67.836,43
      RJ – R$36.678,66
      MG – R$29.229,88
      ES – R$27.165,48
      Outros – R$19.849,53
    Calcular o percentual de cada estado em relação ao total.
*/
function exercicio4() {
  // Faturamentos por estado (exemplo)
  const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  // Soma total
  const valores = Object.values(faturamentos);
  const total = valores.reduce((acc, val) => acc + val, 0);

  console.log("===== Exercício 4 =====");
  console.log(`Valor total mensal: R$ ${total.toFixed(2)}`);
  console.log("Percentual de cada estado no valor total:");

  for (let estado in faturamentos) {
    let percentual = (faturamentos[estado] / total) * 100;
    console.log(
      `Estado: ${estado} => R$${faturamentos[estado].toFixed(2)} => ${percentual.toFixed(2)}%`
    );
  }
  console.log();
}

/* 
  =========================================================================
  EXERCÍCIO 5
  =========================================================================
  - Inverter os caracteres de uma string sem usar função pronta (reverse).
*/
function exercicio5(texto) {
  let invertida = "";
  // Percorre de trás para frente
  for (let i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
  }

  console.log("===== Exercício 5 =====");
  console.log("String original: ", texto);
  console.log("String invertida:", invertida);
  console.log();
}

/*
  =========================================================================
  CHAMADAS DOS EXERCÍCIOS
  =========================================================================
  Aqui chamamos cada função para executar e testar.
  Você pode comentar/descomentar ou alterar conforme sua necessidade.
*/
exercicio1();             // Exercicio 1
exercicio2(13);           // Exercicio 2 (exemplo com número 13)
exercicio3();             // Exercicio 3 (dados.json deve existir)
exercicio4();             // Exercicio 4
exercicio5("Hello World");// Exercicio 5
