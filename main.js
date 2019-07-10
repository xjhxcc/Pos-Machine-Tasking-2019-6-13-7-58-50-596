const isBarcodesValid= (baseData,inputFoodItem) =>{
    let result;
    for(let i=0;i<baseData.length;i++){
        for(let j=0;j<inputFoodItem.length;j++){
            if(baseData[i].id!=inputFoodItem[j]){
                result="error";
                break;
            }
        }
    }
    return result;
}


const getFoodItemsByInputBarcodes=(baseData,inputFoodItem)=>{
    if(!isBarcodesValid(baseData,inputFoodItem)){
        return [false];
    }  
    let inputBarcodes=[];
    for(let i=0;i<baseData.length;i++){
        for(let j=0;j<inputFoodItem.length;j++){
            if(baseData[i].id===inputFoodItem[j]){
                inputBarcodes.push(baseData[i]);
            }
        }
    }
    return inputBarcodes;
}

const combineFoodItem=(baseData,inputFoodItem)=>{
    let beCombinedBarcodes=getFoodItemsByInputBarcodes(baseData,inputFoodItem);
    console.log(beCombinedBarcodes);
     let allCombinedBarcodes=[];
    for(let i=0;i<=beCombinedBarcodes.length;i++){
        let beCombinedBarcodesArr=[];
          beCombinedBarcodesArr.push(beCombinedBarcodes[i]);
         beCombinedBarcodesArr["number"]=1;
         // beCombinedBarcodes[i]["number"]=1;
        for(let j=0;j<=beCombinedBarcodes.length;j++){
            if(beCombinedBarcodes[i]==beCombinedBarcodes[j]){
               // beCombinedBarcodes[i]["number"]++;
            }
        }
          allCombinedBarcodes.push(beCombinedBarcodesArr);
         beCombinedBarcodesArr=[];
    }
    return allCombinedBarcodes;
}
const printReceiptsByBarcodes = (baseData,inputFoodItem) =>{
    if(!isBarcodesValid(baseData,inputFoodItem)){
        return;
    }
    let receiptsList=combineFoodItem();
    let summoney=0;
    let str="Receipts\n------------------------------------------------------------\n";
    for(let j=0;j<receiptsList.length;j++){
        str+='${receiptsList[i].name}\t${receiptsList[i].price}\t${receiptsList[i].number}\n';
        summoney+=receiptsList[i].price*receiptsList[i].number;
        str+=`------------------------------------------------------------\nPrice:${summoney}`;
    }
    return str;
}


module.exports = {
    isBarcodesValid,
    getFoodItemsByInputBarcodes,
    combineFoodItem,
    printReceiptsByBarcodes
};

