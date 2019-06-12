NHtml.Tag.bdi = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'bdi'
    }
    static create(parent) {
        return new NHtml.Tag.bdi(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'bdi', {
    get() {
        return NHtml.Tag.bdi.create(this.parent);
    }
});