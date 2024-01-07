let opcao = "";
do {
  opcao = prompt(`
        Bem-vindo(a) à Calculadora Geométrica.
        Escolha uma das opções digitando apenas o número correspondente.
        
        1. Área do triângulo: base * altura / 2
        2. Área do retângulo: base * altura
        3. Área do quadrado: lado²
        4. Área do trapézio: (base maior + base menor) * altura / 2
        5. Área do círculo: PI * raio² 
        6. Sair do Programa
    `);
  switch (opcao) {
    case "1":
      function areaTriangula(base, altura) {
        return (base * altura) / 2;
      }
      let valor1 = Number(prompt("Informe a base do triângulo: "));
      let valor2 = Number(prompt("Informe a altura do triângulo: "));
      alert(areaTriangula(valor1, valor2));
      break;
    case "2":
      function areaRetangulo(base, altura) {
        return base * altura;
      }
      let baseRetangulo = Number(prompt("Informe a base do triângulo: "));
      let alturaRetangulo = Number(prompt("Informe a altura do triângulo: "));
      alert(areaRetangulo(baseRetangulo, alturaRetangulo));
      break;
    case "3":
      function areaQuadrado(lado) {
        return lado * lado;
      }
      let ladoQuadrado = Number(prompt("Informe o lado da área do quadrado: "));
      alert(areaQuadrado(ladoQuadrado));
      break;
    case "4":
      function areaTrapezio(baseMaior, baseMenor, altura) {
        return ((baseMaior + baseMenor) * altura) / 2;
      }
      let baseMaior = Number(prompt("Informe a base maior do trapezio: "));
      let baseMenor = Number(prompt("Informe a base menor do trapezio: "));
      let alturaTrapezio = Number(prompt("Informe a altura do trapezio: "));
      alert(areaTrapezio(baseMaior, baseMenor, alturaTrapezio));
      break;
    case "5":
      function areaCirculo(raio) {
        return Math.PI * raio ** 2;
      }
      let raio = Number(prompt("Informe o valor do raio: "));
      alert(areaCirculo(raio).toFixed(2));
      break;
    case "6":
      alert("Saindo do Programa...");
      break;
  }
} while (opcao !== "6");
