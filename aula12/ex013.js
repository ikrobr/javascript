var agora = new Date()
var diasmn = agora.getDay()

console.log (`Hoje é ${diasmn}`)

/*  0-Dom
    1-Seg
    2-Ter
    3-Qua
    4-Qui
    5-Sex
    6-Sáb */

switch (diasmn) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
     case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;

    default:
        console.log('Error')
        break;
}