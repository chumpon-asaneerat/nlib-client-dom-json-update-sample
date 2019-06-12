NHtml.Tag.svg = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'svg'
    }
    static create(parent) {
        return new NHtml.Tag.svg(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'svg', {
    get() {
        return NHtml.Tag.svg.create(this.parent);
    }
});