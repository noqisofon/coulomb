/// <reference path="./options.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coulomb;
(function (Coulomb) {
    var Utils;
    (function (Utils) {
        /*!
         *
         */
        var Headers = (function (_super) {
            __extends(Headers, _super);
            /*!
             *
             */
            function Headers(other) {
                if (other === void 0) { other = null; }
                _super.call(this);
                this.names = [];
                this.update(other || {});
            }
            return Headers;
        })(Coulomb.Options);
        Utils.Headers = Headers;
        /*!
         *
         */
        var ParamsHash = (function (_super) {
            __extends(ParamsHash, _super);
            function ParamsHash() {
                _super.apply(this, arguments);
            }
            ParamsHash.prototype.hasInclude = function (key) {
                return typeof this[key] === 'undefined';
            };
            return ParamsHash;
        })(Coulomb.Options);
        Utils.ParamsHash = ParamsHash;
        /*!
         *
         */
        var ParallelManager = (function () {
            function ParallelManager() {
            }
            return ParallelManager;
        })();
        Utils.ParallelManager = ParallelManager;
    })(Utils = Coulomb.Utils || (Coulomb.Utils = {}));
})(Coulomb || (Coulomb = {}));
