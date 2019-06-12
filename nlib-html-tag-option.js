NHtml.Tag.option = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'option'
    }
    static create(parent) {
        return new NHtml.Tag.option(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'option', {
    get() {
        return NHtml.Tag.option.create(this.parent);
    }
});
