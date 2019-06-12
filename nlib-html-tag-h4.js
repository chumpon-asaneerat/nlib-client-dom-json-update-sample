NHtml.Tag.h4 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h4'
    }
    static create(parent) {
        return new NHtml.Tag.h4(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'h4', {
    get() {
        return NHtml.Tag.h4.create(this.parent);
    }
});
