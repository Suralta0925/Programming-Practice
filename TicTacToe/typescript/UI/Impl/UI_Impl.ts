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
    showUI(id:string): HTMLElement | null {
            const template = document.getElementById(id) as HTMLTemplateElement;
            const main = document.getElementById('main') as HTMLDivElement;
            if (main && template){
                const content = template.content.cloneNode(true);
                main.innerHTML = "";
                main.appendChild(content);
                return main;
            }
            return null;
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

        

window.onload = () => {
    const ui = UIFactory.createUI(UIType.showScreen) as screen;
    const container = ui.showUI("startArea");

    const startBtn = container?.querySelector("#startBtn") as HTMLButtonElement;
    const closeBtn = container?.querySelector("#close") as HTMLButtonElement;
    
    console.log(startBtn);
    startBtn?.addEventListener("click", (): void => {
        UIFactory.createUI(UIType.PopUp).showUI("open")
    })

    closeBtn?.addEventListener("click", (): void => {
        UIFactory.createUI(UIType.PopUp).showUI("close")
    })
}

    