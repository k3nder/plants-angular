import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlantsService {
  plants: plant[] = [
    {
      name: "cistus albinus",
      type: "jara blanca",
      photo: "https://iili.io/JSBQqcF.jpg",
      metadata: {
        shortDescription: "Nativa de la cuenca del Mediterraneo",
        largeDescription: "Es nativa (autóctona) de la cuenca del Mediterráneo, sobre todo en la península ibérica, donde crece en terrenos ricos en cal, con clima cálido y seco.\n se usa como alivio al dolor de estomago ademas Se usaban las hojas para limpiar utensilios ",
        uses: [
          "Medicinales",
          "Limpieza",
          "Linimento"
        ],
        temperature: 0
      }
    },
    {
      name: "Pistacia",
      type: "saportae Burnat",
      photo: "https://iili.io/JSBQF6P.jpg",
      metadata: {
        shortDescription: "arbusto diotico",
        largeDescription: "Se trata de un arbusto dioico, crece en los matorrales de Europa i mediterranea ademas del norte de africa i oriente proximo, es resistente al frio , Habita en bosques claros, zonas adehesadas, coscojales, encinares, garrigas, maquis, collados, gargantas, cañones y laderas rocosas de toda el área mediterránea. En la epoca clasica se usaba como chicle, de su latex se elabora una goma aromatica llamada almaciga o mastique, Se usaba en medicina odontologica para hacer branices. Se usa en lo jardines ya que sus hojas se conservan a lo largo de todo el año. Se usaba en problemas catarrales pulmonares , para la gota y el reumatismo. tambien se usaba contra la diarrea, gonorrea y leucorrea, se a usado el mastique contra heridas con hemorragias o picaduras de insectos , i se usaba como anestésico para los dolores de muelas.",
        uses: [
          "Latex",
          "chicle",
          "Medicinales"
        ],
        temperature: 0
      }
    },
    {
      name: "Rubia peregrina",
      type: "Rubia silvestre",
      photo: "https://iili.io/JSBQfF1.md.jpg",
      metadata: {
        shortDescription: "se encuentra en el mediterraneo",
        largeDescription: "Se encuentra en la región del mediterráneo y macaronesia, con distribución por el sur y oeste de Europa y Asia, norte de África y las islas macaronésicas. En España en el Valle del Ebro, Andalucía, Valencia, y prácticamente en cualquier región en donde crece en matorrales, zarzales, paredes y zonas forestales, y es también habitual en el encinar cantábrico.  Antiguamente se usaba para tratar variadad de dolencias debido a sus propiedades diureticas, antiinflamatorias y laxantes. en algunas regiones se usaba como forrage del ganado, aunque no es tan nutritiva como otras plantas, Control de la erosión del suelo: Debido a su capacidad para formar una cobertura densa, la rubia peregrina silvestre se utiliza en algunos programas de restauración de tierras para ayudar a prevenir la erosión del suelo",
        uses: [
          "Medicinales",
          "Forraje",
          "Control de la erosión del suelo"
        ],
        temperature: 0
      }
    }
  ]
  constructor() { }
}
export interface plant {
  name: string,
  type: string,
  photo: string,
  metadata: {
    shortDescription: string,
    largeDescription: string,
    uses: string[],
    temperature: number,
  }
}
