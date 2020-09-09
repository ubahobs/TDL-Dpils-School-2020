let rectangle = {
    edge1: 30,
    edge2: 40,
    getArea : function(edge1 = this.edge1, edge2 = this.edge2) {
        return `The area: ${edge1 * edge2}`;
    },
    getInfo : function(edge1 = this.edge1, edge2 = this.edge2) {
        return `The first edge: ${edge1}, and the second edge: ${edge2} of this rectangle`;
    }
};
let circle = {
    r: 20,
    pi: 3.14,
    getArea : function(r = this.r) {
        return `The area: ${this.pi * Math.pow(r, 2)} `;
    },
    getInfo : function(r = this.r) {
        return `The radius of this circle is: ${r}`;
    }
};
let square = {
    edge: 90,
    getArea : function(edge = this.edge) {
        return `The area: ${Math.pow(edge, 2)}`;
    },
    getInfo : function(edge = this.edge) {
        return `The edge of this square is: ${edge}`;
    }
}
let showFigure = (string, edge1, edge2) => {
    if (string == rectangle) {
        return rectangle.getInfo(edge1, edge2) + '\r\n' + rectangle.getArea(edge1, edge2);
    } else if (string == circle) {
        console.log(circle.getInfo(edge1, edge2));
        console.log(circle.getArea(edge1, edge2));
    } else if (string == square) {
        console.log(square.getInfo(edge1, edge2));
        console.log(square.getArea(edge1, edge2));
    } else console.log('Print correct figure');
};

const fs = require('fs');

let printToFile = (object) => {
    fs.writeFile('./Test.txt', object, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('file written!')
        }
    });
}
console.log(showFigure(rectangle, 2));

printToFile(showFigure(rectangle));





