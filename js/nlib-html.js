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
//?  + supports builder to create HTML element dom model and render to html element.
//?  + supports bind between Tag Model and generated HTML dom element model.
//?  + supports event invoke when detected changed Tag model.
//?  + supports class List.
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

NHtml.Tag.div = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'div'
    }
    static create(parent) { return new NHtml.Tag.div(parent); }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'div', {
    get() { return NHtml.Tag.div.create(this.parent); }
});

NHtml.Tag.img = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'img'
    }
    static create(parent) { return new NHtml.Tag.img(parent); }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'img', {
    get() { return NHtml.Tag.img.create(this.parent); }
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