

var dappAddress = "n1omNzcHyphrv4mmpsFeqYk2Mh5WnC3Dqp4";
    var NebPay ; //https://github.com/nebulasio/nebPay
    var nebpay ;
		var serialNumber;
	var InterQuery;
$(function() {
    load();
});

function load() {
    NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
    nebpay = new NebPay();

    var to = dappAddress;
    var value = "0";
    var callFunction = "getAll";
    var callArgs = "[]";

	
    serialNumber = nebpay.simulateCall(to, value, callFunction, callArgs, {               

				listener: function(resp) {
					
					var myArr = JSON.parse(resp.result);
					var str = "";
					for(var i =0; i<myArr.length;i++){
						var obj = JSON.parse(myArr[i]);
						
						if(i%2 == 0){
							str += '<tr>';
						}else{
							str += '<tr  class="active">';
						}
						str += '<td>';
						str += i+1;
						str += '</td>';
						str += '<td>';
						str += obj.content;
						str += '</td>';
						str += '<td>';
						str += new Date(obj.createDate * 1000).toLocaleString();
						str += '</td>';
						str += '<td>';
						str += obj.author;
						str += '</td>';
						str += '</tr>';
					}
					
					$("#queryResult").html(str);
				}
				//,callback: NebPay.config.testnetUrl
                //callback: NebPay.config.mainnetUrl
            }
	);


}


