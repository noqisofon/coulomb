/// <reference path="./utils.ts" />

module Coulomb {

    export class Request {
        method : string;
        path : string;
        params : Utils.ParamsHash;
        headers : Utils.Headers;

        static create(requst_method : string, block?) {
            var block_given = block !== void 0 && block !== null;
            
        }
    }
}
