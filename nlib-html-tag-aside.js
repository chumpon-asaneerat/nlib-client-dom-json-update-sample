NHtml.Tag.aside = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'aside'
    }
    static create(parent) {
        return new NHtml.Tag.aside(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'aside', {
    get() {
        return NHtml.Tag.aside.create(this.parent);
    }
});