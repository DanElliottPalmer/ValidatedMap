#ValidatedMap

i wanted an es6 map-like object where i can validate items being set in a map as i set them. for example check the type of a value and prevent it from being set if it fails the test specified.

##usage
like a normal map except the first parameter is the rules.

```
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
```