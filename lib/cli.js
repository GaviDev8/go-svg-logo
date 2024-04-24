const inquirer = require(`inquirer`);
const SVG = require(`./svg`);
const { Square, Triangle, Circle } = require(`./shapes`);
const { writeFile } = require(`fs/promises`);

class CLI {
    run() {
        const questions = [ {
            name: "text",
            type: "input",
            message: "Enter text for the logo (must not exceed 3 characters)",
            validate: (text) => {
                return text.length <= 3 || "The message must not exceed 3 characters";
            }
        },
        {
            name: "textColor",
            type: "input",
            message: "Enter text color"

        },{
            name: "shapeType",
            type: "list",
            choices: ["Triangle", "Square", "Circle"],

        },{
            name: "shapeColor",
            type: "input",
            message: "Enter shape color"

        },

        ]
        return inquirer.prompt(questions).then(({text, textColor, shapeType, shapeColor}) => {
            let shape;
            if(shapeType === "Circle") {
                shape = new Circle();
            } else if(shapeType === "Square") {
                shape = new Square();
            } else if(shapeType === "Triangle") {
                shape = new Triangle();
            }
            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile(`./examples/${text}.svg`, svg.render());
        }).then(() => {
            console.log("SVG file created successfully")
        }).catch((error) => {
            console.log("An error occurred", error)
        });
 }}

 module.exports = CLI;