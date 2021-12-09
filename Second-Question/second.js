const max = (...numbers) => {
	try {
		if (numbers.length === 0) return null;
		if (numbers[0] === "") throw "Big Error";

		let array = [...numbers].map((n) => {
			if (typeof n == "bigint") return n;
			if (typeof n == "number" && n <= Number.MAX_SAFE_INTEGER) return BigInt(n);
			if (typeof +n === "number" && +n <= Number.MAX_SAFE_INTEGER) return BigInt(+n);

			throw "Big Error";
		});
		return array.reduce((a, b) => (a > b ? a : b));
	} catch (error) {
		return "Big Error";
	}
};

console.log(max(2 ** 53 - 1));