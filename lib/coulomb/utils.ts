module Coulomb {
    module Utils {


        export class Headers {
            names : string[];
            constructor(other : Headers = null) {
                //super();
                this.names = [];
                this.update( other || {} );
            }
        }
    }
}
