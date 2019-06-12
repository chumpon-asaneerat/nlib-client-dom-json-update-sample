NHtml.Tag.html = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'html'
    }
    static create(parent) {
        return new NHtml.Tag.html(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'html', {
    get() {
        return NHtml.Tag.html.create(this.parent);
    }
});
