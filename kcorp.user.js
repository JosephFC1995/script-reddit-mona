// ==UserScript==
// @name         Reddit Place - No author
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Recuperaremos lo que es nuestro por derecho. https://twitter.com/Oswaldo28071486/status/1511081116370968585
// @author       @Oswaldo28071486
// @match        https://hot-potato.reddit.com/embed*
// @icon         
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/CorentinGC/reddit-place-kcorp/raw/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            document.addEventListener("keydown", function(event) {
                if(event.key == "F4"){
                    if (i.style.display === "none") {
                        i.style.display = "block";
                    } else {
                        i.style.display = "none";
                    }
                }
            });
            return i;
        })())
 
    }, false);
 
}
