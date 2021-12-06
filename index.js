var fs = require('fs');
const core = require('@actions/core');
const frase_positiva = core.getInput('frase_positiva');
const frase_negativa = core.getInput('frase_negativa');
const resultado_tests = core.getInput('resultado_tests');

if (resultado_tests == 'success') {
  fs.writeFileSync('README.md', frase_positiva);
} else {
  fs.writeFileSync('README.md', frase_negativa);
}

console.log('Meme añadido al readme');
