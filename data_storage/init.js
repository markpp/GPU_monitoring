use monitoring

db.createCollection("data", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["IP","no_response","GPU"],
            properties: {
                IP: {
                    bsonType: "string",
                    description: "The IP need to be a string"
                },
                no_response:{
                    bsonType: "int",
                    description: "It must be an integer"
                },
                GPU: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["number", "name", "temperature", "usage", "max_capacity"],
                        properties: {
                            number:{
                                bsonType: "int",
                                minimum: 0,
                                description: "The number of the GPU need to be an Integer and need to be higher than 0"
                            },
                            name: {
                                bsonType: "string",
                                description: "The name of the GPU need to be a string"
                            },
                            temperature: {
                                bsonType: "double",
                                description: "The temperature of the GPU need to be a double"
                            },
                            usage: {
                                bsonType: "double",
                                minimum: 0,
                                description: "the usage of the GPU need to be a double and need to be higher than 0"
                            },
                            max_capacity: {
                                bsonType: "double",
                                minimum: 0,
                                description: "The maximum capacity of the GPU need to be a double and need to be higher than 0"
                            }
                        }
                    }
                }
            }
        }
    }
})