NHtml.Tag.footer = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'footer'
    }
    static create(parent) {
        return new NHtml.Tag.footer(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'footer', {
    get() {
        return NHtml.Tag.footer.create(this.parent);
    }
});