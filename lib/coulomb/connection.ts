/// <reference path="./options.ts" />
/// <reference path="./utils.ts" />
/// <reference path="./builder.ts" />
/// <reference path="./request.ts" />

module Coulomb {

    /*!
     *
     */
    function is_a(that, type_name) {
        return typeof that === type_name;
    }

    /*!
     *
     */
    export enum Methods {
        GET = 0,
        POST,
        PUT,
        DELETE,
        HEAD,
        PATCH,
        OPTIONS
    };

    /*!
     *
     */
    export class Connection /* extends Forwardable */ {
        /*!
         * 新しく Coulomb.Connection オブジェクトを作成して返します。
         */
        constructor(url?, options?, block? : (builder : Coulomb.Connection)=>void) {
            var block_given = block !== null;
            if ( is_a( url, 'object' ) ) {
                options = Coulomb.ConnectionOptions.from( url );
                url = options.url;
            } else {
                options = Coulomb.ConnectionOptions.from( options );
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

            if ( options.params === void 0 ) {
                this._params.update( options.params );
            }
            if ( options.headers === void 0 ) {
                this._headers.update( options.headers );
            }

            if ( block_given ) {
                block( this );
            }
        }

        get params() : Coulomb.Utils.ParamsHash { return this._params; }
        set params(other : Coulomb.Utils.ParamsHash) { this._params.replace( other ); }

        get headers() : Coulomb.Utils.Headers { return this._headers; }
        set headers(other : Coulomb.Utils.Headers) { this._headers.replace( other ); }

        /*!
         *
         */
        run_request(method : Methods, url : string, body : string, headers? : Coulomb.Utils.Headers, block?) {
            var block_given = block !== void 0 && block !== null;
            // TODO: method が Methods になかった場合…そんなものは無いかｗ
            var request = this.build_request( Methods[method].toLowerCase(), (request_builder) => {
                if ( url === void 0 ) {
                    request_builder.url = url;
                }
                if ( headers === void 0 ) {
                    request_builder.headers.update( headers );
                }
                if ( body === void 0 ) {
                    request_builder.body = body;
                }
                if ( block_given ) {
                    block( request_builder );
                }
            } );
            return request;
        }

        /*!
         *
         */
        build_request(method : string, block?) {
            var block_given = block !== void 0 && block !== null;

            Coulomb.Request.create( method, (request_builder) => {
                request_builder.params = this._params.dup();
                request_builder.headers = this._headers.dup();
                request_builder.options  = this._options.merge( { proxy: this._proxy } );

                if ( block_given ) {
                    block( request_builder );
                }
            } );
        }

        private _params : Coulomb.Utils.ParamsHash ;
        private _headers : Coulomb.Utils.Headers;
        private _url_prefix : string;
        private _builder : Coulomb.Builder;
        private _options : Coulomb.Options;
        private _proxy;
        private _ssl : Coulomb.SslHash;
        private _parallel_manager : Coulomb.Utils.ParallelManager;
        private _default_parallel_manager : Coulomb.Utils.ParallelManager;
    }
}
