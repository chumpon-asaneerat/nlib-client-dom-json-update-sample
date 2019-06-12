NHtml.Tag.var = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'var'
    }
    static create(parent) {
        return new NHtml.Tag.var(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'var', {
    get() {
        return NHtml.Tag.var.create(this.parent);
    }
});
