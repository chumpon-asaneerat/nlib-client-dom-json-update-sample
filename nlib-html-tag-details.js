NHtml.Tag.details = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'details'
    }
    static create(parent) {
        return new NHtml.Tag.details(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'details', {
    get() {
        return NHtml.Tag.details.create(this.parent);
    }
});