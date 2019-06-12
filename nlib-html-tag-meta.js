NHtml.Tag.meta = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'meta'
    }
    static create(parent) {
        return new NHtml.Tag.meta(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'meta', {
    get() {
        return NHtml.Tag.meta.create(this.parent);
    }
});
