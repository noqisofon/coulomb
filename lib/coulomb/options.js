var Coulomb;
(function (Coulomb) {
    /*!
     *
     */
    var Options /*extends Struct*/ = (function () {
        function Options /*extends Struct*/() {
        }
        Options /*extends Struct*/.from = function (value) {
            return new Options().update(value);
        };
        Options /*extends Struct*/.prototype.each = function (block) {
            var block_given = block === null || block === void 0;
            if (!block_given) {
                return this.to_enum();
            }
            return this.members.each(block);
        };
        Options /*extends Struct*/.prototype.update = function (value) {
        };
        return Options /*extends Struct*/;
    })();
    Coulomb.Options /*extends Struct*/ = Options /*extends Struct*/;
})(Coulomb || (Coulomb = {}));
