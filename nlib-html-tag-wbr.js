NHtml.Tag.wbr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'wbr'
    }
    static create(parent) {
        return new NHtml.Tag.wbr(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'wbr', {
    get() {
        return NHtml.Tag.wbr.create(this.parent);
    }
});