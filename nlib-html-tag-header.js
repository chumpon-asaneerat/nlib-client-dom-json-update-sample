NHtml.Tag.header = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'header'
    }
    static create(parent) {
        return new NHtml.Tag.header(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'header', {
    get() {
        return NHtml.Tag.header.create(this.parent);
    }
});
