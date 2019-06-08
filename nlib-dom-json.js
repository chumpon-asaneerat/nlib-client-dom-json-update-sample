(() => {
    console.clear();

    let model2 = new NHtml.Tag.div();
    model2.content('This is div')
        .add.img
            .attribute('alt', 'This is image.')
            .attr
                .src('image.png')
                .width('auto')
                .height(100)
            .end
        .end
        .add.div
            .content('The end div')
        .end

    //console.log(model2.data);    
    console.log(model2.toJson());
})();