var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*!
 * 引数 x が undefined かどうかを判別します。
 */
function is_undefined(x) {
    return typeof x === 'undefined';
}
/*!
 * 引数 x が関数かどうかを判別します。
 */
function is_function(x) {
    return typeof x === 'function';
}
/*!
 * 引数 x が null かどうかを判別します。
 */
function is_null(x) {
    return x === null;
}
/*!
 *
 */
var Coulomb;
(function (Coulomb) {
    /*!
     * \class Options
     *
     */
    var Options = (function () {
        /*!
         *
         */
        function Options(other) {
            if (other === void 0) { other = null; }
            if (other !== null) {
                this.update(other);
            }
        }
        /*!
         *
         */
        Options.from = function (other) {
            if (is_undefined(other) && is_null(other)) {
                return new Options(other);
            }
            return new Options();
        };
        /*!
         *
         */
        Options.prototype.update = function (other) {
            for (var prop in other) {
                if (is_function(this[prop]) || is_function(other[prop])) {
                    continue;
                }
                this[prop] = other[prop];
            }
        };
        /*!
         *
         */
        Options.prototype.merge = function (other, block) {
            var block_given = !is_undefined(block);
            for (var prop in other) {
                if (is_function(this[prop]) || is_function(other[prop])) {
                    continue;
                }
                if (block_given) {
                    this[prop] = block(other[prop]);
                }
                else {
                    this[prop] = other[prop];
                }
            }
        };
        /*!
         *
         */
        Options.prototype.replace = function (other) {
            for (var prop in this) {
                if (is_function(this[prop])) {
                    continue;
                }
                // delete this[prop];
                this[prop] = void 0;
            }
            for (var prop in other) {
                if (is_function(other[prop]))
                    ;
                {
                    continue;
                }
                this[prop] = other[prop];
            }
        };
        /*!
         *
         */
        Options.prototype.each = function (block) {
            var block_given = !is_undefined(block);
            var results = [];
            for (var prop in this) {
                if (is_function(this[prop])) {
                    continue;
                }
                var result;
                if (block_given) {
                    block(this[prop]);
                }
                result = this[prop];
                results.push(result);
            }
            return results;
        };
        /*!
         *
         */
        Options.prototype.dup = function () {
            return new Options(this);
        };
        /*!
         *
         */
        Options.prototype.has_key = function (key) {
            return !is_undefined(this[key]);
        };
        return Options;
    })();
    Coulomb.Options = Options;
    /*!
     *
     */
    var RequestOptions = (function (_super) {
        __extends(RequestOptions, _super);
        function RequestOptions() {
            _super.apply(this, arguments);
        }
        return RequestOptions;
    })(Coulomb.Options);
    Coulomb.RequestOptions = RequestOptions;
    /*!
     *
     */
    var SslHash = (function (_super) {
        __extends(SslHash, _super);
        function SslHash() {
            _super.apply(this, arguments);
        }
        return SslHash;
    })(Coulomb.Options);
    Coulomb.SslHash = SslHash;
    /*!
     *
     */
    var ConnectionOptions = (function (_super) {
        __extends(ConnectionOptions, _super);
        function ConnectionOptions() {
            _super.apply(this, arguments);
        }
        return ConnectionOptions;
    })(Coulomb.Options);
    Coulomb.ConnectionOptions = ConnectionOptions;
})(Coulomb || (Coulomb = {}));
