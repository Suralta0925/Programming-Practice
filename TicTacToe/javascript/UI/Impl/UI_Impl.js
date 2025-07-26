class popUp {
    showUI(state) {
        const popup = document.getElementById("popup");
        if (state == "open") {
            popup.classList.remove("hidden");
        }
        else if (state == "close") {
            popup.classList.add("hidden");
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
                UIFactory.createUI(UIType.PopUp).showUI("open");
                break;
            case "close":
                UIFactory.createUI(UIType.PopUp).showUI("close");
                break;
            case "continue":
                screenUI.showUI("gameArea");
                break;
            case "back":
                console.log("working");
                screenUI.showUI("startArea");
                break;
        }
    });
};
export {};
