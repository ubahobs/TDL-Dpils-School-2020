let rectangle = {
    edge1: 30,
    edge2: 40,
    getArea : function(edge1 = this.edge1, edge2 = this.edge2) {
        return `The area: ${edge1 * edge2}`;
    },
    getInfo : function() {
        return `The first edge: ${this.edge1}, and the second edge: ${this.edge2} of this rectangle`;
    }
};
let circle = {
    r: 20,
    pi: 3.14,
    getArea : function(r = this.r) {
        return `The area: ${this.pi * Math.pow(r, 2)} `;
    },
    getInfo : function() {
        return `The radius of this circle is: ${this.r}`;
    }
};
let square = {
    edge: 90,
    getArea : function(edge = this.edge) {
        return `The area: {Math.pow(edge, 2)}`;
    },
    getInfo : function() {
        return `The edge of this square is: ${this.edge}`;
    }
}
let showFigure = (string, edge1, edge2) => {
    if (string == rectangle) {
        console.log(rectangle.getInfo());
        console.log(rectangle.getArea(edge1, edge2));
    } else if (string == circle) {
        console.log(circle.getInfo());
        console.log(circle.getArea(edge1, edge2));
    } else if (string == square) {
        console.log(square.getInfo());
        console.log(square.getArea(edge1, edge2));
    } else console.log('Print correct figure');
};

const fs = require('fs');

let printToFile = (object, object2) => {
    fs.writeFile('./Test.txt', object +'\r\n' + object2, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('file written!')
        }
    });
}
showFigure(rectangle, 2);

printToFile(rectangle.getInfo(), rectangle.getArea());





