/// <reference path="./options.ts" />
/// <reference path="./utils.ts" />
/// <reference path="./builder.ts" />
/// <reference path="./request.ts" />
var Coulomb;
(function (Coulomb) {
    /*!
     *
     */
    function is_a(that, type_name) {
        return typeof that === type_name;
    }
    /*!
     *
     */
    (function (Methods) {
        Methods[Methods["GET"] = 0] = "GET";
        Methods[Methods["POST"] = 1] = "POST";
        Methods[Methods["PUT"] = 2] = "PUT";
        Methods[Methods["DELETE"] = 3] = "DELETE";
        Methods[Methods["HEAD"] = 4] = "HEAD";
        Methods[Methods["PATCH"] = 5] = "PATCH";
        Methods[Methods["OPTIONS"] = 6] = "OPTIONS";
    })(Coulomb.Methods || (Coulomb.Methods = {}));
    var Methods = Coulomb.Methods;
    ;
    /*!
     *
     */
    var Connection /* extends Forwardable */ = (function () {
        /*!
         * 新しく Coulomb.Connection オブジェクトを作成して返します。
         */
        function Connection /* extends Forwardable */(url, options, block) {
            var block_given = block !== null;
            if (is_a(url, 'object')) {
                options = Coulomb.ConnectionOptions.from(url);
                url = options.url;
            }
            else {
                options = Coulomb.ConnectionOptions.from(options);
            }
            this._headers = new Coulomb.Utils.Headers();
            this._params = new Coulomb.Utils.ParamsHash();
            this._options = options.request;
            this._ssl = options.ssl;
            this._parallel_manager = null;
            this._default_parallel_manager = options.parallel_manager;
            this._proxy = null;
            this._builder = options.builder || options.new_builder();
            this._url_prefix = url || 'http:/';
            if (options.params === void 0) {
                this._params.update(options.params);
            }
            if (options.headers === void 0) {
                this._headers.update(options.headers);
            }
            if (block_given) {
                block(this);
            }
        }
        Object.defineProperty(Connection /* extends Forwardable */.prototype, "params", {
            get: function () { return this._params; },
            set: function (other) { this._params.replace(other); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Connection /* extends Forwardable */.prototype, "headers", {
            get: function () { return this._headers; },
            set: function (other) { this._headers.replace(other); },
            enumerable: true,
            configurable: true
        });
        /*!
         *
         */
        Connection /* extends Forwardable */.prototype.run_request = function (method, url, body, headers, block) {
            var block_given = block !== void 0 && block !== null;
            // TODO: method が Methods になかった場合…そんなものは無いかｗ
            var request = this.build_request(Methods[method].toLowerCase(), function (request_builder) {
                if (url === void 0) {
                    request_builder.url = url;
                }
                if (headers === void 0) {
                    request_builder.headers.update(headers);
                }
                if (body === void 0) {
                    request_builder.body = body;
                }
                if (block_given) {
                    block(request_builder);
                }
            });
            return request;
        };
        /*!
         *
         */
        Connection /* extends Forwardable */.prototype.build_request = function (method, block) {
            var _this = this;
            var block_given = block !== void 0 && block !== null;
            Coulomb.Request.create(method, function (request_builder) {
                request_builder.params = _this._params.dup();
                request_builder.headers = _this._headers.dup();
                request_builder.options = _this._options.merge({ proxy: _this._proxy });
                if (block_given) {
                    block(request_builder);
                }
            });
        };
        return Connection /* extends Forwardable */;
    })();
    Coulomb.Connection /* extends Forwardable */ = Connection /* extends Forwardable */;
})(Coulomb || (Coulomb = {}));
