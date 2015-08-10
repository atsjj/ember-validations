import DS from 'ember-data';
import Ember from 'ember';

let isEmpty = Ember.isEmpty;

export default {
  name: 'ember-validations-errors-model',

  initialize: function(/* container, app */) {
    DS.Errors.reopen({
      unknownProperty: function(attribute) {
        var errors = this.errorsFor(attribute).mapBy('messages');
        if (isEmpty(errors)) { return null; }
        return errors;
      }
    });
  }
};
