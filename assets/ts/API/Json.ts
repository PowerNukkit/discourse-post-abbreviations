export function parseStore(data : string) : Array<Simple> {
	var list : Array<Simple>
	list = new Array<Simple>();
	var objs : Array<any> = JSON.parse(data, readReviver);
	for (var i = 0; i < objs.length; i++) {
		var x = objs[i]
		if(x["type"] == "Complex"){
			list.push(x["value"] as Complex);
		} else if (x["type"] == "Simple"){
			list.push(x["value"] as Simple);
		}
	}
	return list;
}
export function stringifyStore(data : Simple[]) : string {
	var list : Array<IOObject<Simple>>
	for (var i = 0; i < data.length; i++) {
		var x = data[i]
		if(x instanceof Complex) {
			list.push(new IOObject<Complex>("Complex",x))	
		}
		else {
			list.push(new IOObject<Simple>("Simple",x))
		}
	}
	return JSON.stringify(list, saveReplacer)
}

function readReviver(key : string, value : string) {
	if(key == "Regex"){
		return new RegExp(value);
	}
	return value;
}

function saveReplacer(key : string, value : any) {
	if(key == "Regex"){
		return value.toString();
	}
	return value;
}