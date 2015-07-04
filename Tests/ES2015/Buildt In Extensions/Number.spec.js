describe("Number", ()=>{

    describe(".isNaN", ()=>{
        it("Should be able to detect NaN", ()=>{
            expect(Number.isNaN(NaN)).toBe(true);
        });
    });

    describe(".isInteger", ()=>{
        it("Should be able to detect Integer", ()=>{
            expect(Number.isInteger(NaN)).toBe(false);
            expect(Number.isInteger(0)).toBe(true);
            expect(Number.isInteger(9999999999999999999999999999999999999999999999999999999999999999999999)).toBe(true);
        });
    });

    describe(".isSafeInteger", ()=>{
        it("Should be able to detect SafeInteger", ()=>{
            expect(Number.isSafeInteger(NaN)).toBe(false);
            expect(Number.isSafeInteger(Math.pow(2,53))).toBe(false);
            expect(Number.isSafeInteger(Math.pow(2,52))).toBe(true);
        });
    });



});

