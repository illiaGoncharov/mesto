// отвечает за отрисовку элементов на странице && нет своей разметки
export default class Section {
  constructor({items, renderer}, selector) {
  	this._items = items;
  	this._renderer = renderer; 
  	this._container = document.querySelector(selector);
  }

  renderItems() {
  	this._items.forEach(item => this.renderer(item));
  }

  addItem(element) {
  	this._container.append(element);
  }
}

// классы Card, Popup и 2 других popup-s — компоненты, у которых есть своё представление
// они поставляют разметку классу Section