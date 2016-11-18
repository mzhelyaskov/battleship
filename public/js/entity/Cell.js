function Cell(param) {
    this.x = parseInt(param.elem.dataset.x, 10);
    this.y = parseInt(param.elem.dataset.y, 10);
    this.state = param.state;
    this.elem = param.elem;
    this.elem.cell = this;
}

Cell.prototype.isFree = function () {
    return this.state === busyStates.FREE;
};

Cell.prototype.isBusy = function () {
    return !this.isFree();
};

Cell.prototype.getContentElem = function () {
    return this.elem.querySelector(CELL_CONTENT_CSS);
};