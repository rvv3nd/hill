
const ascii = [
  "␀","␁","␂", "␃","␄",
  "␅","␆", "␇", "␈", "␉",
  "␊", "␋",  "␌",  "␍", "␎",
  "␏", "␐", "␑", "␒","␓",    
  "␔","␕", "␖", "␗","␘",
  "␙", "␚", "␛", "␜", "␝",
  "␞", "␟",  "␡", 
  " ",  "!",   "\"", "#",    
  "$",  "%",   "&",   "'",  "(",    
  ")",  "*",   "+",   ",",  "-",    
  ".",  "/",   "0",   "1",  "2",    
  "3",  "4",   "5",   "6",  "7",    
  "8",  "9",   ":",   ";",  "<",    
  "=",  ">",   "?",   "@",  "A",    
  "B",  "C",   "D",   "E",  "F",    
  "G",  "H",   "I",   "J",  "K",    
  "L",  "M",   "N",   "O",  "P",    
  "Q",  "R",   "S",   "T",  "U",    
  "V",  "W",   "X",   "Y",  "Z",    
  "[",  "\\",  "]",   "^",  "_",    
  "`",  "a",   "b",   "c",  "d",    
  "e",  "f",   "g",   "h",  "i",    
  "j",  "k",   "l",   "m",  "n",    
  "o",  "p",   "q",   "r",  "s",    
  "t",  "u",   "v",   "w",  "x",    
  "y",  "z",   "{",   "|",  "}",    
  "~",         "Ç",   "ü",  "é",
  "â",  "ä",   "à",   "å",  "ç",
  "ê",  "ë",   "è",   "ï",  "î",
  "ì",  "Ä",   "Å",   "É",  "æ",
  "Æ",  "ô",   "ö",   "ò",  "û",
  "ù",  "ÿ",   "Ö",   "Ü",  "ø",
  "£",  "Ø",   "×",   "ƒ",  "á",    
  "í",  "ó",   "ú",   "ñ",  "Ñ",   
  "ª",  "º",   "¿",   "®",  "¬",    
  "½",  "¼",   "¡",   "«",  "»",    
  "░",  "▒",   "▓",   "│",  "┤",
  "Á",  "Â",   "À",   "©",  "╣",
  "║",  "╗",   "╝",   "¢",  "¥",
  "┐",  "└",   "┴",   "┬",  "├",    
  "─",  "┼",   "ã",   "Ã",  "╚",
  "╔",  "╩",   "╦",   "╠",  "═",
  "╬",  "¤",   "ð",   "Ð",  "Ê",
  "Ë",  "È",   "ı",   "Í",  "Î",
  "Ï",  "┘",   "┌",   "█",  "▄",
  "¦",  "Ì",   "▀",   "Ó",  "ß",
  "Ô",  "Ò",   "õ",   "Õ",  "µ",
  "þ",  "Þ",   "Ú",   "Û",  "Ù",
  "ý",  "Ý",   "¯",   "´",  "≡",
  "±",  "‗",   "¾",   "¶",  "§",
  "÷",  "¸",   "°",   "¨",  "·",
  "¹",  "³",   "²",   "■",  " "
]


function dragOverHandlerTxt(event){
  // Prevent default behavior (Prevent file from being opened)
  event.preventDefault();
  DropTxt.value = ""
}
function dropHandlerTxt(ev){
  console.log('Fichero(s) arrastrados');
  
  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();
  
  console.log(math.evaluate('2+2'))
  // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
  for (var i = 0; i < ev.dataTransfer.items.length; i++) {
    // Si los elementos arrastrados no son ficheros, rechazarlos
    if (ev.dataTransfer.items[i].kind === 'file') {
      var file = ev.dataTransfer.items[i].getAsFile();
      console.log('... file[' + i + '].name = ' + file.name);
      const data = file.text();
      data.then(
        text => InputTexto.value = text
      ); //manejador de promesa!
      DropTxt.value = "Archivo cargado"
    }
  }     
}

function dragOverHandlerKey(event){
  // Prevent default behavior (Prevent file from being opened)
  event.preventDefault();
  DropKey.value = ""
}
function dropHandlerKey(ev){
  console.log('Fichero(s) arrastrados');
  
  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();
  
    
  // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
  for (var i = 0; i < ev.dataTransfer.items.length; i++) {
    // Si los elementos arrastrados no son ficheros, rechazarlos
    if (ev.dataTransfer.items[i].kind === 'file') {
      var file = ev.dataTransfer.items[i].getAsFile();
      console.log('... file[' + i + '].name = ' + file.name);
      const data = file.text();
      data.then(
        text => InputClave.value = text
      ); //manejador de promesa!
      DropKey.value = "Clave cargada"
    }
  }     
}



function validaClave(matriz){
  /*Función que recibe una matriz cuadrada 
  y calcula si tiene inversa*/
  if(math.det(matriz) != 0){
    return true
  }
  else{
    return false
  }
}

function getMatrizFromKey(key,n){
  /* Funcion que devuelve una matriz cuadrada
  basada en la raiz cuadrada redondeada hacia arriba
  de la longitud de la clave */
  var matriz = math.zeros(n,n)
  key = key.split("")
  let k = 0 
  console.log(matriz.size())
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++) {
      let idx = ascii.indexOf(key[k++])
      if(idx == -1) idx = 96 //se asigna guión bajo a lo que falte de la matriz
      matriz.subset(math.index(i,j),idx)
    } 
  }
  console.log("key:")
  matriz.forEach(function (value, index) {
    console.log(`${index} : ${value}`) 
  })
  console.log("---------") 
  return matriz
}

function getMatrizFromText(texto,n){
  /*Funcion qeu devuelve una matriz de columnas x n
  donde las columnas se obteienen dividiendo 
  la longitud del texto de entrada entre el N 
  de la matriz cuadrada de la clave 
  Los espacios sobrantes, de existir, 
  se rellenan con un guión bajo */
  const columnas = Math.ceil(texto.length/n);
  var matriz = math.zeros(columnas,n)
  var k = 0
  texto = texto.split("")
  for(let i=0;i<columnas;i++){
    for(let j=0;j<n;j++){
      let idx = ascii.indexOf(texto[k++])
      if(idx == -1) idx = 96 //se asigna guión bajo a lo que falte de la matriz
      matriz.subset(math.index(i,j),idx)
    }
  }
  console.log("Text:")
  matriz.forEach(function (value, index) {
    console.log(`${index} : ${value}`) 
  }) 
  console.log("---------")
  return matriz
}


function codifica(matrizTxt,matrizKey,columns,rows){
  var res = ""
  for(let i=0;i<columns;i++){
    let subMatrix = matrizTxt.subset(math.index([i],math.range(0,rows)))
    subMatrix = math.transpose(subMatrix)

    let multi = math.multiply(matrizKey,subMatrix)
    multi.forEach(function (value, index) {
      res += ascii[(value%(ascii.length))]
    })
  }

  return res
}

function getCodifica(){
  const clave = document.getElementById("InputClave").value
  const N = Math.ceil(math.sqrt(clave.length))
  console.log(N)
  /*N se obtiene así para que la matrix sea cuadrada
  se completara espacios con el simbolo _ (guión bajo)*/
  const claveMatriz = getMatrizFromKey(clave,N)
  if(validaClave(claveMatriz)){
    const textoPlano = document.getElementById("InputTexto").value
    const textoMatriz = getMatrizFromText(textoPlano,N)
    const columnas = Math.ceil(textoPlano.length/N);
    const resultado = codifica(textoMatriz,claveMatriz,columnas,N)
    OutputResultado.value = resultado
  }else{
    alert("La clave ingresada parece no tener inversa. Intenta con otra clave")
  }
}


function guardar(){
  const txt = document.getElementById("OutputResultado").value
  var blob = new Blob([txt], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "hill.txt");
}
/*
GET
http://api.mathjs.org/v4/?expr=multiply(math.matrix([1,4,9,16,25]),math.matrix([2,1,2,6,5]))

det(matrix([[5, 6], [1, 1]]))


PAP
IRO
S--

TRI
PAS

CAM
ALE
ON-

CHI
HUA
HUA


QUESA
DILLA
 SIN 
QUESO



*/