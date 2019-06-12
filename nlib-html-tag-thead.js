NHtml.Tag.thead = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'thead'
    }
    static create(parent) {
        return new NHtml.Tag.thead(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'thead', {
    get() {
        return NHtml.Tag.thead.create(this.parent);
    }
});