exports.searchStock = function  searchStock(requestBody){

    var response = generateAzureHeader(200, "OK", null);
    var data = [];

    // loop over all SKU's in the request
    requestBody.forEach(function(sku){
        var dataElement = {
                            Product: generateAzureProduct(sku),
                            Quantity: 16,
                            Arrivals:[
                                        {
                                            "Date": "2018-11-02T00:00:00",
                                            "Quantity": 599
                                        }
                                    ]
                        };
        
        // ###############  START   Define your own mocked Stock Quantities here   ############### //
        if(sku == '1011379' ){
            dataElement.Quantity = 100;
        }
        if(sku == '1000648' ){
            dataElement.Quantity =100;
        }
        
        
        
        // ###############  END   Define your own mocked Stock Quantities here   ############### //

        data.push(dataElement);
    });

    _.extend(response,{ Data: data});

    return response;

}


exports.getMultipleBasicProducts = function getMultipleBasicProducts(requestBody){
    
    var response = generateAzureHeader(200, "OK", null);
    var data = [];

    // loop over all SKU's in the request
    requestBody.forEach(function(sku){
        var dataElement = generateAzureProduct(sku);
                        
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
    if(sku.length == 7 && sku.substring(0,1) == 1){
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