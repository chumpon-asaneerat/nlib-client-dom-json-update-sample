NHtml.Tag.bdo = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'bdo'
    }
    static create(parent) {
        return new NHtml.Tag.bdo(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'bdo', {
    get() {
        return NHtml.Tag.bdo.create(this.parent);
    }
});