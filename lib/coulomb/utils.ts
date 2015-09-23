/// <reference path="./options.ts" />

module Coulomb.Utils {

    /*!
     *
     */
    export class Headers extends Coulomb.Options {
        /*!
         *
         */
        constructor(other : Headers = null) {
            super();
            this.names = [];
            this.update( other || {} );
        }

        /*!
         *
         */
        names : string[];
    }

    /*!
     *
     */
    export class ParamsHash extends Coulomb.Options {
        hasInclude(key : string) {
            return typeof this[key] === 'undefined';
        }
    }

    /*!
     *
     */
    export class ParallelManager {
    }
}
