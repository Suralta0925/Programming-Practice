import {document, txtDocument} from './Document'
class DocumentFactory{
    
    createDocument(doc: document) : document{
        return doc;
    }
}

const docFactory : DocumentFactory = new DocumentFactory();
let doc : document = docFactory.createDocument(new txtDocument());
doc.addText("Hello World");
doc.save("C:/usr/vince/Downloads/");




