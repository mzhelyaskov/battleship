function extend(Child, Parent) {
    function F() {
    }

    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype
}

function _(id) {
    return document.getElementById(id);
}
