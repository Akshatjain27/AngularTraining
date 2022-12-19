var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.display = function () {
            console.log(_this);
        };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var item1 = new Item(1, "car", 500000, "vehicle");
item1.display();
