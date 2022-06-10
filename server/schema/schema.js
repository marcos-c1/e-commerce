const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat, GraphQLScalarType } = require('graphql')

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLFloat },
        category: { type: GraphQLString },
        imageUrl: { type: GraphQLString } 
    })
})

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        cpf: { type: GraphQLString },
        name: { type: GraphQLString },
        birthDate: { type: GraphQLScalarType },
        quantity: { type: GraphQLInt },
        price: { type: GraphQLFloat },
        imageUrl: { type: GraphQLString } 
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});