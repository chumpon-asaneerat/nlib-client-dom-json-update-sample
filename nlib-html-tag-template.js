NHtml.Tag.template = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'template'
    }
    static create(parent) {
        return new NHtml.Tag.template(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'template', {
    get() {
        return NHtml.Tag.template.create(this.parent);
    }
});
