export function buildReplacementString(it : Simple) : string {
	if(typeof(it) == typeof(Complex)){
		var x = it as Complex;
		return "<abbr class=\"" +
		x.ClassName +
		"\" title=\"" +
		x.Title +
		"\">" +
		x.Replacement
		+ "</abbr>"
	}
	return "<abbr class=\"dpa-abbr\" title=\"" +
	it.Title +
	"\">" +
	it.Replacement
	+ "</abbr>"
}

export function replaceAllAbbreviations(text : string, data : Simple[]) : string {
	if(data === undefined || data.length == 0){
		return text;
	}

	if(data.length == 1){
		return text.replace(data[0].Regex, buildReplacementString(data[0]));
	}
	
	var newText = text.replace(data[data.length-1].Regex, buildReplacementString(data[data.length-1]));
	data.pop();
	return replaceAllAbbreviations(newText, data);
}