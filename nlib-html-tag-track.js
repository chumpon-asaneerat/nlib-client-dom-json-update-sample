NHtml.Tag.track = class extends NHtml.Tag {
    constructor(parent) {
        super(parent);
        this.data.tagName = 'track'
    }
    static create(parent) {
        return new NHtml.Tag.track(parent);
    }
}

Object.defineProperty(NHtml.Tag.Tags.prototype, 'track', {
    get() {
        return NHtml.Tag.track.create(this.parent);
    }
});
