NHtml.Tag.title = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'title'
    }
    static create(parent) {
        return new NHtml.Tag.title(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'title', {
    get() {
        return NHtml.Tag.title.create(this.parent);
    }
});