class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      case 'arqueiro':
        ataque = 'flecha';
        break;
      default:
        ataque = 'ataque desconhecido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso - criando diferentes tipos de heróis
const mago = new Hero("Gandalf", 150, "mago");
const guerreiro = new Hero("Aragorn", 35, "guerreiro");
const ninja = new Hero("Naruto", 17, "ninja");
const arqueiro = new Hero("Legolas", 500, "arqueiro");

// Exibindo informações e ataques de cada personagem
console.log(`\nHerói: ${mago.nome}, Idade: ${mago.idade}, Tipo: ${mago.tipo}`);
mago.atacar();

console.log(`\nHerói: ${guerreiro.nome}, Idade: ${guerreiro.idade}, Tipo: ${guerreiro.tipo}`);
guerreiro.atacar();

console.log(`\nHerói: ${ninja.nome}, Idade: ${ninja.idade}, Tipo: ${ninja.tipo}`);
ninja.atacar();

console.log(`\nHerói: ${arqueiro.nome}, Idade: ${arqueiro.idade}, Tipo: ${arqueiro.tipo}`);
arqueiro.atacar();

console.log(`\n=== Demonstração de ataques em sequência ===`);
const herois = [mago, guerreiro, ninja, arqueiro];
herois.forEach(heroi => {
  heroi.atacar();
});

