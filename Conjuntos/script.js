const frutas = new Set();

frutas.add("uva");
frutas.add("manga");
frutas.add("pêssego");
frutas.add("laranja");
frutas.add("pitanga");

console.log(frutas);
console.log(frutas.size());

frutas.delete("manga");


const verduras = new Set();

verduras.add("batata doce");
verduras.add("cenoura");
verduras.add("batata");
verduras.add("beringela");
verduras.add("jiló");

console.log(verduras);
console.log(verduras.size());


const feira_da_semana = new Set();

console.log(feira_da_semana.union(frutas).union(verduras).values());