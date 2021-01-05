class IOObject<T> {
	type : string
	value : T
	constructor(type: string ,val : T) {
        this.value = val
        this.type = type
    }
}