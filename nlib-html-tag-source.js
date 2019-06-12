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