export default {
    MainPage: {
        schema: {
            type: "object",
            title: "Список позиций",
            format: "tabs",
            items: {
	            type: "array",
            	oneOf: [
					{
	                    type: "object",
						options: {
							collapsed: true,
						},
						properties: {
	                        title: {
	                            type: "string",
	                            description: "Название авто",
	                            minLength: 2
	                        },
	                        price: {
	                            type: "string"
	                        }
	                    }
					}
				]
            }
        },
        Person: {
            title: "Person",
            type: "object",
            properties: {
                name: {
                    type: "string",
                    description: "First and Last name",
                    minLength: 4,
                    default: "Jeremy Dorn"
                },
                age: {
                    type: "integer",
                    default: 25,
                    minimum: 18,
                    maximum: 99
                },
                favorite_color: {
                    type: "string",
                    format: "color",
                    title: "favorite color",
                    default: "#ffa500"
                },
                gender: {
                    type: "string",
                    enum: ["male", "female"]
                },
                location: {
                    type: "object",
                    title: "Location",
                    properties: {
                        city: {
                            type: "string",
                            default: "San Francisco"
                        },
                        state: {
                            type: "string",
                            default: "CA"
                        },
                        citystate: {
                            type: "string",
                            description: "This is generated automatically from the previous two fields",
                            template: "{{city}}, {{state}}",
                            watch: {
                                city: "location.city",
                                state: "location.state"
                            }
                        }
                    }
                },
                pets: {
                    type: "array",
                    format: "table",
                    title: "Pets",
                    uniqueItems: true,
                    items: {
                        type: "object",
                        title: "Pet",
                        properties: {
                            type: {
                                type: "string",
                                enum: ["cat", "dog", "bird", "reptile", "other"],
                                default: "dog"
                            },
                            name: {
                                type: "string"
                            }
                        }
                    },
                    default: [{
                        type: "dog",
                        name: "Walter"
                    }]
                }
            }
        }
    },
	content: {
		Cars: {
			chery: {
				tiggo2: [
					{
						title: 'Comfort MT',
						price: '395 188'
					},
					{
						title: 'Luxury MT',
						price: '499 088'
					},
					{
						title: 'Luxury CVT',
						price: '599 088'
					}
				],
				tiggo3: [
					{
						title: 'Comfort MT',
						price: '395 188'
					},
					{
						title: 'Luxury MT',
						price: '499 088'
					},
					{
						title: 'Luxury CVT',
						price: '599 088'
					}
				],
				tiggo5: [
					{
						title: 'Standart MT',
						price: '972 900 **'
					},
					{
						title: 'Comfort MT',
						price: '1 049 900'
					},
					{
						title: 'Comfort CVT',
						price: '1 119 900'
					},
					{
						title: 'Luxury CVT',
						price: '1 179 000'
					}
				]
			},
			changan: {
				cs35: [
					{
						title: 'MТ COMFORT',
						price: '799 900'
					},
					{
						title: 'MТ LUXE',
						price: '835 900'
					},
					{
						title: 'АТ COMFORT',
						price: '885 900'
					},
					{
						title: 'АТ LUXE',
						price: '925 920'
					}
				],
				eado: [
					{
						title: 'MТ COMFORT',
						price: '560 000'
					},
					{
						title: 'MТ LUXE',
						price: '585 650'
					},
					{
						title: 'АТ LUXE',
						price: '628 000'
					}
				],
				raeton: [
					{
						title: 'АТ LUXE',
						price: '1 339 000'
					}
				]
			},
			hawtai: {
				cs35: [
					{
						title: 'MТ COMFORT',
						price: '799 900'
					},
					{
						title: 'MТ LUXE',
						price: '835 900'
					},
					{
						title: 'АТ COMFORT',
						price: '885 900'
					},
					{
						title: 'АТ LUXE',
						price: '925 920'
					}
				],
				eado: [
					{
						title: 'MТ COMFORT',
						price: '560 000'
					},
					{
						title: 'MТ LUXE',
						price: '585 650'
					},
					{
						title: 'АТ LUXE',
						price: '628 000'
					}
				],
				raeton: [
					{
						title: 'АТ LUXE',
						price: '1 339 000'
					}
				]
			}
		}
	}
};
