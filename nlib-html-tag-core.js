/** The NHtml namespace. */
class NHtml {}
/** The NHtml.Model namespace. */
NHtml.Model = class {}
/** The NHtml.Model.Data namespace. */
NHtml.Model.Data = class {}
/** The Html Tag Data Model class. */
NHtml.Model.Data.Tag = class {
    /** Create new instace of Html Tag Data Model. */
    constructor() {
        /** The tag name. */
        this.tagName = '';
        /** The tag attribute. */
        this.attribute = {};
        /** The content data. */
        this.content = '';
        /** The child elements array. */
        this.children = [];
    }
}
/** The NHtml.Model.Json namespace. */
NHtml.Model.Json = class {}
/** The Html Tag Json Model class. */
NHtml.Model.Json.Tag = class {
    /** Create new instance of Html Tag Json Model. */
    constructor() {
        /** The tag name. */
        this["<>"] = '';
        /** The tag attribute. */
        this.attribute = {};
        /** The content data. */
        this.content = '';
        /** The child elements array. */
        this.children = [];
    }
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
        /** @type {NHtml.Model.Data.Tag} The tag data model object. */
        this.data = new NHtml.Model.Data.Tag();

        this._tags = new NHtml.Tag.Tags(this); // setup child tags's parent to current object.
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
    get add() {
        return this._tags;
    }
    get end() {
        if (this.parent) {
            // append to parent array.
            this.parent.data.children.push(this.data);
        }
        return this.parent;
    }
}
/** Constant tags references */
NHtml.Tag.Tags = function(parent) {
    this.parent = parent;
};