function calculaRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Verifica o nível com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Nível desconhecido"; // Só por segurança (não deve acontecer)
  }

  // Retorna a mensagem formatada
  return `O Herói tem o saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

// Exemplo de uso:
const vitorias = 35;
const derrotas = 10;
const resultado = calculaRankeadas(vitorias, derrotas);
console.log(resultado);
