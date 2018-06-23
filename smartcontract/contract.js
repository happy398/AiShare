"use strict";

var nasBox = function() {
    LocalContractStorage.defineMapProperty(this, "datamap");
	LocalContractStorage.defineProperty(this, "size");
};

		
nasBox.prototype = {
	
init: function(){
	this.size = 0;
},
	
save: function(content){
	var content = content.trim();

	if (content === ""){
		throw new Error("empty content");
	}

	var index = this.size;
		
	var item = new Object();
	item.index = index;
	item.content = content;
	item.author = Blockchain.transaction.from;
	item.createDate = Blockchain.transaction.timestamp;	

	this.datamap.set(index, JSON.stringify(item));	
	this.size +=1;
},

getAll: function() {
		var result = [];
        for(var i=0;i<this.size;i++){
			result.push(this.datamap.get(i));
		}
		return result;
}

};

module.exports = nasBox;