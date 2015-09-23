var Coulomb;
(function (Coulomb) {
    var Utils;
    (function (Utils) {
        var Headers = (function () {
            function Headers(other) {
                if (other === void 0) { other = null; }
                //super();
                this.names = [];
                this.update(other || {});
            }
            return Headers;
        })();
        Utils.Headers = Headers;
    })(Utils || (Utils = {}));
})(Coulomb || (Coulomb = {}));
