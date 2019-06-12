NHtml.Tag.dt = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dt'
    }
    static create(parent) {
        return new NHtml.Tag.dt(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'dt', {
    get() {
        return NHtml.Tag.dt.create(this.parent);
    }
});