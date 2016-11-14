function Ship(params) {
    this.id = generateId();
    this.state = params.state;
    this.y = params.Y;
    this.x = params.X;
    this.length = params.length;
    this.position = params.position;
    this.coords = [];
    this.elem = createShipElem();
    this.elem.ship = this;

    function createShipElem() {
        var width = 1;
        var length = params.length;
        var correction = {right: 0, bottom: params.length - 1};
        if (params.position == HORIZONTAL) {
            width = params.length;
            length = 1;
            correction.right = params.length - 1;
            correction.bottom = 0;
        }
        var scale = 2;
        var shipElem = document.createElement('div');
        shipElem.dataset.id = params.id;
        shipElem.dataset.length = params.length;
        shipElem.dataset.position = params.position;
        shipElem.className = 'ship draggable';
        shipElem.style.width = width * scale + 'em';
        shipElem.style.height = length * scale + 'em';
        shipElem.style.paddingRight = correction.right + 'px';
        shipElem.style.paddingBottom = correction.bottom + 'px';
        return shipElem;
    }

    function generateId() {
        for (var e, t = 12, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", id = "", r = 0; t > r; r++) {
            e = Math.floor(Math.random() * n.length);
            id += n.substring(e, e + 1);
        }
        return id;
    }
}