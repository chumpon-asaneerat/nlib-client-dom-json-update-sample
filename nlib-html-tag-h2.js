NHtml.Tag.h2 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h2'
    }
    static create(parent) {
        return new NHtml.Tag.h2(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h2', {
    get() {
        return NHtml.Tag.h2.create(this.parent);
    }
});
