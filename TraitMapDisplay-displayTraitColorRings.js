TraitMapDisplay.displayTraitColorRings = function(traitNames){
  d3.selectAll('.node').each(function(d

    ){
    var thisNode = d3.select(this);
    var counter = 5,
      ringWidth = 5;

    thisNode
      .selectAll('circle')
      // .select('circle#li-' + traitName)
      .remove();

    thisNode
      .append('circle')
      .attr('r', function(d){
        return d._children ? 10 : 6;
      })
      .style('fill', 'black');

    traitNames.forEach(function(traitName, i){
      if (d[traitName]) {
        thisNode
          .append('circle')
          .attr('id', 'li-' + traitName)
          .attr('r', 0)
          .attr('r', function(d){
            counter += ringWidth;
            return d.size + counter - ringWidth;
          })
          .style('fill', 'rgba(1, 1, 1, 0)')
          .style('stroke', colors[traitName])
          .style('stroke-width', '0px')
          .transition().duration(function(d){
            var dur = 0;
            if (traitName === TraitMapDisplay.justClickedTrait.name) {
             dur += 100;
            }
            return dur;
          })
          .style('stroke-width', 2*ringWidth + 'px')
          .transition().duration(function(d){
            var dur = 0;
            if (traitName === TraitMapDisplay.justClickedTrait.name) {
             dur += 100;
            }
            return dur;
          })
          .style('stroke-width', ringWidth + 'px')
      };

    });
  });
};