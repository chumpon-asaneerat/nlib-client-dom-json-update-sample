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
