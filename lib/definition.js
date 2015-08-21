var definition = function(){
  var add_def, def_objects, definitions, defs, all, save, id, find, set_id;
  def_objects = [];
  definitions = [];

  set_id = function(word_id){
    this.id = word_id;
  };

  defs = function(){
    return definitions;
  };

  add_def = function(string){
    definitions.push(string);
    return definitions;
  };

  all = function(){
    return def_objects;
  };

  save = function(object){
    def_objects.push(object);
    return def_objects;
  };

  find = function(id){
    var d_obs = this.all();
    found_def = null;
    for (var i = 0; i < d_obs.length; i++){
      if (d_obs[i].id === id){
        found_def = d_obs[i];
      }
    }
    return found_def;
  };

  return { add_def : add_def,
           all     : all,
           save    : save,
           id      : id,
           find    : find,
           defs    : defs,
           set_id  : set_id };
};
