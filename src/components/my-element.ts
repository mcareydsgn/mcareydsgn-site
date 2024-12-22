

class MyElement extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `<p>Hello world! From my-element</p>`;
    }

}

customElements.define('my-element', MyElement);

export {MyElement}