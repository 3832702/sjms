class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    alert(`${this.name}`)
  }

  speak() {
    alert(`${this.age}`)
  }
}

let zhang = new Person('zhang', 20)
zhang.eat()
zhang.speak()

let wang = new Person('wang', 21)
wang.eat()
wang.speak()


class Studebt extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    alert(this.number)
  }
}


let xiaoming = new Studebt('xiaoming', '18', '2019293637836')
xiaoming.eat()
xiaoming.speak()
xiaoming.study()
