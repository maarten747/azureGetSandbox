exports.searchStock = function  searchStock(requestBody){

    var response = generateAzureHeader(200, "OK", null);
    var data = [];

    // loop over all SKU's in the request
    requestBody.forEach(function(sku){
        var dataElement = {
                            Product: generateAzureProduct(sku),
                            Quantity: 10000,
                            Arrivals:[
                                        {
                                            "Date": "2020-11-02T00:00:00",
                                            "Quantity": 599
                                        }
                                    ]
                        };
        
        // ###############  START   Define your own mocked Stock Quantities here   ############### //
        if(sku == '3661123009775'){
            dataElement.Quantity = 25;
        }
        
        // ###############  END   Define your own mocked Stock Quantities here   ############### //

        data.push(dataElement);
    });

    _.extend(response,{ Data: data});

    return response;

}

function generateAzureProduct(sku, material, colorCode){

    var product = {
                        MaterialCode: material,
                        ColorCode: colorCode,
                        IsSparePart: false
                    }
    if(sku.length == 7 && sku.substring(1,1) == 1){
        _.extend(product, {
                            Id: sku,
                            MaterialCode: sku,
                            IsSparePart: true
                        });
    }
    else{
        _.extend(product, {
                            EAN: sku
                        });
    }
    return product;
}

function generateAzureHeader(code, status, message){
    return {
                Code: code,
                Status: status,
                Message: message
            };
}