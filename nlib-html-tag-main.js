NHtml.Tag.main = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'main'
    }
    static create(parent) {
        return new NHtml.Tag.main(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'main', {
    get() {
        return NHtml.Tag.main.create(this.parent);
    }
});
