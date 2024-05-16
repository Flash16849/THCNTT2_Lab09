'use strict';


module.exports = function(app) {
  let productlinesCtrl = require('./controllers/ProductlinesController');
  let FarmCtrl = require('./controllers/FarmController');
  let SensorCtrl = require('./controllers/SensorDataController');


  // todoList Routes
  app.route('/template')
    .get(productlinesCtrl.get)
    .post(productlinesCtrl.store);


  app.route('/template/:id')
    .get(productlinesCtrl.detail)
    .put(productlinesCtrl.update)
    .delete(productlinesCtrl.delete);

  app.route('/Farm')
    .get(FarmCtrl.get)
    .post(FarmCtrl.store);
  
  app.route('/Farm/:FarmID')
    .get(FarmCtrl.detail)
    .put(FarmCtrl.update)
    .delete(FarmCtrl.delete);

  app.route('/SensorData')
    .get(SensorCtrl.get)
    .post(SensorCtrl.store);

  app.route('/SensorData/:id')
    .get(SensorCtrl.detail)
    .put(SensorCtrl.update)
    .delete(SensorCtrl.delete);

  app.route('/SensorData/Farm/:Farmid')
    .get(SensorCtrl.detailfromfarm);
};
