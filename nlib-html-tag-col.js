NHtml.Tag.col = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'col'
    }
    static create(parent) {
        return new NHtml.Tag.col(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'col', {
    get() {
        return NHtml.Tag.col.create(this.parent);
    }
});