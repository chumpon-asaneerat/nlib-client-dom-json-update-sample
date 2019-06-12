NHtml.Tag.caption = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'caption'
    }
    static create(parent) {
        return new NHtml.Tag.caption(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'caption', {
    get() {
        return NHtml.Tag.caption.create(this.parent);
    }
});