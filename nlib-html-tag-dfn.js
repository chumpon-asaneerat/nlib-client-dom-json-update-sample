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