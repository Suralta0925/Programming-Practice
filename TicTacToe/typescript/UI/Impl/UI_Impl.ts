import { UI } from '../interface/UI';

class popUp implements UI{
    showUI(state: string): void{
        const popup = document.getElementById("popup") as HTMLDivElement;
        if (state == "open"){
            popup.classList.remove("hidden")
        }
        else if(state == "close"){
            popup.classList.add("hidden");
        }
    }
}

class screen implements UI{
    showUI(id:string): void {
            const template = document.getElementById(id) as HTMLTemplateElement;
            const main = document.getElementById('main') as HTMLDivElement;
            if (main && template){
                const content = template.content.cloneNode(true);
                main.innerHTML = "";
                main.appendChild(content);
            }
    }
}

enum UIType{
    PopUp,
    showScreen
}

class UIFactory{
    
    static createUI(type: UIType): UI{
        switch(type){
            case UIType.PopUp:
                return new popUp();
            case UIType.showScreen:
                return new screen();
            default:
                throw new Error("Unknowm UI");
            
        }
    }
}

const template = document.getElementById("startArea") as HTMLTemplateElement;
const doc = template.content.cloneNode(true) as DocumentFragment;
const startScreen = document.getElementById("main")
startScreen?.appendChild(doc)

        

window.onload = () => {
    UIFactory.createUI(UIType.showScreen).showUI("startArea");
}

setTimeout(()=>{
    const startBtn = startScreen?.querySelector("#startBtn") as HTMLButtonElement;
    const closeBtn = startScreen?.querySelector("#close") as HTMLButtonElement;
    console.log(startBtn);
    startBtn?.addEventListener("click", (): void => {
        UIFactory.createUI(UIType.PopUp).showUI("open")
    })

    closeBtn?.addEventListener("click", (): void => {
        UIFactory.createUI(UIType.PopUp).showUI("close")
    })
}, 100)