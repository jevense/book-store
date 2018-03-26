BOOK.effects = function () { };
BOOK.effects.moveToLeft = function (obj) {
    Elf.effects({
        effectName: "moveToLeft",
        effectArgs: {
            targetObj: obj,
            duration: Elf.effects.DefaultDuration
        }
    });
};

BOOK.effects.moveToCentral = function (obj) {
    Elf.effects({
        effectName: "moveToCentral",
        effectArgs: {
            targetObj: obj,
            duration: Elf.effects.DefaultDuration
        }
    });
};

BOOK.effects.moveToCentralPosition = function (obj, left) {
    Elf.effects({
        effectName: "moveToCentralPosition",
        effectArgs: {
            targetObj: obj,
            duration: Elf.effects.DefaultDuration,
            left: left
        }
    });
};

BOOK.effects.moveToRight = function (obj) {
    Elf.effects({
        effectName: "moveToRight",
        effectArgs: {
            targetObj: obj,
            duration: Elf.effects.DefaultDuration
        }
    });
};


BOOK.effects.hide = function (obj) {
    if (!obj.isHidden) {
        Elf.effects.appendClass(obj, "hide");
        obj.isHidden = true;
    }
};

BOOK.effects.showHidden = function (obj) {
    if (obj.isHidden) {
        Elf.effects.restoreClass(obj);
        obj.isHidden = false;
    }
};

BOOK.effects.addShadow = function (obj) {
    if (!obj.isShadowed) {
        Elf.effects.appendClass(obj, "skin_shadow");
        obj.isShadowed = true;
    }
};

BOOK.effects.removeShadow = function (obj) {
    if (obj.isShadowed) {
        Elf.effects.restoreClass(obj);
        obj.isShadowed = false;
    }
};

BOOK.effects.singleSelect = function (obj, list, selectedClass) {
    if (!obj.isSelected) {
        Elf.effects.appendClass(obj, selectedClass);
        obj.isSelected = true;

        Elf.algorithm.iterateValues({
            collection: list,
            handler: function (item) {
                if (item != obj) {
                    BOOK.effects.unSelected(item);
                }
            }
        });
    }
};

BOOK.effects.selectOrUnSelect = function (obj, list, allowMulti, selectedClass) {
    if (obj.isSelected) {
        Elf.effects.restoreClass(obj);
        obj.isSelected = false;
    }
    else {
        Elf.effects.appendClass(obj, selectedClass);
        obj.isSelected = true;


        if (!allowMulti) {
            Elf.algorithm.iterateValues({
                collection: list,
                handler: function (item) {
                    if (item.selectionContent != obj) {
                        BOOK.effects.unSelected(item.selectionContent);
                    }
                }
            });
        }
    }
};

BOOK.effects.selected = function (obj, selectedClass) {
    if (!obj.isSelected) {
        Elf.effects.appendClass(obj, selectedClass);
        obj.isSelected = true;
    }
};

BOOK.effects.unSelected = function (obj) {
    if (obj.isSelected) {
        Elf.effects.restoreClass(obj);
        obj.isSelected = false;
    }
};

BOOK.effects.enableVScroll = function (obj) {
    obj.className = obj.className ? obj.className + " autoOverflowY" : "autoOverflowY";
    Elf.xEvents.onXDragging(obj, function (data) {// for scroll function in mobile
        obj.scrollTop += (-1) * data.args.draggedY;
    });
};