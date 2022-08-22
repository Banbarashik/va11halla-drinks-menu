export default class View {
  _parentElement = document.getElementById("content");

  render(data) {
    this._data = data;

    const markup = _generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
