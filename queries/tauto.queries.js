import { gql } from "apollo-boost";

const AllBrandsQuery = gql`query AllBrands{
  AllBrands{
    ta3_nmarc
    ta3_marca
  }
}
`;

const GroupsQuery = gql`query Group ($gru_nmarc:Int!){
  Group (gru_nmarc: $gru_nmarc){
    gru_nmarc
    gru_cgrup
    gru_ngrup
  }
}
`;

const ModelsQuery = gql`query Models ($ta3_nmarc:Int!, $ta3_cgrup:Int!){
  Models (ta3_nmarc: $ta3_nmarc, ta3_cgrup: $ta3_cgrup){
    ta3_codia
    ta3_model
  }
}
`;

const YearsQuery = gql`query Price ($ta3_codia: Int!) {
  Price(ta3_codia: $ta3_codia) {
    anio
    precio
  }
}
`;

const DetailsQuery = gql`query Caracteristics($ta3_codia: Int!) {
  Details(ta3_codia: $ta3_codia) {
    Potencia
    Combustible
    VelMax
    Alimentacion
    Cilindrada
    Computadora
    FarosAntiniebla
    Cuero
    CajaAutomatica
    AsientosElectricos
    Bluetooth
    SensorEstacion
    CalefaccionAsientos
    LLantasDeAleacion
    AireAcondicionado
    OpticasXenon
    LevasAlBolante
    CamaraEstacionamiento
    TechoSolarPanoramico
    TechoCorredizo
    SensorDeLluvia
    ControlDeEstabilidad
    AirbagCortina
    ControlTraccion
    ReguladorParFrenado
    AsistenteFrenadoEmergencia
    Airbag
    SensorCrepuscular
    ABS
    AribagLateral
    Isofix
    AirbagRodilla
    RepartidorDeFrenado
    AirbagDeCabeza
    MonitoreoPresionCubiertas
    AyudaArranqueEnPendiente
    ControlDeDescenso
    BloqueoDiferencal
    ControlDinamicoDeConduccion
    DireccionAsistida
    TipoDeVehiculo
    Ancho
    Peso
    Largo
    CantidadDePuertas
    Altura
    PermiteCarga
    Importado 
  }
}
`;


export { AllBrandsQuery, GroupsQuery, ModelsQuery, YearsQuery, DetailsQuery };
