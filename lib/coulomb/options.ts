
module Coulomb {

    function is_undefined(x) {
        return typeof x === 'undefined'
    }

    function is_function(x) {
        return typeof x === 'function';
    }

    interface Struct {
        update(other);
        each(block?);
    }

    /*!
     *
     */
    class Options {
        /*!
         *
         */
        constructor(other) {
            this.update( other );
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
    }
}
