NHtml.Tag.sub = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'sub'
    }
    static create(parent) {
        return new NHtml.Tag.sub(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'sub', {
    get() {
        return NHtml.Tag.sub.create(this.parent);
    }
});
