var Demo = /** @class */ (function () {
    function Demo() {
        var _this = this;
        this.getValue = function () {
            return _this.value;
        };
        this.setValue = function (value) {
            _this.value = value;
        };
        this.operate = function () {
            var countV = 0;
            var countC = 0;
            var arr = _this.value.split("");
            arr.forEach(function (element) {
                if (_this.isVowel(element)) {
                    countV++;
                }
                else {
                    countC++;
                }
            });
            if (_this.isVowel(arr[0])) {
                return countC;
            }
            else {
                return countV;
            }
        };
        this.isVowel = function (ch) {
            switch (ch) {
                case "a":
                case "A":
                case "e":
                case "E":
                case "i":
                case "I":
                case "o":
                case "O":
                case "u":
                case "U":
                    return true;
                default:
                    return false;
            }
        };
    }
    return Demo;
}());
var obj = new Demo();
obj.setValue("Akshat");
console.log(obj.getValue());
console.log(obj.operate());
