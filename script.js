function jogar(escolhaDoUsuario) {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaDoComputador = escolhas[Math.floor(Math.random() * 3)];
  
    let resultado = '';
    if (escolhaDoUsuario === escolhaDoComputador) {
      resultado = 'Empate!';
    } else if (
      (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'tesoura') ||
      (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'pedra') ||
      (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'papel')
    ) {
      resultado = 'Você ganhou!';
    } else {
      resultado = 'Você perdeu!';
    }
  
    document.getElementById('resultado').innerText = `Você escolheu ${escolhaDoUsuario}. O computador escolheu ${escolhaDoComputador}. ${resultado}`;
  }