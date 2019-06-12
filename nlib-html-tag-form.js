NHtml.Tag.form = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'form'
    }
    static create(parent) {
        return new NHtml.Tag.form(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'form', {
    get() {
        return NHtml.Tag.form.create(this.parent);
    }
});
