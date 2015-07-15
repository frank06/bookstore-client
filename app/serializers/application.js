import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  
  serialize() {

    const result = this._super(...arguments),
      attr = result.data.attributes,
      rel = result.data.relationships;

    return Object.keys(rel).reduce(function(acc, elem) {
      const data = rel[elem].data;
      if (data) {
        acc[elem + "_id"] = data.id;
      }
      if (data && data.type) {
        acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
      }
      return acc;

    }, attr);    
    
 } 

});