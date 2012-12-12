var toGlobalize = {
  Tree: require('./tree'),
  Visuals: require('./visuals'),
  Git: require('./git'),
  CommandModel: require('./commandModel'),
  Levels: require('./levels'),
  Constants: require('./constants'),
  Collections: require('./collections'),
  Async: require('./async'),
  AnimationFactory: require('./animationFactory'),
  Main: require('./main')
};

_.each(toGlobalize, function(module) {
  _.extend(window, module);
});

window.events = toGlobalize.Main.getEvents();

