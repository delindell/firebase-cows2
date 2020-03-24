import utils from '../../helpers/utils';
import farmerData from '../../helpers/data/farmerData';
import farmerComponent from '../farmer/farmer';
import singleFarmer from '../singleFarmer/singleFarmer';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center">Farmhouse</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmerMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildFarmer);
    })
    .catch((err) => console.error('get farmers broke', err));
};

export default { buildFarmers };
