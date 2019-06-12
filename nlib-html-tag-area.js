NHtml.Tag.area = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'area'
    }
    static create(parent) {
        return new NHtml.Tag.area(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'area', {
    get() {
        return NHtml.Tag.area.create(this.parent);
    }
});