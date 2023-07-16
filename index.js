

function InterfaceWASM() {

    var wasmObject;
    
    this.wasmObject = function() {
        return new Error("Interface not set up");
    }

    this.init = function() {
        return new Error("Interface not set up");
    }

    this.run = function() {
        return new Error("Interface not set up");
    }
}

function NodeVM(config) {
    InterfaceWASM.call(this, config);
}

// var phpwasm = require("./node_modules/php-wasm/php-node");
// var php = new phpwasm(`<? echo "test"`);
// php.run(`<? echo "test"`);

// // // Assume add.wasm file exists that contains a single function adding 2 provided arguments
// const fs = require('fs');
// const path = require('path');

// const wasmBuffer = fs.readFileSync(path.join(__dirname, './node_modules/php-wasm/php-node.wasm'));
// // console.log(wasmBuffer);

// WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
//     // Exported function live under instance.exports
//     const php = wasmModule.instance.exports;
//     //   const sum = add(5, 6);
//     //   console.log(php); // Outputs: 11
//     php.run();
// });

