NHtml.Tag.param = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'param'
    }
    static create(parent) {
        return new NHtml.Tag.param(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'param', {
    get() {
        return NHtml.Tag.param.create(this.parent);
    }
});
