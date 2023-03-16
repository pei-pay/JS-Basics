window.name = 'John'
const person = {
  name: 'Tom',
  hello: () => {
    console.log('Hello ' + this.name)
  }
}

person.hello()
