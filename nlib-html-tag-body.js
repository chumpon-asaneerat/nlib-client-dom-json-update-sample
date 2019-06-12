NHtml.Tag.body = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'body'
    }
    static create(parent) {
        return new NHtml.Tag.body(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'body', {
    get() {
        return NHtml.Tag.body.create(this.parent);
    }
});