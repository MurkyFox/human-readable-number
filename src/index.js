module.exports = function toReadable (number) {
    const humanNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    const a = number.toString().split('');
    if (number <= 20) {
        return humanNumber[number];       
    } else if (20 < number && number < 30){
        return `${humanNumber[20]} ${humanNumber[a[1]]}`;    
    } else if (number === 30){
        return humanNumber[21];
    } else if (30 < number && number < 40){
        return `${humanNumber[21]} ${humanNumber[a[1]]}`;
    } else if (number === 40){
        return humanNumber[22];
    } else if (40 < number && number < 50){
        return `${humanNumber[22]} ${humanNumber[a[1]]}`;
    } else if (number === 50){
        return humanNumber[23];
    } else if (50 < number && number < 60){
        return `${humanNumber[23]} ${humanNumber[a[1]]}`;
    } else if (number === 60){
        return humanNumber[24];
    } else if (60 < number && number < 70){
        return `${humanNumber[24]} ${humanNumber[a[1]]}`;
    } else if (number === 70){
        return humanNumber[25];
    } else if (70 < number && number < 80){
        return `${humanNumber[25]} ${humanNumber[a[1]]}`;
    } else if (number === 80){
        return humanNumber[26];
    } else if (80 < number && number < 90){
        return `${humanNumber[26]} ${humanNumber[a[1]]}`;
    } else if (number === 90){
        return humanNumber[27];
    } else if (90 < number && number < 100){
        return `${humanNumber[27]} ${humanNumber[a[1]]}`;
    } else if (number === Number(a[0] + '00')){
        return `${humanNumber[a[0]]} ${humanNumber[28]}`;
    } else if (number === Number(a[0] + '30')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[21]}`;
    } else if (number === Number(a[0] + '40')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[22]}`;
    } else if (number === Number(a[0] + '50')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[23]}`;
    } else if (number === Number(a[0] + '60')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[24]}`;
    } else if (number === Number(a[0] + '70')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[25]}`;
    } else if (number === Number(a[0] + '80')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[26]}`;
    } else if (number === Number(a[0] + '90')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[27]}`;
    } else if (number > Number(a[0] + '00') && number <= Number(a[0] + '20')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[Number(a[1]+a[2])]}`;
    } else if (Number(a[0] + '20') < number && number < Number(a[0] + '30')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[20]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '30') < number && number < Number(a[0] + '40')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[21]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '40') < number && number < Number(a[0] + '50')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[22]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '50') < number && number < Number(a[0] + '60')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[23]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '60') < number && number < Number(a[0] + '70')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[24]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '70') < number && number < Number(a[0] + '80')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[25]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '80') < number && number < Number(a[0] + '90')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[26]} ${humanNumber[a[2]]}`;
    } else if (Number(a[0] + '90') < number && number < Number(a[0] + '000')){
        return `${humanNumber[a[0]]} ${humanNumber[28]} ${humanNumber[27]} ${humanNumber[a[2]]}`;
    }
}