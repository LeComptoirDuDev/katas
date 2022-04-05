import { add } from '../StringCalculator'
describe("StringCalculator", () => {
	it("should return 0 if empty string", () => {
		expect(add("")).toBe(0);
	})

	it("Should return 1 if '1'", () => {
		expect(add("1")).toBe(1);
	})

	it("Should return 3 if '1,2'", () => {
		expect(add("1,2")).toBe(3);
	});

	it("Should return 6 if '1,2,3'", () => {
		expect(add("1,2,3")).toBe(6);
	});

	it("Should return 6 if '1\n2,3'", () => {
		expect(add("1\n2,3")).toBe(6);
	});

	it("Should return 3 if '//;\n1;2'", () => {
		expect(add("//;\n1;2")).toBe(3);
	});

	it("Should return 3 if '//delimiter\n1delimiter2'", () => {
		expect(add("//delimiter\n1delimiter2")).toBe(3);
	});

	it("Should return error 'Negatives not allowed: -1' if '-1'", () => {
		expect(() => add("-1")).toThrowError("Negatives not allowed: -1");
	})

	it("Should return error 'Negatives not allowed: -1,-5' if '-1,3,-5'", () => {
		expect(() => add("-1,3,-5")).toThrowError("Negatives not allowed: -1,-5");
	})

	//END OF STEP 5
})