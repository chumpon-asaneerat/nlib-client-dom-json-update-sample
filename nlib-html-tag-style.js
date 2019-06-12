NHtml.Tag.style = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'style'
    }
    static create(parent) {
        return new NHtml.Tag.style(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'style', {
    get() {
        return NHtml.Tag.style.create(this.parent);
    }
});