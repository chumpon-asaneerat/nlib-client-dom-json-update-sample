NHtml.Tag.strong = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'strong'
    }
    static create(parent) {
        return new NHtml.Tag.strong(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'strong', {
    get() {
        return NHtml.Tag.strong.create(this.parent);
    }
});
