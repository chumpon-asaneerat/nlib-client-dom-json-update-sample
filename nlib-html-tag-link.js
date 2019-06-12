NHtml.Tag.link = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'link'
    }
    static create(parent) {
        return new NHtml.Tag.link(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'link', {
    get() {
        return NHtml.Tag.link.create(this.parent);
    }
});
