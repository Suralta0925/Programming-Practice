"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Document_1 = require("./Document");
class DocumentFactory {
    createDocument(doc) {
        return doc;
    }
}
const docFactory = new DocumentFactory();
let doc = docFactory.createDocument(new Document_1.txtDocument());
doc.addText("Hello World");
doc.save("C:/usr/vince/Downloads/");
