NHtml.Tag.output = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'output'
    }
    static create(parent) {
        return new NHtml.Tag.output(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'output', {
    get() {
        return NHtml.Tag.output.create(this.parent);
    }
});
