NHtml.Tag.h3 = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'h3'
    }
    static create(parent) {
        return new NHtml.Tag.h3(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'h3', {
    get() {
        return NHtml.Tag.h3.create(this.parent);
    }
});