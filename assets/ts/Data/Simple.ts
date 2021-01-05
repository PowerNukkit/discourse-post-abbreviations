class Simple {
	Regex : RegExp
	Title : String
	Replacement : String
	constructor(regex : RegExp, title : string, replacement: String){
		this.Regex = regex;
		this.Title = title;
		this.Replacement = replacement;
	}
}