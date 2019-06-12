NHtml.Tag.h6 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h6'
    }
    static create(parent) {
        return new NHtml.Tag.h6(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h6', {
    get() {
        return NHtml.Tag.h6.create(this.parent);
    }
});
