NHtml.Tag.textarea = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'textarea'
    }
    static create(parent) {
        return new NHtml.Tag.textarea(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'textarea', {
    get() {
        return NHtml.Tag.textarea.create(this.parent);
    }
});