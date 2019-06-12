NHtml.Tag.article = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'article'
    }
    static create(parent) {
        return new NHtml.Tag.article(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'article', {
    get() {
        return NHtml.Tag.article.create(this.parent);
    }
});
