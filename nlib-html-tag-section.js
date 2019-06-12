NHtml.Tag.section = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'section'
    }
    static create(parent) {
        return new NHtml.Tag.section(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'section', {
    get() {
        return NHtml.Tag.section.create(this.parent);
    }
});