/*
 - Nombre del grupo / cantante / compositor (string).
 - Año de fundación: cuando se formó el grupo (numero).
 - Si está en activo (booleano).
 - Género musical (string).
*/
interface banda {
  nombreDelGrupo: string;
  cantante: string;
  compositor: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

var poprock = "🎵 Pop Rock";
var rock = "🎸 Rock";
var hardrock = "🤘 Hard Rock";
var clasica = "🎼 Clásica";

const banda01: banda = {
  nombreDelGrupo: "The Beatles",
  cantante: "John Lennon, Paul McCartney",
  compositor: "John Lennon, Paul McCartney, George Harrison,Ringo Starr",
  añoFundacion: 1960,
  activo: false,
  genero: poprock,
};

const banda02: banda = {
  nombreDelGrupo: "Queen",
  cantante: "Freddie Mercury",
  compositor: " Roger Taylor, Freddie Mercury, Brian May, y John Deacon",
  añoFundacion: 1970,
  activo: false,
  genero: rock,
};

const banda03: banda = {
  nombreDelGrupo: "AC/DC",
  cantante: "Brian Johnson",
  compositor:
    " Brian Johnson, Malcolm Young, Phil Rudd, Angus Young y Cliff Williams",
  añoFundacion: 1973,
  activo: true,
  genero: hardrock,
};

const banda04: banda = {
  nombreDelGrupo: "Ludwig van Beethoven",
  cantante: "None",
  compositor: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: clasica,
};

const banda05: banda = {
  nombreDelGrupo: "The Rolling Stones",
  cantante: "Mick Jagger",
  compositor: "Charlie Watts, Ronnie Wood, Mick Jagger y Keith Richards",
  añoFundacion: 1960,
  activo: true,
  genero: rock,
};

const estiloNombre =
  "color:blue; font-size:18px; background:green; font-weight: bold;";

// Banda The Beatles
console.log("%cThe Beatles", estiloNombre);
console.log(banda01);
// Banda Queen
console.log("%cQueen", estiloNombre);
console.log(banda02);
// Banda AC/DC
console.log("%cAC/DC", estiloNombre);
console.log(banda03);
// Banda Ludwig van Beethoven
console.log("%cLudwig van Beethoven", estiloNombre);
console.log(banda04);
// Banda The Rolling Stones
console.log("%cThe Rolling Stones", estiloNombre);
console.log(banda05);
