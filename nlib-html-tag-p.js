NHtml.Tag.p = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'p'
    }
    static create(parent) {
        return new NHtml.Tag.p(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'p', {
    get() {
        return NHtml.Tag.p.create(this.parent);
    }
});
