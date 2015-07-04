describe("Array", function () {
    describe("from", ()=> {

        it("Should know from", ()=> {
            expect(Array.from).toBeDefined();
        });

        it("return a array from a interable", ()=>{
            var newArr = Array.from(5);
            expect(newArr[0]).toBe(0);
            expect(newArr[1]).toBe(1);
            expect(newArr[2]).toBe(2);
            expect(newArr[3]).toBe(3);
            expect(newArr[4]).toBe(4);
            expect(newArr.length).toBe(5);
        });

        it("yolo", ()=> {
            var yolo = 2;
            var ampFunc = Array.from(yolo, (it)=>{ return it + "yo"; });
            expect(ampFunc[0]).toBe("0yo");
            expect(ampFunc[1]).toBe("1yo");
        });

    });
});