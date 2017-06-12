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
		catalogueItem: {
			type: "array",
			oneOf: [
				{
                    type: "object",
					properties: {
                        model: {
                            type: "string",
                            description: "Название авто",
                            minLength: 2
                        },
                        price: {
                            type: "string"
                        },
						image: {
							type: "string"
						},
						route: {
							type: "string"
						},
						description: {
							type: "string",
							format: "textarea"
						}
                    }
				}
			]
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
	content: {},
	backUp: {},
	setttings: {
		customToolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],
			[{ 'indent': '-1'}, { 'indent': '+1' }],
			[{ 'direction': 'rtl' }],
			[{ 'size': ['small', 'large', 'huge'] }],
			[{ 'header': [1, 2, 3, 4, 5, 6, false ] }],
			[{ 'color': [] },{ 'background': [] }],
			[{ 'font': [] }],
			[{ 'align': [] }],
			['clean']
		]
	}
};
