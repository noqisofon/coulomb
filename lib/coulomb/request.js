/// <reference path="./utils.ts" />
var Coulomb;
(function (Coulomb) {
    var Request = (function () {
        function Request() {
        }
        Request.create = function (requst_method, block) {
            var block_given = block !== void 0 && block !== null;
        };
        return Request;
    })();
    Coulomb.Request = Request;
})(Coulomb || (Coulomb = {}));
