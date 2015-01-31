
TraitMapDisplay = {};

TraitMapDisplay.SimpleTraitAttributions = [
  {
    name: "flight",
    taxa: [
    "Birds",
    "Insects",
    "Bats"
  ]},
  {
    name: "homeothermy",
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
    taxa: [
      'Vertebrates',
      'Arthropods',
      'Molluscs'
    ]
  }
];

TraitMapDisplay.mapSimpleTraitAttributions = function(){
  this.SimpleTraitAttributions.forEach(function(trait){
    var traitObj = {};
    traitObj[trait.name] = 'true';
    TraitMapper.mapTraits(traitObj, trait.taxa);
    var birds = TraitMapper.getNode("Birds");
  });
}


// updateColors();