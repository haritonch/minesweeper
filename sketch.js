function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i=0; i<cols; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid = make2DArray(10, 10);
var w = 20;
var rows;
var cols;

function setup() {
    img = loadImage("assets/hariton.jpg")
    createCanvas(201, 201);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (var i=0; i<cols; i++) {
        for (var j=0; j<rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }
    for (var i=0; i<cols; i++) {
        for (var j=0; j<rows; j++) {
            grid[i][j].countNeighbors();
        }
    }
}

function mousePressed() {
    for (var i=0; i<cols; i++) {
        for (var j=0; j<rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal();
            }
        }
    }
}

function draw() {
    background(255);
    for (var i=0; i<cols; i++) {
        for (var j=0; j<rows; j++) {
            grid[i][j].show();
        }
    }
}