NHtml.Tag.legend = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'legend'
    }
    static create(parent) {
        return new NHtml.Tag.legend(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'legend', {
    get() {
        return NHtml.Tag.legend.create(this.parent);
    }
});