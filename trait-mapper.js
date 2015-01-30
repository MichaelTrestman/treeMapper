var TraitMapper = (function(){
  var _tree = null;
  var recursivelyMapTraitsToClade = function(traits, node){

    Object.keys(traits).forEach(function(trait){
      node[trait] = traits[trait]
    });

    if(node.children){
      node.children.forEach(function(child){
        recursivelyMapTraitsToClade(traits, child)
      });
    };
  };
  var recursivelySearchForOriginTaxaToMapFrom = function(node, originTaxa, traits){
    if (
      originTaxa.some(function(taxon){
        return taxon === node.name
      })
    ){
      recursivelyMapTraitsToClade(traits, node)
    } else{
      if (node.children) {
        node.children.forEach(function(child){
          recursivelySearchForOriginTaxaToMapFrom(child, originTaxa, traits)
        });
      };
    };
  };
  var recursivelyHideChildren = function(node){
    if (node.children) {
      node._children = node.children;
      node.children = null;
    }
    if (node._children) {
      node._children.forEach(function(child){
        recursivelyHideChildren(child);
      })
    };
  }

  return {
    setTree: function(tree){
      _original_tree = tree;
      _tree = tree;
    },
    getMappedTree: function(){
      return _tree
    },
    getOriginalTree: function(){
      return _original_tree;
    },
    mapTraits: function(traits, originTaxa){
      recursivelySearchForOriginTaxaToMapFrom(_tree, originTaxa, traits)
    },
    hideDescendantsOf: function(node){
      recursivelyHideChildren(node);
    }

  }

}());