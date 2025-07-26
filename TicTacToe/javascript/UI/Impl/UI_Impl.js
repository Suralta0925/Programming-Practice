class popUp {
    showUI(state, button) {
        const popup = document.getElementById("popup");
        const gamePaused = document.getElementById("gamePaused");
        if (state == "open" && button == "popup") {
            popup.classList.remove("hidden");
        }
        else if (state == "close" && button == "popup") {
            popup.classList.add("hidden");
        }
        else if (state == "open" && button == "gamePaused") {
            gamePaused.classList.remove("hidden");
        }
        else if (state == "close" && button == "gamePaused") {
            gamePaused.classList.add("hidden");
        }
    }
}
class screen {
    showUI(id) {
        const template = document.getElementById(id);
        const main = document.getElementById('main');
        if (main && template) {
            const content = template.content.cloneNode(true);
            main.innerHTML = "";
            main.appendChild(content);
            return main;
        }
        return null;
    }
}
var UIType;
(function (UIType) {
    UIType[UIType["PopUp"] = 0] = "PopUp";
    UIType[UIType["showScreen"] = 1] = "showScreen";
})(UIType || (UIType = {}));
class UIFactory {
    static createUI(type) {
        switch (type) {
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
    const screenUI = UIFactory.createUI(UIType.showScreen);
    screenUI.showUI("startArea");
    const main = document.getElementById("main");
    main.addEventListener("click", (event) => {
        const target = event.target;
        switch (target.id) {
            case "startBtn":
                UIFactory.createUI(UIType.PopUp).showUI("open", "popup");
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
export {};
