NHtml.Tag.meter = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'meter'
    }
    static create(parent) {
        return new NHtml.Tag.meter(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'meter', {
    get() {
        return NHtml.Tag.meter.create(this.parent);
    }
});