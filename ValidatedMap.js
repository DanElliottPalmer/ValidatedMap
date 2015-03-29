class ValidatedMap {

	clear(){
		this._.clear();
	}

	constructor( _validationRules, _defaultValues ){
		let validationRules = _validationRules || null;
		let defaultValues = _defaultValues || [];
		this._ = new Map();
		this.rules = new Map( validationRules );
		defaultValues.forEach( value => {
			this.set( value[0], value[1] );
		});
	}

	delete( key ){
		return this._.delete( key );
	}
	
	destroy(){
		this._.clear();
		this._ = null;
		this.rules.clear();
		this.rules = null;
	}

	entries(){
		return this._entries();
	}

	forEach( callback, ctx ){
		return this._.forEach( callback, ctx );
	}

	get( key ){
		return this._.get( key );
	}

	has( key ){
		return this._.has( key );
	}

	keys(){
		return this._.keys();
	}

	get length(){
		return 1;
	}

	set( key, value ){
		if( this.rules.has( key ) ){
			let assert = this.rules.get( key );
			if( !assert( value ) ) return false;
		}
		this._.set( key, value );
		return this;
	}

	get size(){
		return this._.size;
	}

	values(){
		return this._.values();
	}

	[ Symbol.iterator ](){
		return this._[ Symbol.iterator ]();
	}

}