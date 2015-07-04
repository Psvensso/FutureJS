import x from "./es6file";
describe("ES5 test", ()=>{
    let x = "5";
    it("can handle the truth", function(){
        expect(true).toBeTruthy();
    });
});