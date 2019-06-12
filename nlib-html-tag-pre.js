NHtml.Tag.pre = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'pre'
    }
    static create(parent) {
        return new NHtml.Tag.pre(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'pre', {
    get() {
        return NHtml.Tag.pre.create(this.parent);
    }
});