import { Prop, Schema, raw, SchemaFactory } from '@nestjs/mongoose';

//JUNCAO DE ROTA E DOCUMENT

export type RouteDocument = Route & Document;

//DETERMINA SE VAI SER UM ESQUEMA NO MONGO
@Schema()
export class Route {
  //LEMBRE-SE DE COLOCAR A PROPRIEDADE -ANALOGO AO COLLUMN DO QUARKUS
  //E DEFINIR O TIPO
  @Prop()
  title: string;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  startPosition: { lat: number; lng: number };

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  endPosition: { lat: number; lng: number };
}
//PARA QUE O MONGOSE TRABALHE COM ESSA ENTIDADE, DO JEITO DELE, CRIAMOS UM CONSTRUTOR DE SCHEMA PRA TRABALHAR NO MODELO DO MONGOOSE
//BASICAMENTE SERIA O PARSER ENTRE NEST E O MONGO
export const RouteSchema = SchemaFactory.createForClass(Route);




