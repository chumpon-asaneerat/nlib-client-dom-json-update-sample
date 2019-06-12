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