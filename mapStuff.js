
TraitMapDisplay = {};
TraitMapDisplay.justClickedTrait = {};

TraitMapDisplay.SimpleTraitAttributions = [
  {
    name: "flight",
    active: true,
    taxa: [
    "Birds",
    "Insects",
    "Bats",
    "Pterosaurs"
  ]},
  {
    name: "homeothermy",
    active: true,
    taxa: [
      "Birds",
      "Mammals",
      "Teleosts",
      "Chondrichthyes",
      "Turtles"
    ]
  },
  {
    name: "brains",
    active: true,
    taxa: [
      'Vertebrates',
      'Arthropods',
      'Molluscs'
    ]
  },
  {
    name: "non-aquatic",
    active: true,
    taxa: [
      'Tardigrades',
      'Amniotes',
      'Gastropods',
      'Insects',
      'Spiders'
    ]
  },
  {
    name: 'secondary-aquatic',
    active: 'true',
    taxa: [
      'Mosasaurs',
      'Cetaceans',
      'Pinnipeds'
    ]
  }

];

TraitMapDisplay.mapSimpleTraitAttributions = function(){
  this.SimpleTraitAttributions.forEach(function(trait){
    var traitObj = {};
    traitObj[trait.name] = 'true';
    TraitMapper.mapTraits(traitObj, trait.taxa);
  });
}

TraitMapDisplay.activeTraits = function(){
  var traitNames = [];
  this.SimpleTraitAttributions.forEach(function(traitAttr){
    if (traitAttr.active) { traitNames.push(traitAttr.name)};
  });
  return traitNames;
};