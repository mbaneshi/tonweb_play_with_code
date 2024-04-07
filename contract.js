export class MyContract extends Contract {
    constructor(provider, options) {
        options.code = hexToBytes('abcd..');
        super(provider, options);

        this.method.myMethod = ...
    }

    // @override
    createDataCell() {
    }
}
