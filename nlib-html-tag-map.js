NHtml.Tag.map = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'map'
    }
    static create(parent) {
        return new NHtml.Tag.map(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'map', {
    get() {
        return NHtml.Tag.map.create(this.parent);
    }
});
