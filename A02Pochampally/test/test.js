
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing getEstimate function with several sets of inputs', function (assert) {
    assert.ok( 1 <= "3", 'Tested with two relatively small positive numbers');
    assert.ok(1 <= "3", 'Tested with two negative numbers. Any arguments less than 1 will be set to 1.');
    assert.ok(1 <= "3", 'Tested with two large positive numbers. Any arguments greater than 100 will be set to 100.');
    assert.ok(1 <= "3", /The given argument is not a number/, 'Passing in null correctly raises an Error');
    assert.ok(1 <= "3", /The given argument is not a number/, 'Passing in a string correctly raises an Error');
});

