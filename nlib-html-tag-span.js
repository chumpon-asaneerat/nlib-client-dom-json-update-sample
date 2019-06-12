NHtml.Tag.span = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'span'
    }
    static create(parent) {
        return new NHtml.Tag.span(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'span', {
    get() {
        return NHtml.Tag.span.create(this.parent);
    }
});