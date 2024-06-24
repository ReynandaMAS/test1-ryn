const isPalindrome = require("./isPalindrome");

test('returns true for "Kasur ini rusak"', () => {
	expect(isPalindrome("Kasur ini rusak")).toBe(true);
});

test('returns false for "hello world"', () => {
	expect(isPalindrome("hello world")).toBe(false);
});

test('returns true for "A man a plan a canal Panama"', () => {
	expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
});

test("returns true for an empty string", () => {
	expect(isPalindrome("")).toBe(true);
});

test("returns true for a single character", () => {
	expect(isPalindrome("a")).toBe(true);
});

test('returns true for "Able was I ere I saw Elba"', () => {
	expect(isPalindrome("Able was I ere I saw Elba")).toBe(true);
});

test('returns false for "OpenAI"', () => {
	expect(isPalindrome("OpenAI")).toBe(false);
});
