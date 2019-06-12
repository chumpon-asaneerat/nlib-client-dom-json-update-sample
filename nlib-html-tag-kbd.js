NHtml.Tag.kbd = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'kbd'
    }
    static create(parent) {
        return new NHtml.Tag.kbd(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'kbd', {
    get() {
        return NHtml.Tag.kbd.create(this.parent);
    }
});