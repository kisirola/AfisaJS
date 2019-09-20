'use strict';


// var afficheApplication = exports = module.exports;

let affichelist = require("./affiche-list")

let applicationInstance = null;


class AfficheApplication {


  constructor() {

    if(!applicationInstance){

      this.createDate = new Date();
      this._instanceDate = new Date();
      this._afficheListController = new affichelist.AfficheListController();

      applicationInstance = this;

    }

    return applicationInstance;
  }

  getTitle() {

    return 'Affiche'; // this.title''
  }


  getAbout() {
    return 'About Affiche. Created:' + this.createDate + " Updated:" + new Date(); // this.title''
  }

  getAfficheListController() {

    return this._afficheListController;
  }

}


exports.getApplication = function() {

  return new AfficheApplication();
}
