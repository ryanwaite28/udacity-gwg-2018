(function(){

  const MVC = function MVC() {
    let self = this;

    self.name = ko.observable('Ryan M. Waite');
  }

  ko.applyBindings(new MVC());

})()
