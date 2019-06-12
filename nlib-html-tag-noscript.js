NHtml.Tag.noscript = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'noscript'
    }
    static create(parent) {
        return new NHtml.Tag.noscript(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'noscript', {
    get() {
        return NHtml.Tag.noscript.create(this.parent);
    }
});