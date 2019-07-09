function printReceipts (arr,collection) {
    var name,count,price,sum;var brr=[];
    var result_child=[];
    var result=[];
    var str=["Receipts","------------------------------------------------------------"];
    for(var j=0;j<collection.length;j++){
        for(var i=0;i<arr.length;i++){
            if(collection[j].id==arr[i]){
                name=collection[j].name;
                if(brr.length<=0){
                    brr.push({
                        foodname:name,
                        foodcount:count
                    });
                }                
                price=collection[j].price;
                count++;
                sum+=price;
                brr=[];
                result_child.push(name+"\t"+price+"\t"+count);
                result.push(result_child);
            }else{
                return "error";
            }
        }
    }
    reutrn result.join('\n');
}


module.exports = printReceipts;
