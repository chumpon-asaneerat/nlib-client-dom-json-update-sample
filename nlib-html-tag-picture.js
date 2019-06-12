NHtml.Tag.picture = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'picture'
    }
    static create(parent) {
        return new NHtml.Tag.picture(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'picture', {
    get() {
        return NHtml.Tag.picture.create(this.parent);
    }
});