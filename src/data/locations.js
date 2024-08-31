const locations = [
        {
            "id":1,
            "name":"Biblioteca Nacional de Costa Rica",
            "address":"Av. 3, San José, El Carmen",
            "coordinates":[9.935385126303814, -84.07128402158244],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":2,
            "name":"Editorial de la UNED",
            "address":"San José, Mercedes",
            "coordinates":[9.939995023507638, -84.04733038059882],
            "provincia":"San Jose",
            "canton":"San Jose "
        },
        {
            "id":3,
            "name":"Centro de Cine",
            "address":"Manuel María de Peralta, San José, Amón",
            "coordinates":[9.93752128053746, -84.07348657970363],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":4,
            "name":"Teatro Popular Melico Salazar",
            "address":"Calle Central Alfredo Volio, San José Province, San José, Merced",
            "coordinates":[9.933520487118875, -84.07941881410007],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":5,
            "name":"Utopia Central House",
            "address":"Costa Rica, San Jose Montes de Oca Barrio Dent, 425m Oeste del Mall San Pedro San Jose Montes de Oca",
            "coordinates":[9.932529412642484, -84.0597166567561],
            "provincia":"San Jose",
            "canton":"Montes de Oca"
        },
        {
            "id":6,
            "name":"Teatro Vargas Calvo",
            "address":"Calle 5, San José Province, San José, Catedral",
            "coordinates":[9.93294571772585, -84.07659974200395],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":7,
            "name":"Teatro Espressivo",
            "address":"Centro Comercial Momentum Pinares, antigua carretera a Tres Ríos, San José, Curridabat",
            "coordinates":[9.910757194791893, -84.0177956375978],
            "provincia":"San Jose",
            "canton":"Curridabat"
        },
        {
            "id":8,
            "name":"Estadio Nacional de Costa Rica",
            "address":"La Sabana, San José, Sabana",
            "coordinates":[9.937114728402419, -84.10769799247713],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":9,
            "name":"El Observatorio",
            "address":"C. 23, San José, La California",
            "coordinates":[9.933308676081635, -84.06829391878281],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":10,
            "name":"Mundoloco el Chante",
            "address":"Diagonal al Banco Popular, San José, San Pedro",
            "coordinates":[9.93190732148162, -84.05006150253753],
            "provincia":"San Jose",
            "canton":"Montes de Oca"
        },
        {
            "id":11,
            "name":"Mercado la California",
            "address":"Av. Central, San José, El Carmen",
            "coordinates":[9.933500078850535, -84.06918094824599],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":12,
            "name":"Jazz Café, Escazú",
            "address":"Ruta 27, Lateral, San Rafael, Escazú. - Escazú",
            "coordinates":[9.939779146254471, -84.14110890333781],
            "provincia":"San Jose",
            "canton":"Escazú"
        },
        {
            "id":13,
            "name":"Pepper Disco Club",
            "address":"Av 34, Calle 61-63, Zapote. - San José",
            "coordinates":[9.917899726000355, -84.04908124233052],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":14,
            "name":"Club Hipico La Caraña",
            "address":"Piedades, Santa Ana. - Santa Ana",
            "coordinates":[9.937643944661046, -84.20717262918342],
            "provincia":"San Jose",
            "canton":"Santa Ana"
        },
        {
            "id":15,
            "name":"Club Bruk Off",
            "address":"Uruca, Zona Industrial, San José, Costa Rica - San José",
            "coordinates":[9.951314342289853, -84.11181674901881],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":16,
            "name":"Edificio La Alhambra",
            "address":"Calle 2, Av 0-2, San José. - San José",
            "coordinates":[9.933896716770729, -84.07987138798603],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":17,
            "name":"Centro de Convenciones de Costa Rica",
            "address":"Centro de Convenciones de Costa Rica - Heredia",
            "coordinates":[9.976473780485948, -84.15097822926774],
            "provincia":"Heredia",
            "canton":"Heredia"
        },
        {
            "id":18,
            "name":"Taller Nacional de Teatro",
            "address":"Av 13, Calle 25-31, Bo. Escalante. - San José",
            "coordinates":[9.934098358628649, -84.06549403338198],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":19,
            "name":"Anfiteatro Coca-Cola, Parque Viva",
            "address":"Calle el Bajo, La Guácima. - Alajuela",
            "coordinates":[9.972644166230733, -84.25068759855705],
            "provincia":"Alajuela",
            "canton":"Alajuela"
        },
        {
            "id":20,
            "name":"UCR, Auditorio Sede de Occidente",
            "address":"Campus Sede de Occidente - San Ramón",
            "coordinates":[10.08594452343483, -84.47842491024616],
            "provincia":"Alajuela",
            "canton":"San Ramón"
        },
        {
            "id":21,
            "name":"Palacio De Los Deportes",
            "address":"Calle 12, Av 0 y 2, Heredia. - Heredia",
            "coordinates":[9.999151614329, -84.1222038003095],
            "provincia":"Heredia",
            "canton":"Heredia"
        },
        {
            "id":22,
            "name":"Sunset Bar, Cartago",
            "address":"C. 20, Provincia de Cartago",
            "coordinates":[9.865754588925551, -83.92916027294237],
            "provincia":"Cartago",
            "canton":"Cartago"
        },
        {
            "id":23,
            "name":"Bungalows Punta Uva Inn",
            "address":"Punta Uva, Limon, Puerto Viejo de Talamanca",
            "coordinates":[9.637076880822034, -82.69195267134793],
            "provincia":"Limon",
            "canton":"Talamanca"
        },
        {
            "id":24,
            "name":"Ciudad Deportiva Hatillo",
            "address":"C. 54, San José, Hatillo 2",
            "coordinates":[9.92107041859867, -84.10443711980712],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":25,
            "name":"Auditorio Nacional",
            "address":"San Jose, CALLE 4, AVENIDA 9",
            "coordinates":[9.940852893974686, -84.07974800144827],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":26,
            "name":"Playa Herradura",
            "address":"Herradura, Puntarenas",
            "coordinates":[9.644790572200876, -84.65521719875309],
            "provincia":"Puntarenas",
            "canton":"Garabito"
        },
        {
            "id":27,
            "name":"Playas Del Coco",
            "address":"Carrillo, Guanacaste",
            "coordinates":[10.552390602938553, -85.6970973621614],
            "provincia":"Guanacaste",
            "canton":"Carrillo"
        },
        {
            "id":28,
            "name":"Cámara De Ganaderos De San Carlos",
            "address":"35 San Carlos, Provincia de Alajuela",
            "coordinates":[10.441031397623432, -84.46696759999524],
            "provincia":"Alajuela",
            "canton":"San Carlos"
        },
        {
            "id":29,
            "name":"Plaza Deportes de Chomes",
            "address":"Puntarenas, Chomes",
            "coordinates":[10.043644725027008, -84.90729508061592],
            "provincia":"Puntarenas",
            "canton":"Puntarenas"
        },
        {
            "id":30,
            "name":"Hacienda Cafetalera CoopeTarrazu",
            "address":"San José Province, San Marcos",
            "coordinates":[9.656251834630117, -84.02904692894116],
            "provincia":"San Jose",
            "canton":"Tarrazú"
        },
        {
            "id":31,
            "name":"Baldoni, Desamparados",
            "address":"contiguo a Urbano Bar",
            "coordinates":[9.906263113272553, -84.06890270848322],
            "provincia":"San Jose",
            "canton":"Desamparados"
        },
        {
            "id":32,
            "name":"Iglesia Catolica Hatillo 2",
            "address":"Iglesia Jesucristo Resucitado, Circunvalación, San José, Hatillo 2",
            "coordinates":[9.920892157805367, -84.10602123091873],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":33,
            "name":"La Diabla",
            "address":"Bar de Diabluras en Barrio La California, San José",
            "coordinates":[9.932755670868785, -84.06910788955186],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":34,
            "name":"Zona Astro",
            "address":"Ctra. Interamericana N, Provincia de Guanacaste, Liberia, El Sitio",
            "coordinates":[10.627685641639562, -85.44478600011928],
            "provincia":"Guanacaste",
            "canton":"Liberia"
        },
        {
            "id":35,
            "name":"Selina Tamarindo",
            "address":"Calle Langosta, Tamarindo Behind Pacific Park building Santa Cruz, Provincia de Guanacaste, Tamarindo",
            "coordinates":[10.297139439649378, -85.842024915343],
            "provincia":"Guanacaste",
            "canton":"Santa Cruz"
        },
        {
            "id":36,
            "name":"Mood Club",
            "address":"San José Province, San José, San Bosco",
            "coordinates":[9.935127048826182, -84.09369991534302],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":37,
            "name":"Mambo Café",
            "address":"San José Province, San José, La California",
            "coordinates":[9.931749591691297, -84.07118974602906],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":38,
            "name":"Zouk Gastro lounge",
            "address":"Parque Comercial Lindora, San José, Santa Ana",
            "coordinates":[9.96328802311532, -84.1984464035632],
            "provincia":"San Jose",
            "canton":"Santa Ana"
        },
        {
            "id":39,
            "name":"Vortex La Calle",
            "address":"WWMX+7HH, San José, San Pedro",
            "coordinates":[9.933117715911107, -84.05103051944683],
            "provincia":"San Jose",
            "canton":"Montes de Oca"
        },
        {
            "id":40,
            "name":"Bar & Restaurante Aprete'C",
            "address":"Provincia de Cartago, Llanos de Santa Lucía, Villa Llanos",
            "coordinates":[9.839188289735969, -83.88633883068607],
            "provincia":"Cartago",
            "canton":"Paraíso"
        },
        {
            "id":41,
            "name":"Member’s",
            "address":"San José Province, San José, Zona Industrial, Costa Rica",
            "coordinates":[9.951215865154344, -84.111602],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":42,
            "name":"Chiquita's Tamarindo",
            "address":"Centro Comercial Vía Condotti, Local Esquinero, Guanacaste Province, Tamarindo",
            "coordinates":[10.29713966378542, -85.84114783068604],
            "provincia":"Guanacaste",
            "canton":"Santa Cruz"
        },
        {
            "id":43,
            "name":"Vibert's Secret Spot",
            "address":"Playa Garza Guanacaste Nicoya, Nosara",
            "coordinates":[9.909349619996785, -85.6461439023026],
            "provincia":"Guanacaste",
            "canton":"Nicoya"
        },
        {
            "id":44,
            "name":"La Concha de la Lora",
            "address":"San José, El Carmen, Costa Rica",
            "coordinates":[9.933534592037224, -84.06921491534303],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":45,
            "name":"Amon Solar",
            "address":"Calle 3, San José, Amón",
            "coordinates":[9.938658070877048, -84.07717899523725],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":46,
            "name":"El Sótano",
            "address":"Avenida 11 y, Calle 3, San José, Costa Rica",
            "coordinates":[9.938597305853046, -84.07719777069981],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":47,
            "name":"Campo Lago",
            "address":"Lindora, del puente sobre el virilla, 100 norte, 600 oeste San Rafael, C. Lindora, Costa Rica",
            "coordinates":[9.965311204868929, -84.20442041890622],
            "provincia":"Alajuela",
            "canton":"Alajuela"
        },
        {
            "id":48,
            "name":"Casa Rojas",
            "address":"Av. 7, San José, Barrio Escalante",
            "coordinates":[9.935544679315916, -84.06391108465698],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":49,
            "name":"Central Pub",
            "address":"P.º Colón, San José, San Francisco, Costa Rica",
            "coordinates":[9.935570364078737, -84.09702966124142],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":50,
            "name":"El Muro Art Pub & Comedy Club",
            "address":"El Muro Art Pub & Comedy Club",
            "coordinates":[9.936390429773233, -84.07517253760886],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":51,
            "name":"Museo del Jade y la Cultura Precolombina",
            "address":"Av 0, Calle 13, San José. - San José",
            "coordinates":[9.933188186159523, -84.07274620356338],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":52,
            "name":"Teatro de la Danza, CENAC",
            "address":"Calle 11A, Av 3-7, San José. - San José",
            "coordinates":[9.935507015660352, -84.0724735121367],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":53,
            "name":"Teatro La Máscara",
            "address":"entre avenida 2 y 6 25 metros sur de la esquina suroeste de la Plaza de la Democracia, sobre calle 13 bis, San José",
            "coordinates":[9.931945754085673, -84.07283983239915],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":54,
            "name":"Teatro Nacional de Costa Rica",
            "address":"Plaza Juan Mora Fernández, Av 0-2. - San José",
            "coordinates":[9.933161084003485, -84.07703142883575],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":55,
            "name":"La Cartonera",
            "address":"San José, Pozos",
            "coordinates":[9.964154889135465, -84.19790343239897],
            "provincia":"San Jose",
            "canton":"Santa Ana"
        },
        {
            "id":56,
            "name":"Centro de Eventos Pedregal",
            "address":"Heredia Province, Heredia, 40703",
            "coordinates":[9.978898047728837, -84.16096239076259],
            "provincia":"Heredia",
            "canton":"Belén"
        },
        {
            "id":57,
            "name":"Teatro Eugene O'Neill",
            "address":"Los Negritos, San José, Dent",
            "coordinates":[9.934037586241024, -84.06127611705614],
            "provincia":"San Jose",
            "canton":"San Jose"
        },
        {
            "id":58,
            "name":"Virtual",
            "address":"Donde tengas señal",
            "coordinates":[0, 0],
            "provincia":"",
            "canton":""
        },
    ]



export default locations


/*
        {
            "id":000000,
            "name":"",
            "address":"",
            "coordinates":[0, 0],
            "provincia":"San Jose",
            "canton":"San Jose"
        },

*/
