import Ember from 'ember';
import ValidityFlagMixin from '../../../mixins/validity-flag';
import { module, test } from 'qunit';

module('ValidityFlagMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ValidityFlagObject = Ember.Object.extend(ValidityFlagMixin);
  var subject = ValidityFlagObject.create();
  assert.ok(subject);
});
