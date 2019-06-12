NHtml.Tag.data = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'data'
    }
    static create(parent) {
        return new NHtml.Tag.data(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'data', {
    get() {
        return NHtml.Tag.data.create(this.parent);
    }
});