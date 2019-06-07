// - Class to create HTML Tag element.
class HtmlTag {
    constructor(tagName, parent) {
        this._tagName = tagName;
        this._children = [];
        this._parent = parent;
    }
    get tagName() { return this._tagName; }
    get children() { return this._children; }
    get parent() { return this._parent; }
    /**
     * 
     * @param {string} tagName The HTML Tag Name.
     */
    add(tagName) {
        let result = new HtmlTag(tagName, this);
        this._children.push(result);
        return result;
    }
    child(index) {
        return (index >= 0 && index <= this._children.length - 1) ? this._children[index] : null;
    }
    end() { return this._parent; }
    toJson() {
        let appendJson = (tag) => {
            let curr = {
                "<>": tag.tagName,
                "children": []
            }            
            tag.children.forEach(child => {
                curr.children.push(appendJson(child))
            });
            return curr;
        }
        let result = appendJson(this);
        return JSON.stringify(result, null, 4);
    }
    static create(tagName) {
        return new HtmlTag(tagName, null);
    }
}

// - Class to wrap HTML individual Tags.

// - Class mixin methods.

// - Class to access HTML dom styles.

// - Class to access HTML dom attributes.

// - Class to access HTML dom events.


(() => {
    console.clear();
    console.log('nlib loaded.');
    //let appElem = document.getElementById('app')
    let model = HtmlTag.create('div')
    model
        .add('h1')
            .add('span').end()
        .end()
        .add('div')
            .add('h2').end()
            .add('h3').end()
        .end();
    console.log(model.toJson());
    
})();
