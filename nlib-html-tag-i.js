NHtml.Tag.i = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'i'
    }
    static create(parent) {
        return new NHtml.Tag.i(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'i', {
    get() {
        return NHtml.Tag.i.create(this.parent);
    }
});
