NHtml.Tag.u = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'u'
    }
    static create(parent) {
        return new NHtml.Tag.u(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'u', {
    get() {
        return NHtml.Tag.u.create(this.parent);
    }
});
