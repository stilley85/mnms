(function(module) {

  console.log(module)

  var spyOn = function(object, method) {
    let spyInternal = {
      args: [],
      count: function() {
        return this.args.length;
      }
    };

    let original = object[method];
    object[method] = function() {
      let args = [].slice.apply(arguments)
      spyInternal.args.push(args);
      spyInternal.count();
      return original.call(object, args);
    };

    module.spy = spyInternal;

    return Object.freeze(spyInternal);
  }

  module.spyOn = spyOn;

})(this);
