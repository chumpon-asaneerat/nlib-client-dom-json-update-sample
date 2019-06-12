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
