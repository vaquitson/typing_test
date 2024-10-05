const palabras = [
  "de", "la", "que", "el", "en", "y", "a", "los", "del", "se", "las", "por", "un", "para", "con", "no", 
  "una", "su", "al", "lo", "como", "mas", "pero", "sus", "le", "ya", "o", "este", "si", "porque", "esta", 
  "entre", "cuando", "todo", "tambien", "asi", "bien", "fue", "muy", "hasta", "desde", "esta", "mi", 
  "donde", "despues", "sin", "sobre", "tambien", "me", "yo", "antes", "ellos", "e", "uno", "ser", "ha", 
  "ni", "su", "como", "que", "solo", "ya", "vez", "ano", "dos", "hay", "algo", "tu", "nada", "entre", 
  "mucho", "sin", "esos", "esa", "otro", "siempre", "menos", "todo", "grande", "hoy", "nunca", "sobre", 
  "dia", "tener", "cada", "todo", "nosotros", "el", "ella", "vez", "tanto", "ahora", "parte", "poco", 
  "lugar", "muchos", "otras", "casi", "forma", "siempre"
];



export function generadorDeFrases(){
  const palabrasAleatorias = [];
  for (let i = 0; i < 30; i++) {
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    palabrasAleatorias.push(palabraAleatoria);
  }
  const palabrasAleatoriasString = palabrasAleatorias.join(" ");
  return palabrasAleatoriasString
}

