NHtml.Attribute.src = class {
    static set(parent, value) { parent.attribute('src', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    src(value) { 
        NHtml.Attribute.src.set(this.parent, value);
        return this;
    }
});
