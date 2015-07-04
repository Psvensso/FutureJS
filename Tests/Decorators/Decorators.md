# Decorators

To understand decorators we first must understand some what they are used for.

> Decorators make it possible to annotate and modify classes and properties at design time.
>
> While ES5 object literals support arbitrary expressions in the value position, ES6 classes
> only support literal functions as values. Decorators restore the ability to run code at
> design time, while maintaining a declarative syntax.

Example:
```js
 let myObjectLiteral = {
    name: null
 }

 class Person {
     constructor(defaultName){
         this._name = defaultName;
     }
     get name(){
         return this._name;
     }
     set name(value){
         this.name = value;
     }
 }
```

The name property of this class get installed on the prototype ~like this:
```js
Object.defineProperty(Person.prototype, 'name', {
  value: specifiedFunction,
  enumerable: false,
  configurable: true,
  writable: true
});
```

> A decorator precedes the syntax that defines a property
```js
class Person {
  @readonly
  name() { return `Your name is ${this._name}` }
}
```





### A decorator is:
- an expression
- that evaluates to a function
- that takes the target, name, and property descriptor as arguments
- and optionally returns a property descriptor to install on the target object



### Usefull links
- [Detailed proposal - TC39](https://github.com/jonathandturner/decorators)
- [Wycats says](https://github.com/wycats/javascript-decorators)



