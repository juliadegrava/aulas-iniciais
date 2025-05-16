// 1 - Verificação de desconto em loja de roupas
let comando = "1"


switch  (comando)   {


    case  "1":
   
    console.log("Opção selecionada:1 - Compra acima de R$200,00 - desconto no valor de 10% aplicado.");
   
    break;
   
    case   "2":
   
    console.log("Opção selecionada:2 - Dia de promoção - desconto aplicado no valor de 15% aplicado.");
   
    break;
   
    case "3":
   
    console.log("Opção selecionada:3 - Cartão fidelidade - desconto no valor de 5% aplicado.");
   
    break;
   
    default:
   
    console.log("Opção inválida. Por favor, escolha uma opção válida.");
   
    break;
}

// 2 - Verificação de elegibilidade para carteira de motorista
let idade = 23;
let passouExameTeórico = true;
let passouExamePrático = false;


if (idade >= 18) {
    console.log("Sua idade é suficiente para dirigir.");


} else{
    console.log("Sua idade ainda é insuficiente para dirigir.");
}
    if (passouExameTeórico = true) {
        console.log("Parabéns! Você passou no exame teórico.");
 }
 else{
        console.log("Você não passou no exame teórico, sinto muito.");  
}
 if (passouExamePrático =! true){
    console.log("Parabéns! Você passou no exame prático!!");
} else {
    console.log("Você não passou no exame prático, sinto muito.");
}

// 3 - Calculadora de preço de ingresso para parque
let idade2 = 22;
let ehFeriado = true;
let temCartaoDesconto = false;

if (idade2 <= 10) {
    console.log("Acesso aprovado. Valor de entrada: R$40,00.");
    
} if (idade2 >= 60) {
    console.log("Acesso aporvado. Valor de entrada: R$25,00.");
    
} else if (ehFeriado) {
    console.log("Acréscimo de 20% aplicado.");
    
} else if (temCartaoDesconto) {
    console.log("Desconto de 15% aplicado.");
    
}

// 4 - Verificação de acesso a sala de cinema
let idade3 = 12;
let classificaçãoDoFlime = 18;
let acompanhadoPorResponsavel = false
let temIngresso = true


if (!temIngresso) {
    console.log("Acesso negado. Você não contém um ingresso.");
   
} else {
    if (idade3 >= classificaçãoDoFlime) {
        console.log("Acesso permitido, você pode ver o filme.");
       
    } else{
        if (acompanhadoPorResponsavel && idade3 >= classificaçãoDoFlime - 3){
            console.log("Acesso permitido somente com a presença de um responsável maior de idade.");
           
        }else{
            console.log("Acesso foi negado. Idade insuficiente.");
           
        }
    }
}

// 5 - Calculadora de pontos em jogo
let pontosBase;
let nivelDificuldade;
let completouEmTempoRecorde = true;
let coletouTodosItens = true;
let pontosFinais;

pontosBase = 80;
nivelDificuldade = 3;

if (completouEmTempoRecorde && coletouTodosItens) {
    pontosFinais = pontosBase * nivelDificuldade * 2;
    pontosFinais = pontosFinais + 150;
    console.log(`Você possui ${pontosFinais} pontos.`);
    
} else if (coletouTodosItens) {
     pontosFinais = pontosBase * nivelDificuldade;
     pontosFinais = pontosFinais + 150;
     console.log(`Você possui ${pontosFinais} pontos.`);
     
} else {
    pontosFinais = pontosBase
    console.log(`Você possui uma pontuação de ${pontosFinais} pontos.`);
    
}

// 6 - Sistema de recomendação de moda
let temperaturaAtual = 18;
let ocasião = "festa";
let preferenciaColorida = true;
let prefereEstampa = true;
let orçamentoDisponível = 1200;
let preço1;
let recomedaçao;

if (temperaturaAtual <= 20 ) 
  if (ocasião == "casual") {
    recomedaçao = "Calça pantalona";
    preço1 =100 
  } else if (ocasião == "formal") {
    recomedaçao = "Smoking"
    preço1 = 170 
  } else { ocasião == "festa"
    recomedaçao = "Calça jeans";
    preço1 = 99;
  } if (temperaturaAtual > 20)
    if (ocasião == "casual") {
      recomedaçao = "Blusa regata"; 
      preço1 = 50 
    } else if (ocasião == "formal") {
      recomedaçao = "Vestido Longo";
      preço1 = 175 
    } else { 
      ocasiao == "festa";
      recomedaçao = "Shorts";
      preço1 = 79 
    } 
    console.log(`Para essa teperatura ${temperaturaAtual} é recomendado uma ${recomedaçao} no valor de ${preço1}`);

// 7 - Calculadora de empréstimo de jogo entre amigos
let valorJogo = 120;
let diasCombinados = 10;
let diasAtrasados = 2;
let jogoDanificado = true;
let multa;
let valorFinalJogo = valorJogo;
let comunicouAtraso = false;

if (diasAtrasados > 0  ) {
  multa =  diasAtrasados * (valorJogo * 0.05);
  valorFinalJogo = valorJogo + multa
  valorFinalJogo += multa
console.log(`Houve um atraso na devolução, você deve pagar uma multa de ${multa.toFixed(2)}`);
} if (jogoDanificado) {
  valorFinalJogo += 20 
  console.log("Jogo danificado: acréscimo de R$ 20,00.");
} if (diasAtrasados > 0 && !comunicouAtraso ) {
  valorFinalJogo += 5 
  console.log("O atraso não foi comunicado: acréscimo de R$ 5,00.");
}
console.log(`Você deve pagar ${valorFinalJogo} no total.`);

// 8 - Sistema de matching para grupo de estudos
let materiaDeInteresseA = "sociologia";
let horarioDeInteresseA= "manha";
let nivelConhecimentoA = "2";
let prefereSozinhoA = false
let preferaEsplicarParaOutrosA = true

let materiaDeInteresseB = "sociologia";
let horarioDeInteresseB= "manha";
let nivelConhecimentoB = "4";
let prefereSozinhoB = true
let preferaEsplicarParaOutrosB = false

let compatibilidade = true
let diferençaNivel = nivelConhecimentoA - nivelConhecimentoB;

if (materiaDeInteresseA !== materiaDeInteresseB){
    compatibilidade = false 
}
if (horarioDeInteresseA !== horarioDeInteresseB){
    compatibilidade = false
}
if (diferençaNivel < 0 ){
    diferençaNivel= - diferençaNivel
}
if( diferençaNivel >2){
    compatibilidade = false
}
if (prefereSozinhoA && prefereSozinhoB){
    compatibilidade = false
}
if (preferaEsplicarParaOutrosA && preferaEsplicarParaOutrosB){
    compatibilidade= false
}
if (compatibilidade){
    console.log("As duas pessoas são aptas para formar um grupo de estudo.");
    
}else{
    console.log("As duas pessoas não são aptas para formar um grupo de estudos.");
    
}

// 9 - Verificação para campeonato de e-sports escolar
let idadeAluno = 17
let mediaEscolar = 8;
let temJogoEspecifico = true
let autorizaçãoDosPais = true
let advertencias = false
let podeParticipar
if (idadeAluno < 12 ){
    podeParticipar = false
}
if (mediaEscolar < 7 ){
    podeParticipar = false
}
if (temJogoEspecifico){
    podeParticipar = false
}
if (idade < 18 && !autorizaçãoDosPais){
    podeParticipar = true
}
if (podeParticipar){
    console.log("O aluno está apto a participar do campeonato.");
}else {
    console.log("O aluno não está apto participar do campeonato.");
    
}

// 10 - Calculadora de recompensa para app de exercícios
let tipoDeExercicio = "cárdio";
let duracaoDoExercicio = "45min";
let frequenciaSemanal = 6;
let atingiuMeta = true;
let compartilhouNasRedesSociais = true;
let duracao
let recompensa = 0;

if (tipoDeExercicio ==="caminhada") {
    recompensa += 10;
} else if (tipoDeExercicio=== "corrida") {
    recompensa += 20;
} else if (tipoDeExercicio ==="ciclismo") {
    recompensa += 15;
}
if (duracao > 30) {
    recompensa += 10;
}

if (frequenciaSemanal > 3){
    recompensa += 20
}
if (atingiuMeta) {
    recompensa += 30
}
if (compartilhouNasRedesSociais) {
    recompensa += 5
}
console.log("Total da recompensa: " +recompensa+"  pontos");