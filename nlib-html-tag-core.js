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


/**
 * The HTML Tag class.
 */
NHtml.Tag = class {
    /**
     * Create new Html Tag instance.
     * @param {NHtml.Tag} parent The parent tag object.
     */
    constructor(parent) {
        this._parent = parent;
        this._data = new NHtml.Model.Data.Tag();
    }
    /**
     * Gets parent tag.
     * @returns {NHtml.Tag} The parent tag object.
     */
    get parent() { return this._parent; }
    /**
     * Gets tag data model instance.
     * @returns {NHtml.Model.Data.Tag} The tag data model object.
     */
    get data() { return this._data; }
}
