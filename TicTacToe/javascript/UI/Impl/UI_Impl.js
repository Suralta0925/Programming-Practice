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
        }
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
const template = document.getElementById("startArea");
const doc = template.content.cloneNode(true);
const startScreen = document.getElementById("main");
startScreen === null || startScreen === void 0 ? void 0 : startScreen.appendChild(doc);
window.onload = () => {
    UIFactory.createUI(UIType.showScreen).showUI("startArea");
};
setTimeout(() => {
    const startBtn = startScreen === null || startScreen === void 0 ? void 0 : startScreen.querySelector("#startBtn");
    const closeBtn = startScreen === null || startScreen === void 0 ? void 0 : startScreen.querySelector("#close");
    console.log(startBtn);
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", () => {
        UIFactory.createUI(UIType.PopUp).showUI("open");
    });
    closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
        UIFactory.createUI(UIType.PopUp).showUI("close");
    });
}, 100);
export {};
