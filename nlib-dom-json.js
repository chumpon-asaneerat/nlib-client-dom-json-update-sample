(() => {
    console.clear();

    let model2 = new NHtml.Tag.div();
    model2.content('This is div')
        .add.img
            .attribute('src', 'image.png')
        .end
        .add.div
            .content('The end div')
        .end

    //console.log(model2.data);
    
    console.log(JSON.stringify(model2.data, null, 2));
})();