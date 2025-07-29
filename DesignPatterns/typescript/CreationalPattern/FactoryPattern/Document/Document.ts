export interface document{
    addText(text: string):void;
    save(path: string):void;
}

export class txtDocument implements document{
    addText(text: string): void {
        console.log(`added the text ${text} in the document`)
    }
    save(path: string): void {
        console.log(`Document is saved at ${path}`)
    }
    
}

export class pdfDoc implements document{
    addText(text: string): void {
        console.log(`added the text ${text} in pdf`);
    }
    save(path: string): void {
        console.log(`PDF is saved at ${path}`)
    }
}

export class MobiDocument implements document{
    addText(text: string): void {
        console.log(`added the text ${text} in MobiDocumen`);
    }
    save(path: string): void {
        console.log(`PDF is saved at ${path}`)
    }
}