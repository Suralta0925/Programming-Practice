import { UI } from '../interface/UI';

class popUp implements UI{
    showUI(state: string, button : string): void{
        const popup = document.getElementById("popup") as HTMLDivElement;
        const gamePaused = document.getElementById("gamePaused") as HTMLDivElement;
        if (state == "open" && button == "popup"){
            popup.classList.remove("hidden")
        }
        else if(state == "close" && button == "popup"){
            popup.classList.add("hidden");
        }
        else if(state == "open" && button == "gamePaused"){
            gamePaused.classList.remove("hidden");
        }
        else if(state == "close" && button == "gamePaused"){
            gamePaused.classList.add("hidden");
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
    const screenUI = UIFactory.createUI(UIType.showScreen) as screen;
    screenUI.showUI("gameArea");

    const main = document.getElementById("main") as HTMLDivElement;
    main.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        switch(target.id){
            case  "startBtn":
                UIFactory.createUI(UIType.PopUp).showUI("open", "popup")
                break;
            case "close":
                UIFactory.createUI(UIType.PopUp).showUI("close", "popup");
                break;
            case "continue":
                screenUI.showUI("gameArea");
                break;
            case "back":
                UIFactory.createUI(UIType.PopUp).showUI("open", "gamePaused");
                break;
            case "unpause":
                UIFactory.createUI(UIType.PopUp).showUI("close", "gamePaused");
                break;
            case "Home":
                screenUI.showUI("startArea");
                break;
        }
        
        
    });
};