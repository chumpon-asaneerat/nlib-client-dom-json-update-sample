NHtml.Attribute.width = class {
    static set(parent, value) { parent.attribute('width', value) }
}

Object.assign(NHtml.Attribute.Attributes.prototype, {
    width(value) { 
        NHtml.Attribute.width.set(this.parent, value);
        return this;
    }
});
