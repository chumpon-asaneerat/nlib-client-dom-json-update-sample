NHtml.Tag.button = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'button'
    }
    static create(parent) {
        return new NHtml.Tag.button(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'button', {
    get() {
        return NHtml.Tag.button.create(this.parent);
    }
});