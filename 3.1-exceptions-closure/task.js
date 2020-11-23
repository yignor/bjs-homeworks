//task 1
function parseCount (count) {
	if (isNaN(count)) {
		throw new Error("Невалидное значение");
	}; 
	return Number.parseInt(count);
};
function validateCount (count) {
	try {
		return parseCount(count);
	} catch (e) {
		return e;
	};
return result;
};
//task 2
class Triangle {
	constructor (a, b, c,) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c) < this.a) {
			throw new Error("Треугольник с такими сторонами не существует");
		};
	};
	getPerimeter() {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	};
	getArea() {
		let p = this.getPerimeter() / 2
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return parseFloat(s.toFixed(3));
	};

};
function getTriangle(a, b, c,) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (e) {
		let object = {};
		object.getPerimeter = object.getArea = () => "Ошибка! Треугольник не существует";
		return object;
	}
};