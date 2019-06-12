NHtml.Tag.ol = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'ol'
    }
    static create(parent) {
        return new NHtml.Tag.ol(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'ol', {
    get() {
        return NHtml.Tag.ol.create(this.parent);
    }
});