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