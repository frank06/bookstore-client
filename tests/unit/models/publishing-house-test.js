import { moduleForModel, test } from 'ember-qunit';

moduleForModel('publishing-house', 'Unit | Model | publishing house', {
  // Specify the other units that are required for this test.
  needs: ['model:book']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
