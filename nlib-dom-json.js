// - Class to create HTML Tag element.
class HtmlTag {
    constructor(tagName, parent) {
        this._tagName = tagName;
        this._children = [];
        this._parent = parent;
        this._tags = new HtmlTags(this);
    }
    get tagName() { return this._tagName; }
    get children() { return this._children; }
    child(index) {
        return (index >= 0 && index <= this._children.length - 1) ? this._children[index] : null;
    }
    get parent() { return this._parent; }
    /**
     * 
     * @param {string} tagName The HTML Tag Name.
     */
    addTag(tagName) { return new HtmlTag(tagName, this); }
    get add() { return this._tags; }
    get end() {
        if (this._parent) {
            // append to parent array.
            this._parent._children.push(this);
        }
        return this._parent;
    }
    toJson() {
        let appendJson = (tag) => {
            let curr = {
                "<>": tag.tagName,
                "children": []
            }            
            tag.children.forEach(child => {
                curr.children.push(appendJson(child));
            });
            return curr;
        }
        let result = appendJson(this);
        return JSON.stringify(result, null, 4);
    }
    static create(tagName) { return new HtmlTag(tagName, null); }
}

// - Class to wrap HTML individual Tags.
class HtmlTags {
    constructor(parent) {
        this._parent = parent;
    }
    // a
    get a() { return new HtmlTag('a', this._parent) };
    get abbr() { return new HtmlTag('abbr', this._parent) };
    get address() { return new HtmlTag('address', this._parent) };
    get area() { return new HtmlTag('area', this._parent) };
    get article() { return new HtmlTag('article', this._parent) };
    get aside() { return new HtmlTag('aside', this._parent) };
    get audio() { return new HtmlTag('audio', this._parent) };
    // b
    get b() { return new HtmlTag('b', this._parent) };
    get base() { return new HtmlTag('base', this._parent) };
    get bdi() { return new HtmlTag('bdi', this._parent) };
    get bdo() { return new HtmlTag('bdo', this._parent) };
    get blockquote() { return new HtmlTag('blockquote', this._parent) };
    get body() { return new HtmlTag('body', this._parent) };
    get br() { return new HtmlTag('br', this._parent) };
    get button() { return new HtmlTag('button', this._parent) };
    // c
    get canvas() { return new HtmlTag('canvas', this._parent) };
    get caption() { return new HtmlTag('caption', this._parent) };
    get center() { return new HtmlTag('center', this._parent) };
    get code() { return new HtmlTag('code', this._parent) };
    get col() { return new HtmlTag('col', this._parent) };
    get colgroup() { return new HtmlTag('colgroup', this._parent) };
    // d
    get data() { return new HtmlTag('data', this._parent) };
    get datalist() { return new HtmlTag('datalist', this._parent) };
    get dd() { return new HtmlTag('dd', this._parent) };
    get del() { return new HtmlTag('del', this._parent) };
    get details() { return new HtmlTag('details', this._parent) };
    get dfn() { return new HtmlTag('dfn', this._parent) };
    get dialog() { return new HtmlTag('dialog', this._parent) };
    get div() { return new HtmlTag('div', this._parent) };
    get dl() { return new HtmlTag('dl', this._parent) };
    get dt() { return new HtmlTag('dt', this._parent) };
    // e
    get em() { return new HtmlTag('em', this._parent) };
    get embed() { return new HtmlTag('embed', this._parent) };
    // f
    get fieldset() { return new HtmlTag('fieldset', this._parent) };
    get figcaption() { return new HtmlTag('figcaption', this._parent) };
    get figure() { return new HtmlTag('figure', this._parent) };
    get footer() { return new HtmlTag('footer', this._parent) };
    get form() { return new HtmlTag('form', this._parent) };
    // h
    get h1() { return new HtmlTag('h1', this._parent) };
    get h2() { return new HtmlTag('h2', this._parent) };
    get h3() { return new HtmlTag('h3', this._parent) };
    get h4() { return new HtmlTag('h4', this._parent) };
    get h5() { return new HtmlTag('h5', this._parent) };
    get h6() { return new HtmlTag('h6', this._parent) };
    get head() { return new HtmlTag('head', this._parent) };
    get header() { return new HtmlTag('header', this._parent) };
    get hr() { return new HtmlTag('hr', this._parent) };
    get html() { return new HtmlTag('html', this._parent) };
    // i
    get i() { return new HtmlTag('i', this._parent) };
    get iframe() { return new HtmlTag('iframe', this._parent) };
    get img() { return new HtmlTag('img', this._parent) };
    get input() { return new HtmlTag('input', this._parent) };
    get ins() { return new HtmlTag('ins', this._parent) };
    // k
    get kbd() { return new HtmlTag('kbd', this._parent) };
    // l
    get label() { return new HtmlTag('label', this._parent) };
    get legend() { return new HtmlTag('legend', this._parent) };
    get li() { return new HtmlTag('li', this._parent) };
    get link() { return new HtmlTag('link', this._parent) };
    // m
    get main() { return new HtmlTag('main', this._parent) };
    get map() { return new HtmlTag('map', this._parent) };
    get mark() { return new HtmlTag('mark', this._parent) };
    get meta() { return new HtmlTag('meta', this._parent) };
    get meter() { return new HtmlTag('meter', this._parent) };
    // n
    get nav() { return new HtmlTag('nav', this._parent) };
    get noscript() { return new HtmlTag('noscript', this._parent) };
    // o
    get object() { return new HtmlTag('object', this._parent) };
    get ol() { return new HtmlTag('ol', this._parent) };
    get optgroup() { return new HtmlTag('optgroup', this._parent) };
    get option() { return new HtmlTag('option', this._parent) };
    get output() { return new HtmlTag('output', this._parent) };
    // p
    get p() { return new HtmlTag('p', this._parent) };
    get param() { return new HtmlTag('param', this._parent) };
    get picture() { return new HtmlTag('picture', this._parent) };
    get pre() { return new HtmlTag('pre', this._parent) };
    get progress() { return new HtmlTag('progress', this._parent) };
    // q
    get q() { return new HtmlTag('q', this._parent) };
    // s
    get s() { return new HtmlTag('s', this._parent) };
    get samp() { return new HtmlTag('samp', this._parent) };
    get script() { return new HtmlTag('script', this._parent) };
    get section() { return new HtmlTag('section', this._parent) };
    get select() { return new HtmlTag('select', this._parent) };
    get small() { return new HtmlTag('small', this._parent) };
    get source() { return new HtmlTag('source', this._parent) };
    get span() { return new HtmlTag('span', this._parent) };
    get strong() { return new HtmlTag('strong', this._parent) };
    get style() { return new HtmlTag('style', this._parent) };
    get sub() { return new HtmlTag('sub', this._parent) };
    get summary() { return new HtmlTag('summary', this._parent) };
    get sup() { return new HtmlTag('sup', this._parent) };
    get svg() { return new HtmlTag('svg', this._parent) };
    // t
    get table() { return new HtmlTag('table', this._parent) };
    get tbody() { return new HtmlTag('tbody', this._parent) };
    get td() { return new HtmlTag('td', this._parent) };
    get template() { return new HtmlTag('template', this._parent) };
    get textarea() { return new HtmlTag('textarea', this._parent) };
    get tfoot() { return new HtmlTag('tfoot', this._parent) };
    get th() { return new HtmlTag('th', this._parent) };
    get thead() { return new HtmlTag('thead', this._parent) };
    get time() { return new HtmlTag('time', this._parent) };
    get title() { return new HtmlTag('title', this._parent) };
    get tr() { return new HtmlTag('tr', this._parent) };
    get track() { return new HtmlTag('track', this._parent) };
    // u
    get u() { return new HtmlTag('u', this._parent) };
    get ul() { return new HtmlTag('ul', this._parent) };
    // v
    get var() { return new HtmlTag('var', this._parent) };
    get video() { return new HtmlTag('video', this._parent) };
    // w
    get wbr() { return new HtmlTag('wbr', this._parent) };
}

// - Class mixin methods.

// - Class to access HTML dom styles.

// - Class to access HTML dom attributes.

// - Class to access HTML dom events.


(() => {
    console.clear();    
    //let appElem = document.getElementById('app')
    
    // use append method
    console.log('generate model json.');
    let model = HtmlTag.create('div');
    model
        .addTag('h1')
            .addTag('span').end
        .end
        .addTag('div')
            .addTag('h2').end
            .addTag('h3').end
        .end;
    console.log(model.toJson());

    // use add property
    console.log('generate model2 json.');
    let model2 = HtmlTag.create('div');
    model2
        .add.h1
            .$_.span.end
        .end
        .add.div
            .add.h2.end
            .add.h3.end
        .end;

    console.log(model2.toJson());    
})();
