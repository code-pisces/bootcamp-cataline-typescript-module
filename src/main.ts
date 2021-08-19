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

// never: usado em exceções como funções que geram erros ou loops infinitos

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

// TIPANDO OBJETOS

/* mostrar a cidade do usuário
type UF = "PE" | "SP" | "MG"

interface User {
  name: string,
  address: { 
    city: string,
		UF: UF
  }

  sayHello: () => void;
}

function showCity(user: User) {
	user.sayHello = () => console.log("Cataline");
	return user.address.city;
}

let users: User[];
users[0].address.city// mesmo sem valor o ts fornece a intelisense


interface User {
  name: string;
  address?: {
    city: string;
    UF: string;
  };
}

function showCity(user: User) {
  return user.address ? user.address.city : "não existe";


function showCity(user: User) {
  return user.address?.city;
}

const response = {
  name: "Gustavo",
  address: { city: "Tangamandápio", UF: "SND" },
};

console.log(showCity(response));

<---------- Type objects ---------->

interface User {
  readonly name: string;
	age: number;
}

let user: User = {
  name: "Gustavo Amorim",
	age: 15,
}

user.age = 23
user.name = 'João Silva'

interface Veiculo {
  rodas: number;
	acelerar: () => void;
	frear: () => void;
}

interface Moto extends Veiculo { // para unir duas interfaces
	capacete: boolean;
	empinar: () => void;
}

let bross: Moto;
bross.empinar;

interface Veiculo {
  rodas: number;
	acelerar: () => void;
	frear?: () => void;
}

class CriarVeiculo implements Veiculo {
  rodas: number;

  constructor(rodas: number) {
    this.rodas = rodas
  }
  
  acelerar() {
    console.log('qualquer coisa');
  }
}

interface Post {
  id: number;
	title: string;
	description: string;
}

// Pick & Omit

//type PostPreview = Pick<Post, 'id' | 'title'>
type PostPreview = Omit<Post, 'id' | 'title'>

let post: PostPreview;

post.description;

<---------- Permitindo Javascript ---------->

import { sum } from './calculator.js';

console.log(sum(1, 2))

<---------- Lidando com dependências---------->

import axios from "axios";
import SimpleBar from "simplebar";
import onscreen from "onscreen";

const content = document.querySelector("#content") as HTMLElement;

const simplebar = new SimpleBar(content, { autoHide: true });

axios.get("/todos", {});

import users from "@/controllers/http/Users";

users();

<---------- Decorators -------->
// Decorator - para fazer anotação da versão da api

function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setApiVersion("1.0.0")
class API {}

console.log(new API())

*/