NHtml.Tag.center = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'center'
    }
    static create(parent) {
        return new NHtml.Tag.center(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'center', {
    get() {
        return NHtml.Tag.center.create(this.parent);
    }
});