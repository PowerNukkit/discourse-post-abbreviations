class Complex extends Simple {
	ClassName : String;
    constructor(regex : RegExp, title : string, replacement: String, className : String){
        super(regex,title,replacement)
        this.ClassName = className;
    }
}