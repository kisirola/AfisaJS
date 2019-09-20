'use strict';

const axios = require('axios');


class AfficheListController {

  constructor() {

  }

  find() {

  }

  list() {

  }

  getAfficheListContainer() {

    return new AfficheListContainer();
  }
}

class AfficheListFilter {

}

class AfficheListContainer {

  constructor() {

  }

  async getList() {

    let list = [];
    let defaultView  = new AfficheItemView();
    let listPro;


    let response = await axios.get('http://localhost:8080/');
    for (let i = 0; i < response.data.posters.length; i++) {

        list.push(new AfficheItem(defaultView, new AfficheItemData(i, response.data.posters[i].title, response.data.posters[i].printFile)));
    }
    return list;
  }
}


class AfficheItem {
  constructor(view, data) {
    this.view = view;
    this.data = data;

    this.itemTitle = "Test title Num: " + data.itemNumber;
    this.itemNumber = data.itemNumber;
  }

  get month() {

    return view.getMonthLongName(this.data.itemDate);
  }

  getMonth() {
    return this.view.getMonthLongName(this.data.itemDate);
  }
}

class AfficheItemData {
  constructor(itemNumber, itemTitle, itemImage) {
    let titles = [
      'NAUJOJO Cirko festivalis'
    , 'David GARRET UNLIMITED'
    , 'IDIOTAI. DOMINO Taetro spektaklis. Taip bus  laborum.'
    , 'STIKLINIS ŽVĖRYNAS. Spektaklis'
    , 'Andriaus MAMONTOVO koncertas. JAU VAKARĖJA'
    , 'ĄČĘĖĮŠŲŪ9Ž ąčęėįšųū9ž '
    ];
    this.itemTitle = itemTitle;
    if (!this.itemTitle) {
      this.itemTitle = "Title data:num: " + itemNumber;
      if (itemNumber < 6) {
        this.itemTitle = titles[itemNumber];
      }
    }
    this.itemImage = itemImage;
    if (!this.itemImage) {
      switch (itemNumber%10) {
        case 0:
           this.itemImage = "/images/GO_Vilnius_455x364.jpg";
          break;
        case 1:
          this.itemImage = "/images/event6.jpg";
          break;
        case 2:
          this.itemImage = "/images/Netikras_milijonierius.jpg";
          break;
        case 3:
          this.itemImage = "/images/event3.jpeg";
          break;
        case 4:
          this.itemImage = "/images/event4.jpeg";
          break;
        case 5:
          this.itemImage = "/images/event5.jpeg";
          break;
        case 6:
          this.itemImage = "/images/event6.jpg";
          break;
        case 6:
          this.itemImage = "/images/event6.jpg";
          break;
        case 7:
          this.itemImage = "/images/event7.jpg";
          break;
        case 8:
          this.itemImage = "/images/event8.jpg";
          break;
        case 0:
          this.itemImage = "/images/event9.png";
          break;
        default:
          this.itemImage = "/images/Netikras_milijonierius.jpg";

        }


    }

    this.itemNumber = itemNumber;

    this.itemDate = new Date();
    this.itemDate.setMilliseconds(0);
    this.itemDate.setSeconds(0);
    this.itemDate.setMinutes(0);
    this.itemDate.setHours(Math.floor(Math.random() * 12)+9);
    this.itemDate.setDate(this.itemDate.getDate() - 30 + Math.ceil(Math.random() * 90));

  }
}

class AfficheItemView {
  constructor() {
    this._style = '#FF0000';
    this._monthShortNames = ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Grd'];
    this._monthLongNames  = ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];


    ;
  }

  get style() {

    return this._style;
  }

  getMonthShortName(date) {

    return this._monthShortNames[date.getMonth()];
  }

  getMonthLongName(date) {

    return this._monthLongNames[date.getMonth()];
  }


}

exports.AfficheListController = AfficheListController;