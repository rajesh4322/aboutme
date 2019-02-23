function tempConverter(number) {
    valNum = parseFloat(number);
    fToC = (number - 32) / 1.8;
    return fToC;
    //document.getElementById("celsius").innerHTML = (number-32) / 1.8;
  }
//Added QUnit Test
  QUnit.test("tempConverter", function(assert) {
	assert.equal(tempConverter(104), 40, "104 degrees F == 40 degrees C");
	assert.equal(tempConverter(230), 110, "230 degrees F == 110 degrees C");
	assert.equal(tempConverter(14), -10, "14 degrees F == -10 degrees C");
	assert.equal(tempConverter(50), 10, "50 degrees F == 10 degrees C");
	assert.equal(tempConverter(5), -15, "5 degrees F == -15 degrees C");
 });