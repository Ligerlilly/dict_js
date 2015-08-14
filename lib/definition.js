var definition = function(){
  var add_def, defs;
  defs = [];
  add_def = function(string){
    defs.push(string);
    return defs;
  };

  return { add_def : add_def };
};
