NHtml.Tag.hr = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'hr'
    }
    static create(parent) {
        return new NHtml.Tag.hr(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'hr', {
    get() {
        return NHtml.Tag.hr.create(this.parent);
    }
});
