

/*!
 * 引数 x が undefined かどうかを判別します。
 */
function is_undefined(x) {
    return typeof x === 'undefined'
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
interface Struct {
    update(other);
    each(block?);
    merge(other, block?);
    dup();
    has_key(key : string);
}

module Coulomb {

    /*!
     * \class Options
     * 
     */
    export class Options {
        /*!
         *
         */
        constructor(other = null) {
            if ( other !== null ) {
                this.update( other );
            }
        }

        /*!
         *
         */
        static from(other?) {
            if ( is_undefined( other ) && is_null( other ) ) {
                return new Options( other );
            }
            return new Options();
        }

        /*!
         *
         */
        update(other) {
            for ( var prop in other ) {
                if ( is_function( this[prop] ) || is_function( other[prop] ) ) {
                    continue;
                }
                this[prop] = other[prop];
            }
        }

        /*!
         *
         */
        merge(other, block?) {
            var block_given = !is_undefined( block );
            for ( var prop in other ) {
                if ( is_function( this[prop] ) || is_function( other[prop] ) ) {
                    continue;
                }

                if ( block_given ) {
                    this[prop] = block( other[prop] );
                } else {
                    this[prop] = other[prop];
                }
            }
        }

        /*!
         *
         */
        replace(other) {
            for ( var prop in this ) {
                if ( is_function( this[prop] ) ) {
                    continue;
                }
                // delete this[prop];
                this[prop] = void 0;
            }
            for ( var prop in other ) {
                if ( is_function( other[prop] ) ) ) {
                    continue;
                }
                this[prop] = other[prop];
            }
        }

        /*!
         *
         */
        each(block?) {
            var block_given = !is_undefined( block );

            var results = [];
            for ( var prop in this ) {
                if ( is_function( this[prop] ) ) {
                    continue;
                }

                var result;
                if ( block_given ) {
                    block( this[prop] );
                } 
                result = this[prop];
                results.push( result );
            }
            return results;
        }

        /*!
         *
         */
        dup() {
            return new Options( this );
        }

        /*!
         *
         */
        has_key(key : string) {
            return !is_undefined( this[key] );
        }
    }

    /*!
     *
     */
    export class RequestOptions extends Coulomb.Options {
    }

    /*!
     *
     */
    export class SslHash extends Coulomb.Options {
    }

    /*!
     *
     */
    export class ConnectionOptions extends Coulomb.Options {
    }
}
