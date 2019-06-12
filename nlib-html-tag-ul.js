NHtml.Tag.ul = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ul'
    }
    static create(parent) {
        return new NHtml.Tag.ul(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'ul', {
    get() {
        return NHtml.Tag.ul.create(this.parent);
    }
});
