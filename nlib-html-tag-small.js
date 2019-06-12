NHtml.Tag.small = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'small'
    }
    static create(parent) {
        return new NHtml.Tag.small(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'small', {
    get() {
        return NHtml.Tag.small.create(this.parent);
    }
});