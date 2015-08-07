import Ember from 'ember';

export default Ember.Mixin.create({
  _modelIsValid: Ember.computed('currentState', function() {
    if (this.hasOwnProperty('_internalModel')) {
      return get(this._internalModel.currentState, 'isValid');
    } else {
      return true;
    }
  }).readOnly(),

  _isValid: Ember.computed('validators.@each.isValid', function() {
    var compactValidators = get(this, 'validators').compact();
    var filteredValidators = compactValidators.filter(function(validator) {
      return !get(validator, 'isValid');
    });

    return get(filteredValidators, 'length') === 0;
  }),

  isValid: Ember.computed.or('_modelIsValid', '_isValid').readOnly(),
  isInvalid: Ember.computed.not('isValid').readOnly()
});
