NHtml.Tag.select = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'select'
    }
    static create(parent) {
        return new NHtml.Tag.select(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'select', {
    get() {
        return NHtml.Tag.select.create(this.parent);
    }
});