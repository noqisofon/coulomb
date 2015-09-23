/// <reference path="./coulomb/connection.ts" />
var Coulomb;
(function (Coulomb) {
    /*!
     *
     */
    function configure(options, block) {
        if (block === void 0) {
            block = function () { };
        }
        var url = options.url;
        if (options === null || options === void 0) {
            options = default_connection_options.dup();
        }
        else {
            options = default_connection_options.merge(options);
        }
        return new Coulomb.Connection(url, options, block);
    }
})(Coulomb = exports.Coulomb || (exports.Coulomb = {}));
