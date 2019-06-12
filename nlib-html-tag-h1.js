NHtml.Tag.h1 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h1'
    }
    static create(parent) {
        return new NHtml.Tag.h1(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h1', {
    get() {
        return NHtml.Tag.h1.create(this.parent);
    }
});
