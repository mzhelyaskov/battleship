var avatar = {
	_dragZone: {
		_elem: div#port
	},
	_dragZoneElem: div#port, // элемент, для переноса
	_elem: div#port, // аватар элемета для переноса
	oldParent: parentNode,
    oldNextSibling: nextSibling,
    oldPosition: ~"relative",
    _shiftX: ...,
    _shiftY: ...,
	__proto__: DragAvatar
}