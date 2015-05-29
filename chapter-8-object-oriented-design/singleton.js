/**
 * p105
 */

var Restaurant = new (function() {
  function _Restaurant() {
    this.count = 0;
    this.getCount = function() {
        return this.count;
    }.bind(this);
  }

  this._instance = null;
  this.getInstance = function() {
    if (this._instance === null) {
      this._instance = new _Restaurant();
    }
    this._instance.count += 1;
    return this._instance;
  }.bind(this);
});

console.log(Restaurant.getInstance().getCount()); // 1
console.log(Restaurant.getInstance().getCount()); // 2
