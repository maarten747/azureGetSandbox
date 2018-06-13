exports.createHeaderOrderJson = function (requestBody){
    return createHeaderOrderWithCodeJson(201, true, generateItems(requestBody), []);
}

function generateItems(requestBody){
    var itemsToReturn = [];
    var itemToReturn = {};

        for(i=0; i<requestBody.Items.length; i++){
            var inputItem = requestBody.Items[i];

            itemToReturn.OrderLineId = "100"+i;
            itemToReturn.ProductId = null;
            itemToReturn.EAN = inputItem.EAN;
            itemToReturn.RequestedQuantity = inputItem.Quantity;
            itemToReturn.DeliveredQuantity = 10;
            itemToReturn.EarliestDeliveryDate = "2018-06-18T00:00:00";
            itemToReturn.UnitPrice = 100;
            itemToReturn.Volume = 20;
            itemToReturn.Warnings = [];
            itemToReturn.Errors = [];

            itemsToReturn[i] = itemToReturn;
        }
        return itemsToReturn;
}

function createHeaderOrderWithCodeJson(code, isSuccess, items, errors){
    var jsonResponse = {
        code:201,
        status:"ok",
        message:null,
        Data:{
                OrderId:"GS1234",
                PurchaseOrderNumber: "string",
                TotalPrice: 1000.0,
                TotalVAT: 210.0,
                TotalFreightCos: 0.0,
                MinimumOrderValue: 0.0,
                CashDiscount: 0.0,
                IsSuccess: false,
                Items: {}
            },
        Warnings:[],
        Errors:[]
    };

    jsonResponse.code = code;
    jsonResponse.Data.Items = items;
    jsonResponse.Data.IsSuccess = isSuccess;
    jsonResponse.Data.Errors = errors;
    
    return jsonResponse;
}
 