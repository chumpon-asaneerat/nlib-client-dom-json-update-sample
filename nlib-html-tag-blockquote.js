NHtml.Tag.blockquote = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'blockquote'
    }
    static create(parent) {
        return new NHtml.Tag.blockquote(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'blockquote', {
    get() {
        return NHtml.Tag.blockquote.create(this.parent);
    }
});