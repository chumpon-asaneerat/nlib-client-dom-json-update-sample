NHtml.Tag.summary = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'summary'
    }
    static create(parent) {
        return new NHtml.Tag.summary(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'summary', {
    get() {
        return NHtml.Tag.summary.create(this.parent);
    }
});