import Cattle from 'ui/utils/cattle';

export default Cattle.CollectionController.extend({
  itemController: 'environment',
  sortProperties: ['name','id'],
});
