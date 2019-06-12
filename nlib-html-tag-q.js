NHtml.Tag.q = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'q'
    }
    static create(parent) {
        return new NHtml.Tag.q(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'q', {
    get() {
        return NHtml.Tag.q.create(this.parent);
    }
});
