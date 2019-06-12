/** The NHtml namespace. */
class NHtml {}
/** The NHtml.Model namespace. */
NHtml.Model = class {}
/** The Html Tag Model class. */
NHtml.Model.Tag = class {
    /** Create new instace of Html Tag Model. */
    constructor() {
        /** The tag name. */
        this['<>'] = '';
        /** The tag attribute. */
        this.attribute = {};
        /** The content data. */
        this.content = '';
        /** The child elements array. */
        this.children = [];
    }

    get tagName() { return this['<>']; }
    set tagName(value) { this['<>'] = value; }
}

//$ Class to create HTML Tag element.
//*  + supports access tagname, parent, content.
//*  + supports fluent interface.
//*  + supports generate Json string (for save later).
//*  + implements Html Tag in seperated files (1 file per tag).
//*  + supports attribute.
//*  + supports builder to create HTML element dom model and render to html element.
//?  + Reimplement new class to add/remove child tag model.
//?  + supports class List.
//?  + supports css style.
//?  + supports mapping machanism to access generate html element to current json model.
//?  + supports bind between Tag Model and generated HTML dom element model.
//?  + supports event invoke when detected changed Tag model.
//?  + supports load Json string for rebuild Html Tag model.

/** The HTML Tag class. */
NHtml.Tag = class {
    /**
     * Create new Html Tag instance.
     * @param {NHtml.Tag} parent The parent tag object.
     */
    constructor(parent) {
        /** @type {NHtml.Tag} The parent tag object. */
        this.parent = parent;
        /** @type {NHtml.Model.Tag} The tag data model object. */
        this.data = new NHtml.Model.Tag();

        // setup child tags's parent to current object.
        this._tags = new NHtml.Tag.Tags(this);
        // setup attributes's parent to current object.
        this._attrs = new NHtml.Attribute.Attributes(this);
    }
    /** Gets tag name. */
    get tagName() { return this.data.tagName; }
    /**
     * set tag content value.
     * @param {*} value The content value.
     */
    content(value) {
        this.data.content = value;
        return this;
    }
    /**
     * set tag attribute.
     * @param {String} name The attribute name.
     * @param {*} value The attribute value.
     */
    attribute(name, value) { 
        this.data.attribute[name.toLowerCase()] = value;
        return this;
    }
    get add() { return this._tags; }
    get attr() { return this._attrs; }
    get end() {
        if (this.parent) {
            // append to parent array.
            this.parent.data.children.push(this.data);
        }
        return this.parent;
    }
    /** Gets json data model in string. */
    toJson() { return JSON.stringify(this.data, null, 4); }

    render() { return NHtml.Builder.createElement(this.data); }
}
/** Dynamic tags class */
NHtml.Tag.Tags = class {
    /**
     * Create new instance of NHtml.Tag.Tags class.
     * @param {NHtml.Tag} parent The parent tag instance.
     */
    constructor(parent) {
        /** @type {NHtml.Tag} The parent tag object. */
        this.parent = parent;
    }
}

//$ Class to create HTML Attribute element.
//*  + supports fluent interface.

/** The NHtml.Attribute namespace. */
NHtml.Attribute = class { }
/** Dynamic attrubutes class */
NHtml.Attribute.Attributes = class {
    /**
     * Create new instance of NHtml.Attribute.Attributes class.
     * @param {NHtml.Tag} parent The parent tag instance.
     */
    constructor(parent) {
        /** @type {NHtml.Tag} The parent tag object. */
        this.parent = parent;
    }
    /** end setting attribute. */
    get end() { return this.parent; }
}

NHtml.Builder = class {
    static setAttribute(tagModel, el) {
        let attr = tagModel.attribute;
        let keys = Object.keys(attr);
        keys.forEach(key => { el.setAttribute(key, attr[key]) } );
    }
    static createElement(tagModel) {
        let tagName = tagModel["<>"].toLowerCase();
        let el = document.createElement(tagName);
        NHtml.Builder.setAttribute(tagModel, el);

        if (tagModel.content && tagModel.content !== '') {
            el.appendChild(document.createTextNode(tagModel.content));
        }

        tagModel.children.forEach(childObj => {
            let childElm = NHtml.Builder.createElement(childObj);
            el.appendChild(childElm);
        });

        return el;
    }
}
NHtml.Tag.a = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'a'
    }
    static create(parent) {
        return new NHtml.Tag.a(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'a', {
    get() {
        return NHtml.Tag.a.create(this.parent);
    }
});

NHtml.Tag.abbr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'abbr'
    }
    static create(parent) {
        return new NHtml.Tag.abbr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'abbr', {
    get() {
        return NHtml.Tag.abbr.create(this.parent);
    }
});

NHtml.Tag.address = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'address'
    }
    static create(parent) {
        return new NHtml.Tag.address(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'address', {
    get() {
        return NHtml.Tag.address.create(this.parent);
    }
});

NHtml.Tag.area = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'area'
    }
    static create(parent) {
        return new NHtml.Tag.area(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'area', {
    get() {
        return NHtml.Tag.area.create(this.parent);
    }
});

NHtml.Tag.article = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'article'
    }
    static create(parent) {
        return new NHtml.Tag.article(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'article', {
    get() {
        return NHtml.Tag.article.create(this.parent);
    }
});

NHtml.Tag.aside = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'aside'
    }
    static create(parent) {
        return new NHtml.Tag.aside(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'aside', {
    get() {
        return NHtml.Tag.aside.create(this.parent);
    }
});

NHtml.Tag.audio = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'audio'
    }
    static create(parent) {
        return new NHtml.Tag.audio(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'audio', {
    get() {
        return NHtml.Tag.audio.create(this.parent);
    }
});

NHtml.Tag.b = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'b'
    }
    static create(parent) {
        return new NHtml.Tag.b(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'b', {
    get() {
        return NHtml.Tag.b.create(this.parent);
    }
});

NHtml.Tag.base = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'base'
    }
    static create(parent) {
        return new NHtml.Tag.base(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'base', {
    get() {
        return NHtml.Tag.base.create(this.parent);
    }
});

NHtml.Tag.bdi = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'bdi'
    }
    static create(parent) {
        return new NHtml.Tag.bdi(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'bdi', {
    get() {
        return NHtml.Tag.bdi.create(this.parent);
    }
});

NHtml.Tag.bdo = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'bdo'
    }
    static create(parent) {
        return new NHtml.Tag.bdo(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'bdo', {
    get() {
        return NHtml.Tag.bdo.create(this.parent);
    }
});

NHtml.Tag.blockquote = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'blockquote'
    }
    static create(parent) {
        return new NHtml.Tag.blockquote(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'blockquote', {
    get() {
        return NHtml.Tag.blockquote.create(this.parent);
    }
});

NHtml.Tag.body = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'body'
    }
    static create(parent) {
        return new NHtml.Tag.body(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'body', {
    get() {
        return NHtml.Tag.body.create(this.parent);
    }
});

NHtml.Tag.br = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'br'
    }
    static create(parent) {
        return new NHtml.Tag.br(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'br', {
    get() {
        return NHtml.Tag.br.create(this.parent);
    }
});

NHtml.Tag.button = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'button'
    }
    static create(parent) {
        return new NHtml.Tag.button(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'button', {
    get() {
        return NHtml.Tag.button.create(this.parent);
    }
});

NHtml.Tag.canvas = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'canvas'
    }
    static create(parent) {
        return new NHtml.Tag.canvas(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'canvas', {
    get() {
        return NHtml.Tag.canvas.create(this.parent);
    }
});

NHtml.Tag.caption = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'caption'
    }
    static create(parent) {
        return new NHtml.Tag.caption(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'caption', {
    get() {
        return NHtml.Tag.caption.create(this.parent);
    }
});

NHtml.Tag.center = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'center'
    }
    static create(parent) {
        return new NHtml.Tag.center(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'center', {
    get() {
        return NHtml.Tag.center.create(this.parent);
    }
});

NHtml.Tag.code = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'code'
    }
    static create(parent) {
        return new NHtml.Tag.code(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'code', {
    get() {
        return NHtml.Tag.code.create(this.parent);
    }
});

NHtml.Tag.col = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'col'
    }
    static create(parent) {
        return new NHtml.Tag.col(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'col', {
    get() {
        return NHtml.Tag.col.create(this.parent);
    }
});

NHtml.Tag.colgroup = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'colgroup'
    }
    static create(parent) {
        return new NHtml.Tag.colgroup(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'colgroup', {
    get() {
        return NHtml.Tag.colgroup.create(this.parent);
    }
});

NHtml.Tag.data = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'data'
    }
    static create(parent) {
        return new NHtml.Tag.data(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'data', {
    get() {
        return NHtml.Tag.data.create(this.parent);
    }
});

NHtml.Tag.datalist = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'datalist'
    }
    static create(parent) {
        return new NHtml.Tag.datalist(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'datalist', {
    get() {
        return NHtml.Tag.datalist.create(this.parent);
    }
});

NHtml.Tag.dd = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dd'
    }
    static create(parent) {
        return new NHtml.Tag.dd(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dd', {
    get() {
        return NHtml.Tag.dd.create(this.parent);
    }
});

NHtml.Tag.del = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'del'
    }
    static create(parent) {
        return new NHtml.Tag.del(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'del', {
    get() {
        return NHtml.Tag.del.create(this.parent);
    }
});

NHtml.Tag.details = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'details'
    }
    static create(parent) {
        return new NHtml.Tag.details(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'details', {
    get() {
        return NHtml.Tag.details.create(this.parent);
    }
});

NHtml.Tag.dfn = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dfn'
    }
    static create(parent) {
        return new NHtml.Tag.dfn(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dfn', {
    get() {
        return NHtml.Tag.dfn.create(this.parent);
    }
});

NHtml.Tag.dialog = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dialog'
    }
    static create(parent) {
        return new NHtml.Tag.dialog(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dialog', {
    get() {
        return NHtml.Tag.dialog.create(this.parent);
    }
});

NHtml.Tag.div = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'div'
    }
    static create(parent) {
        return new NHtml.Tag.div(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'div', {
    get() {
        return NHtml.Tag.div.create(this.parent);
    }
});

NHtml.Tag.dl = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dl'
    }
    static create(parent) {
        return new NHtml.Tag.dl(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dl', {
    get() {
        return NHtml.Tag.dl.create(this.parent);
    }
});

NHtml.Tag.dt = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dt'
    }
    static create(parent) {
        return new NHtml.Tag.dt(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'dt', {
    get() {
        return NHtml.Tag.dt.create(this.parent);
    }
});

NHtml.Tag.em = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'em'
    }
    static create(parent) {
        return new NHtml.Tag.em(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'em', {
    get() {
        return NHtml.Tag.em.create(this.parent);
    }
});

NHtml.Tag.embed = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'embed'
    }
    static create(parent) {
        return new NHtml.Tag.embed(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'embed', {
    get() {
        return NHtml.Tag.embed.create(this.parent);
    }
});

NHtml.Tag.fieldset = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'fieldset'
    }
    static create(parent) {
        return new NHtml.Tag.fieldset(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'fieldset', {
    get() {
        return NHtml.Tag.fieldset.create(this.parent);
    }
});

NHtml.Tag.figcaption = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'figcaption'
    }
    static create(parent) {
        return new NHtml.Tag.figcaption(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'figcaption', {
    get() {
        return NHtml.Tag.figcaption.create(this.parent);
    }
});

NHtml.Tag.figure = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'figure'
    }
    static create(parent) {
        return new NHtml.Tag.figure(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'figure', {
    get() {
        return NHtml.Tag.figure.create(this.parent);
    }
});

NHtml.Tag.footer = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'footer'
    }
    static create(parent) {
        return new NHtml.Tag.footer(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'footer', {
    get() {
        return NHtml.Tag.footer.create(this.parent);
    }
});

NHtml.Tag.form = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'form'
    }
    static create(parent) {
        return new NHtml.Tag.form(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'form', {
    get() {
        return NHtml.Tag.form.create(this.parent);
    }
});

NHtml.Tag.h1 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h1'
    }
    static create(parent) {
        return new NHtml.Tag.h1(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h1', {
    get() {
        return NHtml.Tag.h1.create(this.parent);
    }
});

NHtml.Tag.h2 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h2'
    }
    static create(parent) {
        return new NHtml.Tag.h2(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h2', {
    get() {
        return NHtml.Tag.h2.create(this.parent);
    }
});

NHtml.Tag.h3 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h3'
    }
    static create(parent) {
        return new NHtml.Tag.h3(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h3', {
    get() {
        return NHtml.Tag.h3.create(this.parent);
    }
});

NHtml.Tag.h4 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h4'
    }
    static create(parent) {
        return new NHtml.Tag.h4(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h4', {
    get() {
        return NHtml.Tag.h4.create(this.parent);
    }
});

NHtml.Tag.h5 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h5'
    }
    static create(parent) {
        return new NHtml.Tag.h5(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h5', {
    get() {
        return NHtml.Tag.h5.create(this.parent);
    }
});

NHtml.Tag.h6 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h6'
    }
    static create(parent) {
        return new NHtml.Tag.h6(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h6', {
    get() {
        return NHtml.Tag.h6.create(this.parent);
    }
});

NHtml.Tag.head = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'head'
    }
    static create(parent) {
        return new NHtml.Tag.head(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'head', {
    get() {
        return NHtml.Tag.head.create(this.parent);
    }
});

NHtml.Tag.header = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'header'
    }
    static create(parent) {
        return new NHtml.Tag.header(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'header', {
    get() {
        return NHtml.Tag.header.create(this.parent);
    }
});

NHtml.Tag.hr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'hr'
    }
    static create(parent) {
        return new NHtml.Tag.hr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'hr', {
    get() {
        return NHtml.Tag.hr.create(this.parent);
    }
});

NHtml.Tag.html = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'html'
    }
    static create(parent) {
        return new NHtml.Tag.html(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'html', {
    get() {
        return NHtml.Tag.html.create(this.parent);
    }
});

NHtml.Tag.i = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'i'
    }
    static create(parent) {
        return new NHtml.Tag.i(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'i', {
    get() {
        return NHtml.Tag.i.create(this.parent);
    }
});

NHtml.Tag.iframe = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'iframe'
    }
    static create(parent) {
        return new NHtml.Tag.iframe(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'iframe', {
    get() {
        return NHtml.Tag.iframe.create(this.parent);
    }
});

NHtml.Tag.img = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'img'
    }
    static create(parent) {
        return new NHtml.Tag.img(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'img', {
    get() {
        return NHtml.Tag.img.create(this.parent);
    }
});

NHtml.Tag.input = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'input'
    }
    static create(parent) {
        return new NHtml.Tag.input(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'input', {
    get() {
        return NHtml.Tag.input.create(this.parent);
    }
});

NHtml.Tag.ins = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ins'
    }
    static create(parent) {
        return new NHtml.Tag.ins(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'ins', {
    get() {
        return NHtml.Tag.ins.create(this.parent);
    }
});

NHtml.Tag.kbd = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'kbd'
    }
    static create(parent) {
        return new NHtml.Tag.kbd(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'kbd', {
    get() {
        return NHtml.Tag.kbd.create(this.parent);
    }
});

NHtml.Tag.label = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'label'
    }
    static create(parent) {
        return new NHtml.Tag.label(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'label', {
    get() {
        return NHtml.Tag.label.create(this.parent);
    }
});

NHtml.Tag.legend = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'legend'
    }
    static create(parent) {
        return new NHtml.Tag.legend(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'legend', {
    get() {
        return NHtml.Tag.legend.create(this.parent);
    }
});

NHtml.Tag.li = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'li'
    }
    static create(parent) {
        return new NHtml.Tag.li(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'li', {
    get() {
        return NHtml.Tag.li.create(this.parent);
    }
});

NHtml.Tag.link = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'link'
    }
    static create(parent) {
        return new NHtml.Tag.link(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'link', {
    get() {
        return NHtml.Tag.link.create(this.parent);
    }
});

NHtml.Tag.main = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'main'
    }
    static create(parent) {
        return new NHtml.Tag.main(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'main', {
    get() {
        return NHtml.Tag.main.create(this.parent);
    }
});

NHtml.Tag.map = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'map'
    }
    static create(parent) {
        return new NHtml.Tag.map(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'map', {
    get() {
        return NHtml.Tag.map.create(this.parent);
    }
});

NHtml.Tag.mark = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'mark'
    }
    static create(parent) {
        return new NHtml.Tag.mark(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'mark', {
    get() {
        return NHtml.Tag.mark.create(this.parent);
    }
});

NHtml.Tag.meta = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'meta'
    }
    static create(parent) {
        return new NHtml.Tag.meta(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'meta', {
    get() {
        return NHtml.Tag.meta.create(this.parent);
    }
});

NHtml.Tag.meter = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'meter'
    }
    static create(parent) {
        return new NHtml.Tag.meter(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'meter', {
    get() {
        return NHtml.Tag.meter.create(this.parent);
    }
});

NHtml.Tag.nav = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'nav'
    }
    static create(parent) {
        return new NHtml.Tag.nav(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'nav', {
    get() {
        return NHtml.Tag.nav.create(this.parent);
    }
});

NHtml.Tag.noscript = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'noscript'
    }
    static create(parent) {
        return new NHtml.Tag.noscript(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'noscript', {
    get() {
        return NHtml.Tag.noscript.create(this.parent);
    }
});

NHtml.Tag.object = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'object'
    }
    static create(parent) {
        return new NHtml.Tag.object(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'object', {
    get() {
        return NHtml.Tag.object.create(this.parent);
    }
});

NHtml.Tag.ol = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ol'
    }
    static create(parent) {
        return new NHtml.Tag.ol(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'ol', {
    get() {
        return NHtml.Tag.ol.create(this.parent);
    }
});

NHtml.Tag.optgroup = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'optgroup'
    }
    static create(parent) {
        return new NHtml.Tag.optgroup(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'optgroup', {
    get() {
        return NHtml.Tag.optgroup.create(this.parent);
    }
});

NHtml.Tag.option = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'option'
    }
    static create(parent) {
        return new NHtml.Tag.option(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'option', {
    get() {
        return NHtml.Tag.option.create(this.parent);
    }
});

NHtml.Tag.output = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'output'
    }
    static create(parent) {
        return new NHtml.Tag.output(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'output', {
    get() {
        return NHtml.Tag.output.create(this.parent);
    }
});

NHtml.Tag.p = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'p'
    }
    static create(parent) {
        return new NHtml.Tag.p(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'p', {
    get() {
        return NHtml.Tag.p.create(this.parent);
    }
});

NHtml.Tag.param = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'param'
    }
    static create(parent) {
        return new NHtml.Tag.param(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'param', {
    get() {
        return NHtml.Tag.param.create(this.parent);
    }
});

NHtml.Tag.picture = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'picture'
    }
    static create(parent) {
        return new NHtml.Tag.picture(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'picture', {
    get() {
        return NHtml.Tag.picture.create(this.parent);
    }
});

NHtml.Tag.pre = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'pre'
    }
    static create(parent) {
        return new NHtml.Tag.pre(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'pre', {
    get() {
        return NHtml.Tag.pre.create(this.parent);
    }
});

NHtml.Tag.progress = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'progress'
    }
    static create(parent) {
        return new NHtml.Tag.progress(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'progress', {
    get() {
        return NHtml.Tag.progress.create(this.parent);
    }
});

NHtml.Tag.q = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'q'
    }
    static create(parent) {
        return new NHtml.Tag.q(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'q', {
    get() {
        return NHtml.Tag.q.create(this.parent);
    }
});

NHtml.Tag.s = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 's'
    }
    static create(parent) {
        return new NHtml.Tag.s(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 's', {
    get() {
        return NHtml.Tag.s.create(this.parent);
    }
});

NHtml.Tag.samp = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'samp'
    }
    static create(parent) {
        return new NHtml.Tag.samp(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'samp', {
    get() {
        return NHtml.Tag.samp.create(this.parent);
    }
});

NHtml.Tag.script = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'script'
    }
    static create(parent) {
        return new NHtml.Tag.script(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'script', {
    get() {
        return NHtml.Tag.script.create(this.parent);
    }
});

NHtml.Tag.section = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'section'
    }
    static create(parent) {
        return new NHtml.Tag.section(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'section', {
    get() {
        return NHtml.Tag.section.create(this.parent);
    }
});

NHtml.Tag.select = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'select'
    }
    static create(parent) {
        return new NHtml.Tag.select(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'select', {
    get() {
        return NHtml.Tag.select.create(this.parent);
    }
});

NHtml.Tag.small = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'small'
    }
    static create(parent) {
        return new NHtml.Tag.small(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'small', {
    get() {
        return NHtml.Tag.small.create(this.parent);
    }
});

NHtml.Tag.source = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'source'
    }
    static create(parent) {
        return new NHtml.Tag.source(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'source', {
    get() {
        return NHtml.Tag.source.create(this.parent);
    }
});

NHtml.Tag.span = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'span'
    }
    static create(parent) {
        return new NHtml.Tag.span(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'span', {
    get() {
        return NHtml.Tag.span.create(this.parent);
    }
});

NHtml.Tag.strong = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'strong'
    }
    static create(parent) {
        return new NHtml.Tag.strong(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'strong', {
    get() {
        return NHtml.Tag.strong.create(this.parent);
    }
});

NHtml.Tag.style = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'style'
    }
    static create(parent) {
        return new NHtml.Tag.style(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'style', {
    get() {
        return NHtml.Tag.style.create(this.parent);
    }
});

NHtml.Tag.sub = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'sub'
    }
    static create(parent) {
        return new NHtml.Tag.sub(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'sub', {
    get() {
        return NHtml.Tag.sub.create(this.parent);
    }
});

NHtml.Tag.summary = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'summary'
    }
    static create(parent) {
        return new NHtml.Tag.summary(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'summary', {
    get() {
        return NHtml.Tag.summary.create(this.parent);
    }
});

NHtml.Tag.sup = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'sup'
    }
    static create(parent) {
        return new NHtml.Tag.sup(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'sup', {
    get() {
        return NHtml.Tag.sup.create(this.parent);
    }
});

NHtml.Tag.svg = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'svg'
    }
    static create(parent) {
        return new NHtml.Tag.svg(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'svg', {
    get() {
        return NHtml.Tag.svg.create(this.parent);
    }
});

NHtml.Tag.table = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'table'
    }
    static create(parent) {
        return new NHtml.Tag.table(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'table', {
    get() {
        return NHtml.Tag.table.create(this.parent);
    }
});

NHtml.Tag.tbody = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tbody'
    }
    static create(parent) {
        return new NHtml.Tag.tbody(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tbody', {
    get() {
        return NHtml.Tag.tbody.create(this.parent);
    }
});

NHtml.Tag.td = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'td'
    }
    static create(parent) {
        return new NHtml.Tag.td(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'td', {
    get() {
        return NHtml.Tag.td.create(this.parent);
    }
});

NHtml.Tag.template = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'template'
    }
    static create(parent) {
        return new NHtml.Tag.template(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'template', {
    get() {
        return NHtml.Tag.template.create(this.parent);
    }
});

NHtml.Tag.textarea = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'textarea'
    }
    static create(parent) {
        return new NHtml.Tag.textarea(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'textarea', {
    get() {
        return NHtml.Tag.textarea.create(this.parent);
    }
});

NHtml.Tag.tfoot = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tfoot'
    }
    static create(parent) {
        return new NHtml.Tag.tfoot(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tfoot', {
    get() {
        return NHtml.Tag.tfoot.create(this.parent);
    }
});

NHtml.Tag.th = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'th'
    }
    static create(parent) {
        return new NHtml.Tag.th(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'th', {
    get() {
        return NHtml.Tag.th.create(this.parent);
    }
});

NHtml.Tag.thead = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'thead'
    }
    static create(parent) {
        return new NHtml.Tag.thead(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'thead', {
    get() {
        return NHtml.Tag.thead.create(this.parent);
    }
});

NHtml.Tag.time = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'time'
    }
    static create(parent) {
        return new NHtml.Tag.time(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'time', {
    get() {
        return NHtml.Tag.time.create(this.parent);
    }
});

NHtml.Tag.title = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'title'
    }
    static create(parent) {
        return new NHtml.Tag.title(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'title', {
    get() {
        return NHtml.Tag.title.create(this.parent);
    }
});

NHtml.Tag.tr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'tr'
    }
    static create(parent) {
        return new NHtml.Tag.tr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'tr', {
    get() {
        return NHtml.Tag.tr.create(this.parent);
    }
});

NHtml.Tag.track = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'track'
    }
    static create(parent) {
        return new NHtml.Tag.track(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'track', {
    get() {
        return NHtml.Tag.track.create(this.parent);
    }
});

NHtml.Tag.u = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'u'
    }
    static create(parent) {
        return new NHtml.Tag.u(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'u', {
    get() {
        return NHtml.Tag.u.create(this.parent);
    }
});

NHtml.Tag.ul = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ul'
    }
    static create(parent) {
        return new NHtml.Tag.ul(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'ul', {
    get() {
        return NHtml.Tag.ul.create(this.parent);
    }
});

NHtml.Tag.var = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'var'
    }
    static create(parent) {
        return new NHtml.Tag.var(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'var', {
    get() {
        return NHtml.Tag.var.create(this.parent);
    }
});

NHtml.Tag.video = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'video'
    }
    static create(parent) {
        return new NHtml.Tag.video(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'video', {
    get() {
        return NHtml.Tag.video.create(this.parent);
    }
});

NHtml.Tag.wbr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'wbr'
    }
    static create(parent) {
        return new NHtml.Tag.wbr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'wbr', {
    get() {
        return NHtml.Tag.wbr.create(this.parent);
    }
});

NHtml.Attribute.src = class {
    static set(parent, value) { parent.attribute('src', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    src(value) { 
        NHtml.Attribute.src.set(this.parent, value);
        return this;
    }
});

NHtml.Attribute.width = class {
    static set(parent, value) { parent.attribute('width', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    width(value) { 
        NHtml.Attribute.width.set(this.parent, value);
        return this;
    }
});

NHtml.Attribute.height = class {
    static set(parent, value) { parent.attribute('height', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    height(value) { 
        NHtml.Attribute.height.set(this.parent, value);
        return this;
    }
});
