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
