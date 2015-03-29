let attrsMap = new ValidatedMap([["lineWidth", function( value ){
	return typeof value === "number";
}]]);

attrsMap.set("fill", "#f00");
attrsMap.set("lineWidth", 10);
attrsMap.set("lineWidth", "abc"); //false
attrsMap.set("lineWidth", 5);

for( let value of attrsMap ){
	console.log( value );
}