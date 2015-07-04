class Person {
    constructor(defaultName){
        this._name = defaultName;
    }
    @readonly
    get name(){
        return this._name;
    }
    set name(value){
        this.name = value;
    }
}

function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}

function readonly(target, name, descriptor) {
    descriptor.writeable = false;
    return descriptor;
}

describe("Decorators", ()=> {

    describe("Getters and settors from example description .md", ()=> {
        let personObjectLiteral, personInstance, defaultName = "Foo";

        beforeEach(()=> {
            personObjectLiteral = {
                name: null
            };
            personInstance = new Person(defaultName);
        });

        it("Object literal can get and set a prop", ()=> {
            personObjectLiteral.name = defaultName;
            expect(personObjectLiteral.name).toBe(defaultName);
            expect(personInstance.name).toBe(defaultName);
        });

        it("Should have access to the Reflect API", ()=>{
            expect(Reflect).toBeDefined();
        });

        describe("Read only", ()=>{

            it("Name should be readonly", ()=>{
                personInstance.name = "Meow";

            });
        });

    });
});