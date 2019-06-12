NHtml.Tag.fieldset = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'fieldset'
    }
    static create(parent) {
        return new NHtml.Tag.fieldset(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'fieldset', {
    get() {
        return NHtml.Tag.fieldset.create(this.parent);
    }
});
