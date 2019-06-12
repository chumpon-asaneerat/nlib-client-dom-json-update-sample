NHtml.Tag.em = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'em'
    }
    static create(parent) {
        return new NHtml.Tag.em(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'em', {
    get() {
        return NHtml.Tag.em.create(this.parent);
    }
});
