import Ember from 'ember';

let get = Ember.get;
let makeArray = Ember.makeArray;
let set = Ember.set;

export default Ember.Object.extend({
  unknownProperty(property) {
    set(this, property, Ember.A());
    return get(this, property);
  },

  add(attribute, messages) {
    let errors = get(this, attribute);
    let uniqueMessages = messages.reject(message => {
      return errors.contains(message);
    });

    errors.pushObjects(uniqueMessages);
  }
});
