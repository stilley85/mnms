describe("spyOn", () => {
  it("knows when a function has been called once", function() {
    var servicedTyres = 0
    var plane = {
      changeTyre: function(brand) {
        servicedTyres += 1;
      },
      service: function(brand) {
        this.changeTyre(brand);
        this.changeTyre(brand);
      }
    }

    spyOn(plane, "changeTyre")

    plane.service("pirelli");

    expect(plane.changeTyre).toHaveBeenCalled();
  });
});
