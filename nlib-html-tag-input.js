NHtml.Tag.input = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'input'
    }
    static create(parent) {
        return new NHtml.Tag.input(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'input', {
    get() {
        return NHtml.Tag.input.create(this.parent);
    }
});
