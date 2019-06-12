NHtml.Tag.sup = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'sup'
    }
    static create(parent) {
        return new NHtml.Tag.sup(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'sup', {
    get() {
        return NHtml.Tag.sup.create(this.parent);
    }
});
