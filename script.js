class book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  read() {
    return `Estou lendo ${this.title}`
  }
}

let book = new book('Algoritmos para viver', 'Brian', 500)
let otherBook = new book('Um exu em Nova York', 'Cidinha da Silva', 100)

console.log(book, otherBook)

//herança - trazer as propriedades da classe book, ai usa a palavra reservada extends

class book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  read() {
    return `Estou lendo ${this.title}`
  }
}

class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages)
    this.technology = technology
  }
}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos')

console.log(itBook.title)

//encapsulamento - é como se a propriedade ficasse privada

class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

let person = new Person('Victor')
person.name = 'Vi'
console.log(person.name)
