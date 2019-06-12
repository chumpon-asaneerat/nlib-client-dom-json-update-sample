NHtml.Tag.a = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'a'
    }
    static create(parent) {
        return new NHtml.Tag.a(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'a', {
    get() {
        return NHtml.Tag.a.create(this.parent);
    }
});
