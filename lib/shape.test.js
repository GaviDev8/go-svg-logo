const { Square, Triangle, Circle } = require(`../lib/shapes`)

describe('Circle', () => {
    test('generateSVG() should generate correct SVG code for circle', () => {
        // Test circle SVG code generation
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="green" />`
        const circle = new Circle()
        circle.setColor("green")
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test('should accept a fillColor input', () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="purple" />`
        const circle = new Circle()
        circle.setColor("purple")
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG)
    });
});

describe('Triangle', () => {
    test('generateSVG() should generate correct SVG code for triangle', () => {
        // Test triangle SVG code generation
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        const triangle = new Triangle()
        triangle.setColor("blue")
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test('should accept a fillColor input', () => {
        const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`
        const triangle = new Triangle()
        triangle.setColor("orange")
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});

describe('Square', () => {
    test('generateSVG() should generate correct SVG code for square', () => {
        // Test square SVG code generation
        const expectedSVG = `<rect x="90" width="120" height="120" fill="red" />`
        const square = new Square()
        square.setColor("red")
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    test('should accept a fillColor input', () => {
        const expectedSVG = `<rect x="90" width="120" height="120" fill="yellow" />`
        const square = new Square()
        square.setColor("yellow")
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
});