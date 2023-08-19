module.export = () => {
    const data = {
        products: []
    }
    for (let i = 0; i<500; i++){
        data.products.push({
            id: i,title:`Product${i}`,
        })
    }
    return data;
}