const fishbash = require("./fishbash");

test("fishbash for number 5", () => {
	const result = [1, 2, "fish", 4, "bash"];
	expect(fishbash(5)).toEqual(result);
});

test("fishbash for number 9", () => {
	const result = [1, 2, "fish", 4, "bash", "fish", 7, 8, "fish"];
	expect(fishbash(9)).toEqual(result);
});

test("fishbash for number 15", () => {
	const result = [
		1,
		2,
		"fish",
		4,
		"bash",
		"fish",
		7,
		8,
		"fish",
		"bash",
		11,
		"fish",
		13,
		14,
		"fishbash",
	];
	expect(fishbash(15)).toEqual(result);
});
