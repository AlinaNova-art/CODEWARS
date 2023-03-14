function encryption(message) {
  
 

    var newstr = message.toUpperCase().replaceAll('  ', '').split('').join(' ').replaceAll('A', '.-')
         .replaceAll('B', '-...')
         .replaceAll('C', '-.-.')
         .replaceAll('D', '-..') 
         .replaceAll('E', '.')
         .replaceAll('F', '..-.')
         .replaceAll('G', '--.')
         .replaceAll('H', '....')
         .replaceAll('I', '..')
         .replaceAll('J', '.---')
         .replaceAll('K', '-.-')
         .replaceAll('L', '.-..')
         .replaceAll('M', '--')
         .replaceAll('N', '-.')
         .replaceAll('O', '---')
         .replaceAll('P', '.--.')
         .replaceAll('Q', '--.-')
         .replaceAll('R', '.-.')
         .replaceAll('S', '...')
         .replaceAll('T', '-')
         .replaceAll('U', '..-')
         .replaceAll('V', '...-')
         .replaceAll('W', '.--')
         .replaceAll('X', '-..-')
         .replaceAll('Y', '-.--')
         .replaceAll('Z', '--..')
     
         .replaceAll('1', '.----')
         .replaceAll('2', '..---')
         .replaceAll('3', '...--')
         .replaceAll('4', '....-')
         .replaceAll('5', '.....')
         .replaceAll('6', '-....')
         .replaceAll('7', '--...')
         .replaceAll('8', '---..')
         .replaceAll('9', '----.')
         .replaceAll('0', '-----');
     
         
    return newstr;
}