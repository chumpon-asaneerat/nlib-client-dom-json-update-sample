NHtml.Tag.label = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'label'
    }
    static create(parent) {
        return new NHtml.Tag.label(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'label', {
    get() {
        return NHtml.Tag.label.create(this.parent);
    }
});
