NHtml.Tag.img = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'img'
    }
    static create(parent) {
        return new NHtml.Tag.img(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'img', {
    get() {
        return NHtml.Tag.img.create(this.parent);
    }
});
