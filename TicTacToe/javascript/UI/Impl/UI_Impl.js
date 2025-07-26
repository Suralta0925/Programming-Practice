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
    const ui = UIFactory.createUI(UIType.showScreen);
    const container = ui.showUI("startArea");
    const startBtn = container === null || container === void 0 ? void 0 : container.querySelector("#startBtn");
    const closeBtn = container === null || container === void 0 ? void 0 : container.querySelector("#close");
    console.log(startBtn);
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", () => {
        UIFactory.createUI(UIType.PopUp).showUI("open");
    });
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        UIFactory.createUI(UIType.PopUp).showUI("close");
    });
};
export {};
