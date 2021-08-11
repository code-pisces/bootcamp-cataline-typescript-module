/*
<---------- Porque Typescript ---------->

**VANTAGENS**

- Evitar erros inesperados
- Documentação durante desenvolvimento
- Acesso as últimas features do Javascript
- Fornece escalabilidade e manutenibilidade
- Uso opcional

**DESVANTAGENS**

- Necessidade de compilação
- Diminui um pouco da produtividade no início


<---------- Any, Void & Never ---------->

// any: permite definir qualquer valor a uma variável, como se a tipagem não importasse, não recomendado o uso.

let stock: any = 89;

stock = null;

// void: é o tipo usado para atribuir à funções sem retorno

function showInformation(name: string = "Yung"): void {
  console.log(name);
}

// never: usado em exceções como fuções que geram erros ou loops infinitos

function error(message: string): never {
    throw new Error(message);
}


<---------- Array, Tuple & Enum ---------->

// array

let items: Array<number>; 
// ou let items: number[];

items = [1, 2, 3, 4]

// tuple: uma atribuição de tipo onde já sabemos a quantidade e o tipo de cada item

let items: [number, string, boolean];

items = [1, "Name", true]

// enum: um conjunto de chaves e valores
enum Colors {
	white = '#FFF',
	black = '#000',
}

let white: Colors = Colors.white;

console.log(white); // resultado: '#fff'



<---------- Type Union ---------->

let age: number | string;

age = 20;

age = 'vinte';

// atribuindo valores como tipos

function showPet(pet: "dog" | "cat" | "zebra") {
  console.log(pet);
}

showPet("dog");



<---------- Type Aliases ---------->

type Pet = "dog" | "cat" | "zebra";

function showPet(pet: Pet) {
  console.log(pet);
}

function displayPet(pet: Pet) {
  console.log(pet);
}



<---------- Type Inference ---------->

let message = 'Cataline';

message = 121212 // erro por causa da inferência de tipo

window.addEventListener('click', (event) => {
  console.log(event.target);
})// o typescript é inteligente o suficiente para determinar o tipo de algumas coisas


<---------- Type Assertion ---------->

const inputName = document.querySelector("#name") as HTMLInputElement;

inputName.value;

*/