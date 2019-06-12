NHtml.Tag.s = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 's'
    }
    static create(parent) {
        return new NHtml.Tag.s(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 's', {
    get() {
        return NHtml.Tag.s.create(this.parent);
    }
});
