NHtml.Tag.li = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'li'
    }
    static create(parent) {
        return new NHtml.Tag.li(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'li', {
    get() {
        return NHtml.Tag.li.create(this.parent);
    }
});
