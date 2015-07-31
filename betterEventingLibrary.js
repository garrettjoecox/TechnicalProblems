
function mixEvents(obj) {
  var values = {};
  var events = {};

  obj.onChange = function(property, func) {
    values[property] = obj[property];
    events[property] = events[property] || [];
    events[property].push(func);

    Object.defineProperty(obj, property, {
      set: function(newValue) {
        events[property].forEach(function(func) {
          func(newValue);
        });
        values[property] = newValue;
      },
      get: function() {
        return values[property];
      }
    });
  };

  return obj;
}

var garrett = {
  name: 'Garrett Cox',
  age: 19,
  color: 'Orange'
};

mixEvents(garrett);

garrett.onChange('age', function(newAge) {
  console.log('Happy %s Birthday, Garrett!', newAge);
});

garrett.age++;
