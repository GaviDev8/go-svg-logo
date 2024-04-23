const SVG = require("../lib/svg");
const { Square, Triangle, Circle  } = require(`../lib/shapes`)

describe("SVG", () => {
    test("should render a 300x200 svg element", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
        const svg = new SVG(); 
        const actualSVG = svg.render();
        expect(actualSVG).toEqual(expectedSVG);
    });
    
    test("should append text element", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">A</text></svg>`;
        const svg = new SVG();
        svg.setText("A", "black")
        expect(svg.render()).toEqual(expectedSVG);
    });

    test("should set text message and color", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`;
        const svg = new SVG();
        svg.setText("SVG", "red")
        expect(svg.render()).toEqual(expectedSVG);
    });

    test("should throw error of text exceeds 3 characters", () => {
        const svg = new SVG();
        const actualResult = () => svg.setText("HELLO", "orange");
        expect(actualResult).toThrow("Text must not exceed 3 characters");
    });

    test("should include a shape", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text></svg>`;
        const svg = new SVG();
        const square = new Square();
        square.setColor("red");
        svg.setShape(square);
        svg.setText("SVG", "black");
        const actualResult = svg.render();
        expect(actualResult).toEqual(expectedSVG);
    });    
})
