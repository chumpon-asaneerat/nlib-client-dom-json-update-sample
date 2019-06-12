NHtml.Tag.canvas = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'canvas'
    }
    static create(parent) {
        return new NHtml.Tag.canvas(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'canvas', {
    get() {
        return NHtml.Tag.canvas.create(this.parent);
    }
});
