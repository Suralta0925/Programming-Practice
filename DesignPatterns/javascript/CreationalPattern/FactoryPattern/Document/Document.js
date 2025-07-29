"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.txtDocument = void 0;
class txtDocument {
    addText(text) {
        console.log(`added the text ${text} in the document`);
    }
    save(path) {
        console.log(`Document is saved at ${path}`);
    }
}
exports.txtDocument = txtDocument;
class pdfDoc {
    addText(text) {
        console.log(`added the text ${text} in pdf`);
    }
    save(path) {
        console.log(`PDF is saved at ${path}`);
    }
}
class MobiDocument {
    addText(text) {
        console.log(`added the text ${text} in MobiDocumen`);
    }
    save(path) {
        console.log(`PDF is saved at ${path}`);
    }
}
