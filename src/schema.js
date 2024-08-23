const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLFloat, GraphQLInt } = require('graphql');
const { getWeather } = require('./services/weatherService');


const WeatherType = new GraphQLObjectType({
    name: 'Weather',
    fields: {
        ciudad: { type: GraphQLString },
        temperatura: { type: GraphQLFloat },
        descripcionClima: { type: GraphQLString },
        humedad: { type: GraphQLInt },
        velocidadViento: { type: GraphQLFloat },
    }
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        weather: {
            type: WeatherType,
            args: { city: { type: GraphQLString } },
            resolve(parent, args) {
                
                return getWeather(args.city);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});
