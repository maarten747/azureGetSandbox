exports.createHeaderOrderJson = function (requestBody){
    return createHeaderOrderWithCodeJson(201, true, requestBody, []);
    //return setTimeout(createHeaderOrderWithCodeJson(201, true, generateItems(requestBody), []), 5000);
    //return {"Code":500,"Status":"FAIL","Message":"An error has occurred.\r\n\r\n\r\n","Data":null};
}

function generateItems(requestBody){
    var itemsToReturn = [];
    

        for(i=0; i<requestBody.Items.length; i++){
            var itemToReturn = {};
            
            var inputItem = requestBody.Items[i];

            itemToReturn.OrderLineId = "100"+i;
            itemToReturn.ProductId = null;
            itemToReturn.EAN = inputItem.EAN;
            itemToReturn.RequestedQuantity = inputItem.Quantity;
            itemToReturn.DeliveredQuantity = 25;
            itemToReturn.EarliestDeliveryDate = "2018-06-18T00:00:00";
            itemToReturn.UnitPrice = 100;
            itemToReturn.Volume = 20;
            itemToReturn.Warnings = [];
            itemToReturn.Errors = [];

            itemsToReturn[i] = itemToReturn;
        }
        return itemsToReturn;
}

function createHeaderOrderWithCodeJson(code, isSuccess, requestBody, errors){
    var jsonResponse = {
        code:201,
        status:"ok",
        message:null,
        Data:{
                OrderId:"GS1234" + Math.floor((Math.random() * 100000) + 1),
                PurchaseOrderNumber: requestBody.PurchaseOrderNumber,
                OrderReference: requestBody.OrderReference,
                TotalPrice: 1000.0,
                TotalVAT: 210.0,
                TotalFreightCos: 0.0,
                MinimumOrderValue: 0.0,
                CashDiscount: 0.0,
                IsSuccess: false,
                NewFieldToTest:"hello!",
                Items: {}
            },
        Warnings:[],
        Errors:[]
    };

    jsonResponse.code = code;
    jsonResponse.Data.Items = generateItems(requestBody);
    jsonResponse.Data.IsSuccess = isSuccess;
    jsonResponse.Data.Errors = errors;
    
    return jsonResponse;
}
 