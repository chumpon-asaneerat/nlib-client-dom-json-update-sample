NHtml.Tag.figcaption = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'figcaption'
    }
    static create(parent) {
        return new NHtml.Tag.figcaption(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'figcaption', {
    get() {
        return NHtml.Tag.figcaption.create(this.parent);
    }
});