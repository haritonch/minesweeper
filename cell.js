function Cell(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i*w;
    this.y = j*w;
    this.w = w;
    this.mine = false;
    this.revealed = false;
    this.neighborCount = 0;
}

Cell.prototype.show = function() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed){
        if (this.mine) {
            fill(0);
            ellipse(this.i*w+w/2, this.j*w+w/2, w/2, w/2);
        }

        else {
            fill(200);
            rect(this.x, this.y, this.w, this.w);
            textAlign(CENTER);
            fill(0);
            if (this.neighborCount!=0){
                text(this.neighborCount, this.x+this.w/2, this.y+3*w/4);
            }

        }
    }
}

Cell.prototype.countNeighbors = function() {
    if (this.mine){
        this.neighborCount = -1;
    }
    for (var i=-1; i<=1; i++){
        for (var j=-1; j<=1; j++){
            if (this.i+i>-1 && this.i+i<cols && this.j+j>-1 && this.j+j<rows){
                var neighbor = grid[this.i+i][this.j+j];
                if (neighbor.mine) {
                    this.neighborCount++;
                }
            }
        }
    }
}

Cell.prototype.contains = function(x, y) {
    return (x > this.x && x<this.x+this.w && y>this.y && y<this.y+this.w);
}

Cell.prototype.reveal = function() {
    if (this.revealed == false) {
        this.revealed = true;
        if (this.neighborCount == 0 && !this.mine){
            for (var i=-1; i<2; i++) {
                for (var j=-1; j<2; j++){
                    if (this.i+i>-1 && this.i+i<cols && this.j+j>-1 && this.j+j<rows){
                        grid[this.i+i][this.j+j].reveal();
                    }
                }
            }
        }
    }
}
