NHtml.Tag.base = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'base'
    }
    static create(parent) {
        return new NHtml.Tag.base(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'base', {
    get() {
        return NHtml.Tag.base.create(this.parent);
    }
});
