var definition = function(){
  var add_def, defs, all, save, id, find;
  defs = [];
  id = defs.length + 1;
  add_def = function(string){
    defs.push(string);
    return defs;
  };

  all = function(){
    return defs;
  };

  save = function(object){
    defs.push(object);
    return defs;
  };

  find = function(id){
    var defs = this.all();
    found_def = null;
    for (var i = 0; i < defs.length; i++){
      if (defs[i].id === id){
        found_def = defs[i];
      }
    }
    return found_def;
  };

  return { add_def : add_def,
           all     : all,
           save    : save,
           id      : id,
           find    : find };
};
