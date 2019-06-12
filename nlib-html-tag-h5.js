NHtml.Tag.h5 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h5'
    }
    static create(parent) {
        return new NHtml.Tag.h5(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h5', {
    get() {
        return NHtml.Tag.h5.create(this.parent);
    }
});
