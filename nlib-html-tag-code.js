NHtml.Tag.code = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'code'
    }
    static create(parent) {
        return new NHtml.Tag.code(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'code', {
    get() {
        return NHtml.Tag.code.create(this.parent);
    }
});