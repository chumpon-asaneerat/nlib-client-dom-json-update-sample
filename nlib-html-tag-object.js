NHtml.Tag.object = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'object'
    }
    static create(parent) {
        return new NHtml.Tag.object(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'object', {
    get() {
        return NHtml.Tag.object.create(this.parent);
    }
});