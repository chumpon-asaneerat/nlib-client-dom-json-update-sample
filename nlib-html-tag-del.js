NHtml.Tag.del = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'del'
    }
    static create(parent) {
        return new NHtml.Tag.del(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'del', {
    get() {
        return NHtml.Tag.del.create(this.parent);
    }
});
