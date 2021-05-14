export default class Section {
  // Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  constructor({items, renderer}, containerSelector) {
  	this._renderedItems = items;
  	this._renderer = renderer; 
  	this._container = document.querySelector(containerSelector);
  }

  renderItems() {
  	this._renderedItems.forEach(item => this.renderer(item));
  }

  addItem(element) {
  	this._container.append(element);
  }
}