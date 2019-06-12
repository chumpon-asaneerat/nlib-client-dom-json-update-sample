NHtml.Tag.dialog = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'dialog'
    }
    static create(parent) {
        return new NHtml.Tag.dialog(parent);
    }
}
Object.defineProperty(NHtml.Tag.Tags.prototype, 'dialog', {
    get() {
        return NHtml.Tag.dialog.create(this.parent);
    }
});