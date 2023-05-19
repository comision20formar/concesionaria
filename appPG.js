const autos = require("./autos");

const concesionaria = {
  autos,
  buscarAuto: function (patente) {
    return this.autos.find((auto) => auto.patente === patente) || null;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    auto && (auto.vendido = true);
    return auto || "Auto no encontrado";
  },
  autosParaLaVenta: function () {
    return this.autos.filter((auto) => !auto.vendido);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    return this.autos.filter((auto) => auto.vendido).map((auto) => auto.precio);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce((acum, num) => acum + num, 0);
  },
  puedeComprar: function (auto, persona) {
    return (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    );
  },
};
