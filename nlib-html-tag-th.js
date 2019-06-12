NHtml.Tag.th = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'th'
    }
    static create(parent) {
        return new NHtml.Tag.th(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'th', {
    get() {
        return NHtml.Tag.th.create(this.parent);
    }
});