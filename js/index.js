

//User Settings defaults
var dieta = false;
var vegetariano = true;
let alimentos = [];

var receitas = {

    paocaseiro: {
        name: 'Pão Caseiro',
        autor: 'João Mateus',
        time: '1 hora',
        portions: '6 pães',
        dificuldade: 1,
        Ingredientes: {
            farinhatrigo: {
                tipo: 'farinha',
                propriedades: [
                    'trigo',
                    'sem fermento'
                ],
                quantidade: 1000,
                texto: '1 kg de farinha de trigo sem fermento'
            },
            leite: {
                tipo: 'laticinios',
                propriedades: [
                    'morno'
                ],
                quantidade: 400,
                texto: '400ml de leite morno'
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 2,
                texto: '2 ovos (remova a película ou pele da gema)'
            },
            fermento: {
                tipo: 'farinha',
                propriedades: [
                    'biológico',
                    'fresco'
                ],
                quantidade: 45,
                texto: '45g de fermento biológico fresco'
            },
            acucar: {
                tipo: 'tempero',
                propriedades: [
                    'acucar'
                ],
                quantidade: 200,
                texto: '1 chávena de açúcar'
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 10,
                texto: '1/2 colher (sopa) de sal'
            },
        },
        Preparação: {
            '1': '1. Bata todos os ingredientes juntos menos o sal e a farinha.',
            '2': '2. Num recipiente largo, meta a sua mistura e adicione metade da farinha, mexendo com uma colher de pau.',
            '3': '3. Guarde uma chávena de farinha e adicione a restante e o sal à mistura.',
            '4': '4. Neste momento ligue seu forno em fogo baixo (e desligue-o após 5 minutos).',
            '5': '5. Enfarinhe uma superfície e sove a massa com carinho até que ela desgrude das mãos.',
            '6': '6. Divida a massa em duas partes iguais e abra cada uma com um rolo, enfarinhando a superfície novamente.',
            '7': '7. Leve os pães ao forno que você aqueceu por 5 minutos e desligou.',
            '8': '8. Deixe-os descansar, para que cresçam, estimulados pelo calor morno durante 20 a 30 minutos.',
            '9': '9. Mesmo que a massa não tenha crescido após esse tempo, ligue o forno em temperatura média (180º C) e deixe ela assar por uns 30, 40 ou 45 minutos (depende do seu forno).',
            '10': '10. Deixe esfriar dentro ou fora do forno.'
        },
        isVeg: true,
        kCal: 500

    },
    carbonara: {
        name: 'Massa carbonara',
        autor: 'Pingo Doce',
        time: '20 minutos',
        portions: '3 pessoas',
        dificuldade: 1,
        Ingredientes: {
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 33,
                texto: '2 colheres de sopa de azeite virgem',
            },
            bacon: {
                tipo: 'carne',
                propriedades: ['porco'],
                quantidade: 200,
                texto: '200 g de bacon'
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 2,
                texto: '2 ovos'
            },
            natas: {
                tipo: 'laticinios',
                propriedades: [
                ],
                quantidade: 80,
                texto: '80 ml de natas'
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 5,
                texto: '1 colher de chá de sal'
            },
            esparguete: {
                tipo: 'massa',
                propriedades: ['esparguete'],
                quantidade: 300,
                texto: '300 g de esparguete',
            },
            parmesao: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'parmesão'],
                quantidade: 50,
                texto: '50 gramas de parmesão ralado',
            },
            pimentapreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
        },
        Preparação: {
            '1': '1. Coloque o azeite numa frigideira e frite o bacon.',
            '2': '2. Bata os ovos, acrescente as natas e tempere com o sal.',
            '3': '3. Junte ao bacon e deixe cozinhar durante 3 minutos em lume brando até engrossar ligeiramente e reserve.',
            '4': '4. Num tacho coza o esparguete em água abundante com uma pitada de sal até que fique al dente, aproximadamente 8 minutos.',
            '5': '5. Escorra o esparguete e adicione-o à frigideira juntamente com 2 colheres de sopa da água da cozedura da massa, envolvendo bem.',
            '6': '6. Sirva de imediato polvilhado com o queijo parmesão ralado e pimenta preta a gosto.',

        },
        isVeg: false,
        kCal: 500

    },
    hamburguergrao: {
        name: 'Hamburguer de grão de bico e linhaça ',
        autor: 'New in town',
        time: '20 minutos',
        portions: '1 pessoa',
        dificuldade: 1,
        Ingredientes: {
            graodebico: {
                tipo: 'feijão',
                propriedades: ['grão de bico', 'cozido'],
                quantidade: 300,
                texto: '300 gr de grão de bico cozido',
            },
            sementeslinhaca: {
                tipo: 'sementes',
                propriedades: ['linhaça', 'moída'],
                quantidade: 20,
                texto: '20 gr de sementes de linhaça moída',
            },
            salsa: {
                tipo: 'condimentos',
                propriedades: ['salsa'],
                quantidade: 15,
                texto: '1 colher de sopa de salsa',
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 1,
                texto: '1 ovo'
            },
            cenoura: {
                tipo: 'vegetal',
                propriedades: ['cenoura', 'média'],
                quantidade: 1,
                texto: '1 cenoura média',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },


        },
        Preparação: {
            '1': '1. Coza o ovo e depois de cozido descasque e corte em pequenos pedaços.',
            '2': '2. Numa taça grande, junte o feijão frade, a cebola, alho, salsa e misture.',
            '3': '3. Adicione o atum, previamente temperado com sal, pimenta e azeite. ',
            '4': '4. Misture.',
            '5': '5. Leve ao frigorífico e sirva a salada fresca.',
        },
        isVeg: true,
        kCal: 230,
    },
    saladafeijao: {
        name: 'Salada de feijão frade e atum',
        autor: 'New in town',
        time: '25 minutos',
        portions: '2 pessoas',
        dificuldade: 2,
        Ingredientes: {
            atum: {
                tipo: 'conservas',
                propriedades: ['atum natural'],
                quantidade: 200,
                texto: '1 lata de atum natural',
            },
            feijaofrade: {
                tipo: 'feijão',
                propriedades: ['frade'],
                quantidade: 200,
                texto: '200 gr de feijão frade',
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 1,
                texto: '1 ovo'
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            }, sal: {
                tipo: 'tempero',
                propriedades: ['sal'],
                quantidade: 0,
                texto: 'sal qb',
            },
            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: '1 cebola',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 1,
                texto: '1 dente de alho',
            },
            salsa: {
                tipo: 'condimentos',
                propriedades: ['salsa'],
                quantidade: 10,
                texto: '2 colheres de chá de salsa'
            },

        },
        isVeg: false,
        kCal: 258,
    },
    omolete: {
        name: 'Omolete de legumes',
        autor: 'New in Town',
        time: '30 minutos',
        portions: '1 pessoa',
        dificuldade: 1,
        Ingredientes: {
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 2,
                texto: '2 ovos'
            },
            claras: {
                tipo: 'ovo',
                propriedades: ['ovo', 'claras'],
                quantidade: 100,
                texto: '100 gr de claras de ovos',
            },
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate'],
                quantidade: 1,
                texto: '1 tomate',
            },
            pimento: {
                tipo: 'vegetal',
                propriedades: ['pimento'],
                quantidade: 2,
                texto: '2 pimentos pequenos',
            },
        },
        Preparação: {
            '1': '1. Bater os ovos com as claras.',
            '2': '2. Cortar os legumes em cubos e juntar aos ovos.',
            '3': '3. Colocar a mistura numa frigideira anti-aderente em lume brando por dez minutos.'
        },
        isVeg: false,
        kCal: 210,
    },
    tomatesrecheados: {
        name: 'Tomates recheados com atum e cogumelos',
        autor: 'New in Town',
        time: '15 minutos',
        dificuldade: 1,
        portions: '1 pessoa',
        Ingredientes: {
            atum: {
                tipo: 'conservas',
                propriedades: ['atum natural'],
                quantidade: 200,
                texto: '1 lata de atum natural',
            },
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'maduro'],
                quantidade: 2,
                texto: '2 tomates maduros',
            },
            cogumelos: {
                tipo: 'vegetal',
                propriedades: ['cogumelos'],
                quantidade: 70,
                texto: '70 gr de cogumelos',
            },
            pimento: {
                tipo: 'vegetal',
                propriedades: ['pimento', 'verde'],
                quantidade: 2,
                texto: '2 pimentos verdes',
            },
            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: '1 cebola',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 2,
                texto: '2 dentes de alho',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 5,
                texto: '1 colher de chá de azeite',
            },
            oregaos: {
                tipo: 'condimentos',
                propriedades: ['oregaos'],
                quantidade: 0,
                texto: 'óregãos qb',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },
            sal: {
                tipo: 'tempero',
                propriedades: ['sal'],
                quantidade: 0,
                texto: 'sal qb',
            },

        },
        Preparação: {
            '1': '1. Numa taça, misture o atum, os cogumelos, a cebola, os pimentos e tempere com azeite, sal, pimenta e óregãos.',
            '2': '2. Corte o topo dos tomates.',
            '3': '3. Leve ao forno. ',
        },
        isVeg: false,
        kCal: 210,
    },
    saladaespargos: {
        name: 'Salada de queijo fresco e espargos',
        autor: 'New in Town',
        time: '5 minutos',
        dificuldade: 1,
        portions: '1 pessoa',
        Ingredientes: {
            queijo: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'fresco', 'amargo'],
                quantidade: 1,
                texto: '1 queijo fresco amargo',
            },
            espargos: {
                tipo: 'vegetal',
                propriedades: ['espargos'],
                quantidade: 150,
                texto: '150 gr de espargos',
            },
            alface: {
                tipo: 'vegetal',
                propriedades: ['alface'],
                quantidade: 100,
                texto: '100 gr de alface',
            },
            rucula: {
                tipo: 'vegetal',
                propriedades: ['rúcula'],
                quantidade: 50,
                texto: '50 gr de rúcula',
            },
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'cherry'],
                quantidade: 5,
                texto: '5 tomates cherry',
            },
            amendoa: {
                tipo: 'fruto seco',
                propriedades: ['amendoa'],
                quantidade: 5,
                texto: '5 amêndoas',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 5,
                texto: '1 colher de chá de azeite',
            },


        },
        Preparação: {
            '1': '1. Coza os espargos e depois corte-os aos cubinhos. ',
            '2': '2. Corte o queijo fresco em cubos.',
            '3': '3. Numa taça grande, coloque o alface, a rúcula, o queijo fresco, os espargos, o tomate e adicione o molho (azeite, vinagre e amêndoas).',
            '4': '4. Misture.',
        },
        isVeg: true,
        kCal: 185,
    },
    carilfrangocourgette: {
        name: 'Caril de frango com courgette',
        autor: 'New in Town',
        time: '20 minutos',
        dificuldade: 2,
        portions: '2 pessoas',
        Ingredientes: {
            frango: {
                tipo: 'carne',
                propriedades: ['frango', 'peito'],
                quantidade: 400,
                texto: '400 gr de peito de frango',
            },
            courgette: {
                tipo: 'legume',
                propriedades: ['courgette'],
                quantidade: 4,
                texto: '4 courgettes médias',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 4,
                texto: '4 dentes de alho',
            },
            louro: {
                tipo: 'condimento',
                propriedades: ['louro', 'folha'],
                quantidade: 1,
                texto: '1 folha de louro',
            },
            malaguetas: {
                tipo: 'condimentos',
                propriedades: ['malaguetas vermelhas'],
                quantidade: 2,
                texto: '2 malaguetas vermelhas',
            },
            caril: {
                tipo: 'condimentos',
                propriedades: ['caril', 'pó'],
                quantidade: 30,
                texto: '2 colheres de sopa de caril em pó',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },
            sal: {
                tipo: 'tempero',
                propriedades: ['sal'],
                quantidade: 0,
                texto: 'sal qb',
            },
        },
        Preparação: {
            '1': '1. Colocar numa frigideira um fio de azeite para saltear o alho, o louro, a malagueta. ',
            '2': '2. Tempere o frango com sal e pimenta.',
            '3': '3. Junte o frango na frigideira e deixe cozinhar por 5 minutos',
            '4': '4. Acrescente a courgette cortada em cubos pequenos e o caril em pó.',
            '5': '5. Aguarde 10 minutos.',
        },
        isVeg: false,
        kCal: 280,
    },
    couveflorfrango: {
        name: 'Couve flor com frango',
        autor: 'New in Town',
        time: '20 minutos',
        dificuldade: 1,
        portions: '1 pessoa ',
        Ingredientes: {
            frango: {
                tipo: 'carne',
                propriedades: ['frango', 'peito'],
                quantidade: 200,
                texto: '200 gr de peito de frango',
            },
            couveflor: {
                tipo: 'legume',
                propriedades: ['couve-flor'],
                quantidade: 1,
                texto: '1 chávena de chá de couve-flor',
            },
            molhosoja: {
                tipo: 'condimentos',
                propriedades: ['molho', 'soja'],
                quantidade: 16,
                texto: '1 colher de sopa de molho de soja',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 16,
                texto: '1 colheres de sopa de azeite virgem',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },
            pimento: {
                tipo: 'vegetal',
                propriedades: ['pimento', 'vermelho'],
                quantidade: 20,
                texto: '20 gr pimentos vermelhos',
            },
            courgette: {
                tipo: 'legume',
                propriedades: ['courgette'],
                quantidade: 1,
                texto: '1 courgettes',
            },
            cogumelos: {
                tipo: 'vegetal',
                propriedades: ['cogumelos'],
                quantidade: 1,
                texto: '1 chávena de cogumelos',
            },
            gengibre: {
                tipo: 'legume',
                propriedades: ['gengibre'],
                quantidade: 1,
                texto: '1 colher de chá de gengibre',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 4,
                texto: '4 dentes de alho',
            },
            cenoura: {
                tipo: 'vegetal',
                propriedades: ['cenoura', 'média'],
                quantidade: 1,
                texto: '1 cenoura média',
            },
            feijaoverde: {
                tipo: 'feijão',
                propriedades: ['feijão-verde'],
                quantidade: 1,
                texto: '1 chávena de feijão verde',
            },
        },
        Preparação: {
            '1': '1. Preparar todos os ingredientes (excepto a courgette), (lavar, cortar em pequenos pedaços) e colocar numa frigideira anti-aderente.',
            '2': '2. Acrescentar os temperos (sal, pimenta).',
            '3': '3. Picar o peito de frango e adicionar à mistura.',
            '4': '4. Cortar a courgette em pedaços e juntar aos legumes.',
            '5': '5. Deixar cozinhar por 15 minutos.',
        },
        isVeg: false,
        kCal: 320
    },
    beringelarecheada: {
        name: 'Beringela recheada',
        autor: 'New in Town',
        time: '25 minutos',
        dificuldade: 4,
        portions: '1 pessoa',
        Ingredientes: {
            beringela: {
                tipo: 'legume',
                propriedades: ['beringela'],
                quantidade: 100,
                texto: '100 gr de beringela',
            },
            cogumelos: {
                tipo: 'vegetal',
                propriedades: ['cogumelos'],
                quantidade: 100,
                texto: '100 gr de cogumelos',
            },
            queijo: {
                tipo: 'laticinios',
                propriedades: ['requeijão', 'light'],
                quantidade: 100,
                texto: '100g de requeijão light',
            },
            peru: {
                tipo: 'carne',
                propriedades: ['bife', 'perú'],
                quantidade: 100,
                texto: '100gr bife de perú',
            },
            oregaos: {
                tipo: 'condimentos',
                propriedades: ['oregaos'],
                quantidade: 5,
                texto: '1 colher de chá de óregãos',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },


        },
        Preparação: {
            '1': '1. Comece por cortar a beringela ao meio e retire a polpa.',
            '2': '2.  De seguida tempere com sal e pimenta.',
            '3': '3. Coloque no microondas por dois minutos.',
            '4': '4. À parte, grelhe os bifes de perú, previamente temperados com sumo de limão e ervas aromáticas e uma pitada de sal. ',
            '5': '5. Corte aos cubinhos.',
            '6': '6. Numa frigideira com um fio de azeite, coloque a beringela e a polpa de beringela e, de seguida, coloque os bifes de perú.',
            '7': '7. No recheio, opte por juntar o requeijão light e misture tudo.',
            '8': '8. Leve ao forno por 10 minutos'
        },
        isVeg: false,
        kCal: 170,
    },
    lasanhaveg: {
        name: 'Lasanha de legumes',
        autor: 'Pingo Doce',
        time: '1 hora',
        dificuldade: 4,
        portions: '4 pessoas',
        Ingredientes: {
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'maduro'],
                quantidade: 500,
                texto: '500 gr de tomate maduro',
            },
            cenoura: {
                tipo: 'vegetal',
                propriedades: ['cenoura'],
                quantidade: 100,
                texto: '100 gr de cenoura ',
            },
            cogumelos: {
                tipo: 'vegetal',
                propriedades: ['cogumelos'],
                quantidade: 300,
                texto: '300 gr de cogumelos',
            },
            beringela: {
                tipo: 'vegetal',
                propriedades: ['beringela'],
                quantidade: 100,
                texto: '100 gr de beringela',
            },
            courgette: {
                tipo: 'legume',
                propriedades: ['courgette'],
                quantidade: 100,
                texto: '100 gr de courgette',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 28,
                texto: '1,5 colheres de sopa de azeite virgem',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 2,
                texto: '2 dentes de alho',
            },
            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: '1 cebola',
            },
            sal: {
                tipo: 'tempero',
                propriedades: ['sal'],
                quantidade: 0,
                texto: 'sal qb',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },
            espinafres: {
                tipo: 'legume',
                propriedades: ['embalagem', 'espinafre'],
                quantidade: 1,
                texto: '1 embalagem de espinafres',
            },
            bechamel: {
                tipo: 'laticinios',
                propriedades: ['molho', 'béchamel'],
                quantidade: 500,
                texto: '500ml de béchamel',
            },
            massalasanha: {
                tipo: 'massa',
                propriedades: ['massa para lasanha'],
                quantidade: 500,
                texto: '500 gr de massa fresca para lasanha',
            },
            mozzarella: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'mozzarella'],
                quantidade: 100,
                texto: '100 gr queijo mozzarella ralado',
            },
            parmesao: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'parmesão'],
                quantidade: 100,
                texto: '100 gr queijo parmesão ralado',
            },
            oregaos: {
                tipo: 'condimentos',
                propriedades: ['oregaos'],
                quantidade: 0,
                texto: 'óregãos qb',
            },
            manjericao: {
                tipo: 'condimentos',
                propriedades: ['manjericao'],
                quantidade: 0,
                texto: 'manjericão qb',
            },
        },
        Preparação: {
            '1': '1. Preaqueça o forno a 180º C.',
            '2': '2. Retire a pele ao tomate e a casca às cenouras e corte aos cubos, separadamente.',
            '3': '3. Lave e corte grosseiramente os cogumelos, a beringela e a courgette.',
            '4': '4. Numa frigideira antiaderente coloque o azeite e o alho.',
            '5': '5. Quando começar a alourar junte a cebola picada e deixe refogar.',
            '6': '6. Junte o tomate e envolva lentamente durante 2 a 3 minutos.',
            '7': '7. Tempere com o sal e também com pimenta qb.',
            '8': '8. Adicione os cogumelos, a beringela e a courgette. ',
            '9': '9. Deixe cozinhar durante 5 minutos, mexendo sempre.',
            '10': '10. Junte os espinafres e misture.',
            '11': '11. Assim que murcharem retire do lume.',
            '12': '12. Espalhe um pouco de béchamel no fundo do tabuleiro, disponha sobre ele a massa fresca para lasanha e em seguida junte o preparado dos legumes.',
            '13': '13. Repita esta operação duas vezes, cobrindo a última camada com molho béchamel.',
            '14': '14. Cubra com os queijos ralados e leve ao forno durante 30 minutos até ficar dourado.',
            '15': '15. Polvilhe com oregãos secos e decore com folhas de manjericão.',
        },
        isVeg: true,
        kCal: 0,
    },
    peixinhos: {
        name: 'Peixinhos da horta',
        autor: 'Pingo Doce',
        time: '30 minutos',
        dificuldade: 2,
        portions: '4 pessoas',
        Ingredientes: {
            feijaoverde: {
                tipo: 'feijão',
                propriedades: ['feijão-verde'],
                quantidade: 400,
                texto: '400 gr de feijão verde',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 8,
                texto: '1 colher de chá e meia de sal'
            },
            farinhamilho: {
                tipo: 'farinha',
                propriedades: ['farinha de milho'],
                quantidade: 130,
                texto: '130 gr de farinha de milho'
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['pó', 'alho em pó'],
                quantidade: 5,
                texto: '1 colher de chá de alho em pó',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 1,
                texto: '1 ovo grande'
            },
            agua: {
                tipo: 'agua',
                propriedades: ['H2o'],
                quantidade: 150,
                texto: '150ml de água',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: [],
                quantidade: 700,
                texto: '700 ml de azeite',
            },


        },
        Preparação: {
            '1': '1. Lave o feijão-verde e elimine as pontas.',
            '2': '2. Corte as vagens ao meio e volte a cortar cada metade em duas partes iguais, no sentido do comprimento.',
            '3': '3. Coza o feijão-verde durante 5 minutos em água a ferver, temperada com 1 colher de chá de sal.',
            '4': '4. Numa taça, misture a farinha de milho com o restante sal, o alho em pó e uma pitada de pimenta moída na altura. ',
            '5': '5. Junte o ovo, já batido, e cerca de 150 ml de água, mexendo muito bem com um garfo até obter um polme liso.',
            '6': '6. Escorra o feijão-verde cozido, espalhe-o sobre um pano de cozinha, enxaguando-o bem.',
            '7': '7. Passe-o pelo polme preparado.',
            '8': '8. Numa frigideira aqueça o azeite e frite o feijão até dourar. ',
            '9': '9. Escorra muito bem sobre papel absorvente.',
        },
        isVeg: true,
        kCal: 277,
    },
    pizzaveg: {
        name: 'Pizza com burrata e pesto',
        autor: 'Pingo Doce',
        time: '30 minutos',
        dificuldade: 1,
        portions: '6 pessoas',
        Ingredientes: {
            massapizza: {
                tipo: 'massa',
                propriedades: ['massa de pizza', 'refrigerada'],
                quantidade: 2,
                texto: '2 massa de pizza refrigerada',
            },
            molhopesto: {
                tipo: 'molho',
                propriedades: ['molho pesto'],
                quantidade: 45,
                texto: '3 colheres de sopa de molho pesto',
            },
            burrata: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'burrata'],
                quantidade: 2,
                texto: '2 embalagens de burrata fresca',
            },
            rucula: {
                tipo: 'vegetal',
                propriedades: ['rúcula'],
                quantidade: 1,
                texto: '1 embalagem de rúcula',
            },
            pinhoes: {
                tipo: 'fruto seco',
                propriedades: ['pinhoes', 'torrados'],
                quantidade: 30,
                texto: '2 colheres de sopa de pinhões torrados'
            },
            azeite: {
                tipo: 'azeite',
                propriedades: [],
                quantidade: 33,
                texto: '2 colheres de sopa de azeite',
            },
            salgrosso: {
                tipo: 'tempero',
                propriedades: ['sal', 'sal grosso'],
                quantidade: 5,
                texto: '1 colher de chá de sal grosso',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
        },
        Preparação: {
            '1': '1. Abra as massas de pizza, junte-as e forme uma bola grande.',
            '2': '2. Estique a massa numa bancada enfarinhada, com a ajuda de um rolo da massa, dando-lhe uma forma oval.',
            '3': '3. Regue a massa com 1 colher de sopa de azeite, polvilhe com o sal e espalhe o pesto.',
            '4': '4. Leve ao forno, pré-aquecido a 190 °C, cerca de 12 minutos.',
            '5': '5. Retire a base do forno.  ',
            '6': '6. Espalhe por cima as burratas e cubra com a rúcula e com os pinhões torrados.',
            '7': '7. Regue com o restante azeite, pimenta e sirva de imediato.',
        },
        isVeg: true,
        kCal: 456,
    },
    quinoa: {
        name: 'Quinoa salteada com ovo e abacate',
        autor: 'Pingo Doce',
        time: '30 minutos',
        dificuldade: 1,
        portions: '4 pessoas',
        Ingredientes: {
            quinoa: {
                tipo: '???',
                propriedades: ['quinoa branca'],
                quantidade: 200,
                texto: '200 gr de quinoa branca',
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 4,
                texto: '4 ovos médios'
            },
            legumes: {
                tipo: 'legumes',
                propriedades: 'embalagem',
                quantidade: 1,
                texto: '1 embalagem de mistura de legumes'
            },
            abacate: {
                tipo: 'fruta',
                propriedades: ['abacate'],
                quantidade: 2,
                texto: '2 abacates',
            },
            coentros: {
                tipo: 'condimentos',
                propriedades: ['coentros'],
                quantidade: 0,
                texto: 'coentros qb',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 10,
                texto: '2 colheres de chá de sal'
            },
            azeite: {
                tipo: 'azeite',
                propriedades: [],
                quantidade: 33,
                texto: '2 colheres de sopa de azeite',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 2,
                texto: '2 dentes de alho',
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },




        },
        Preparação: {
            '1': '1. Cozinhe a quinoa, conforme as instruções da embalagem, com metade do sal.',
            '2': '2. Aqueça meia colher de azeite numa frigideira anti-aderente e estrele os ovos um a um e reserve.',
            '3': '3. Na mesma frigideira, aqueça o restante azeite.',
            '4': '4. Junte os dentes de alho, previamente descascados, e cozinhe durante 2 minutos.',
            '5': '5. Junte a mistura de legumes e deixe cozinhar mais 4 minutos, juntando o restante sal.',
            '6': '6. Adicione a quinoa reservada e tempere com pimenta.',
            '7': '7. Sirva em pratos com o abacate cortado em fatias e o ovo estrelado.',
            '8': '8.Polvilhe com coentros.',
        },
        isVeg: true,
        kCal: 476,
    },
    tortellini: {
        name: 'Tortellini de espinafres e ovo',
        autor: 'Pingo Doce',
        time: '20 minutos',
        dificuldade: 1,
        portions: '4 pessoas',
        Ingredientes: {
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'seco'],
                quantidade: 40,
                texto: '40 gr de tomate seco',
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 2,
                texto: '2 ovos grandes'
            },
            espinafres: {
                tipo: 'legume',
                propriedades: ['embalagem', 'espinafre'],
                quantidade: 1,
                texto: '1 embalagem de espinafres',
            },
            ricotaespinafre: {
                tipo: 'mistura',
                propriedades: ['ricotta', 'espinafres'],
                quantidade: 1,
                texto: '1 embalagem de tortellini de ricota e espinafres',
            },
            miolonoz: {
                time: 'fruto seco',
                propriedades: ['noz', 'miolo noz'],
                quantidade: 60,
                texto: '60 gr de miolo de noz',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 10,
                texto: '1/2 colher (sopa) de sal'
            },
            pimentaPreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 30,
                texto: '1 colhere e meia de sopa de azeite virgem',
            },
        },
        Preparação: {
            '1': '1. Leve ao lume um tacho com a água e a colher de sobremesa de sal e deixe ferver.',
            '2': '2. Pique o tomate seco em pedaços e reserve. ',
            '3': '3. Parta os ovos para uma taça, tempere-os com o restante sal e um pouco de pimenta e bata-os com um garfo até estarem desfeitos e reserve.',
            '4': '4. Deite cerca de uma colher de chá de azeite numa frigideira antiaderente (+– 16 cm de diâmetro) e disponha aí os ovos batidos. ',
            '5': '5. Salpique com cerca de metade do tomate seco picado e deixe cozer até conseguir virar o crepe de ovo com uma espátula.',
            '6': '6. Vire, cozinhe mais um minuto, retire do lume e corte em tiras e reserve.',
            '7': '7. Coza a massa durante o tempo indicado na embalagem.',
            '8': '8. Aqueça o restante azeite numa frigideira larga antiaderente, adicione os espinafres e salteie-os em lume médio a forte até murcharem.',
            '9': '9. Retire a massa do lume e escorra-a, reservando duas a três colheres de água, que deverá adicionar aos espinafres. ',
            '10': '10. Junte o restante tomate seco, mexa e coloque tudo no recipiente de servir.',
            '11': '11. Salpique com as tiras de ovo e as nozes grosseiramente partidas e tempere com um pouco de pimenta.',
            '12': '12. Sirva de imediato.'
        },
        isVeg: true,
        kCal: 376,
    },
    croquetes: {
        name: 'Croquetes de arroz de tomate',
        autor: 'Pingo Doce',
        time: '30 minutos',
        dificuldade: 3,
        portions: '8 croquetes',
        Ingredientes: {
            arroz: {
                tipo: 'arroz',
                propriedades: ['sobras'],
                quantidade: 200,
                texto: '200 gr de sobras de arroz de tomate frio',
            },
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 3,
                texto: '3 ovos médios'
            },
            queijo: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'ralado'],
                quantidade: 80,
                texto: '80 gramas de queijo ralado',
            },
            salsa: {
                tipo: 'condimento',
                propriedades: ['salsa'],
                quantidade: 15,
                texto: '1 colher de sopa de salsa picada'
            },
            pimentapreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
            mozzarella: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'mozzarella'],
                quantidade: 1,
                texto: '1 mozzarella fresca aos cubos',
            },
            oleo: {
                tipo: 'oleo',
                propriedades: '',
                quantidade: 500,
                texto: '500 ml de óleo (para fritar)',
            },
            manjericao: {
                tipo: 'condimentos',
                propriedades: ['manjericao'],
                quantidade: 0,
                texto: 'manjericão qb',
            },
            farinha: {
                tipo: 'farinha',
                propriedades: [],
                quantidade: 0,
                texto: 'meia chávena de farinha'
            },
            paoralado: {
                tipo: 'farinha',
                propriedades: 'pao ralado',
                quantidade: 200,
                texto: '200 gr de pão ralado',
            },
        },

        Preparação: {
            '1': '1. Junte numa taça o arroz, o ovo, o queijo ralado, a salsa e pimenta a gosto.',
            '2': '2. Misture tudo.',
            '3': '3. Para a cobertura, coloque em 3 taças diferentes a farinha, noutra os ovos batidos e na última o pão ralado.',
            '4': '4. Espalhe um pouco da mistura de arroz nas mãos e coloque no centro um quadrado de mozzarella.',
            '5': '5. Feche formando uma bola.',
            '6': '6. Passe a bola pela farinha, em seguida pelo ovo e por fim pelo pão ralado.',
            '7': '7. Continue este processo até o arroz acabar. ',
            '8': '8. Numa frigideira, aqueça o óleo e frite as bolas de arroz.',
            '9': '9. Sirva-as quentes e decore com folhas de manjericão.',
        },
        isVeg: true,
        kCal: 365,
    },
    caril: {
        name: '',
        autor: 'Pingo Doce',
        time: '1 hora',
        dificuldade: 1,
        portions: '4 pessoas',
        Ingredientes: {
            lentilhas: {
                tipo: 'legume',
                propriedades: ['lentilhas'],
                quantidade: 200,
                texto: '200 gr de lentilhas verdes',
            },
            oleococo: {
                tipo: 'oleo',
                propriedades: ['oleo de coco', 'coco'],
                quantidade: 2,
                texto: '2 colheres de sopa de óleo de coco',
            },
            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: '1 cebola picada',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 4,
                texto: '4 dentes de alho picado',
            },
            gengibre: {
                tipo: 'legume',
                propriedades: ['gengibre'],
                quantidade: 2,
                texto: '2 colheres de sopa de gengibre picado',
            },
            caril: {
                tipo: 'condimentos',
                propriedades: ['caril', 'pó'],
                quantidade: 15,
                texto: '1 colher de sopa de caril em pó',
            },
            leitecoco: {
                tipo: 'laticinios',
                propriedades: [
                    'leite de coco', 'coco'
                ],
                quantidade: 200,
                texto: '200ml de leite de coco'
            },
            pimento: {
                tipo: 'vegetal',
                propriedades: ['pimento verde'],
                quantidade: 2,
                texto: 'meio pimento verde em puré',
            },
            tomate: {
                tipo: 'vegetal',
                propriedades: ['tomate'],
                quantidade: 1,
                texto: '1 lata de tomate em pedaços',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 0,
                texto: 'sal qb'
            },
            coentros: {
                tipo: 'condimentos',
                propriedades: ['coentros'],
                quantidade: 0,
                texto: 'coentros qb',
            },
            basmati: {
                tipo: 'arroz',
                propriedades: 'Basmati',
                quantidade: 350,
                texto: '350 gr de arroz Basmati feito',
            },

        },
        Preparação: {
            '1': '1. Coloque as lentilhas de molho durante 30 minutos.',
            '2': '2. Aqueça o óleo de coco num tacho, junte-lhe a cebola, o alho e o gengibre e deixe cozinhar em lume brando 3 minutos.',
            '3': '3. Junte o caril e misture.',
            '4': '4. Adicione as lentilhas, o leite de coco, o pimento verde triturado em puré e o tomate.',
            '5': '5. Tempere com o sal e deixe cozinhar em lume brando cerca de 15 minutos.',
            '6': '6. Sirva com os coentros picados e o arroz basmati.',
        },
        isVeg: true,
        kCal: 309,
    },
    saladatomatemozzarella: {
        name: 'Salada de tomate com mozzarella',
        autor: 'Pingo Doce',
        time: '25 minutos',
        dificuldade: 3,
        portions: '4 pessoas',
        Ingredientes: {
            pinhoes: {
                tipo: 'fruto seco',
                propriedades: ['pinhoes', 'miolo'],
                quantidade: 20,
                texto: '20 gr de miolo de pinhão',
            },
            tomatecherryvermelho: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'cherry', 'vermelho'],
                quantidade: 250,
                texto: '250 gr de tomate cherry vermelho',
            },
            tomatecherryamarelo: {
                tipo: 'vegetal',
                propriedades: ['tomate', 'cherry', 'amarelo'],
                quantidade: 250,
                texto: '250 gr de tomate cherry amarelo',
            },
            abacate: {
                tipo: 'fruta',
                propriedades: ['abacate'],
                quantidade: 1,
                texto: '1 abacate',
            },
            limao: {
                tipo: 'fruto',
                propriedades: ['limão'],
                quantidade: 0,
                texto: 'meio limão',
            },
            manjericao: {
                tipo: 'condimentos',
                propriedades: ['manjericao'],
                quantidade: 50,
                texto: '50 gr de manjericão fresco',
            },
            mel: {
                tipo: 'condimento',
                propriedades: ['mel', 'doce'],
                quantidade: 1,
                texto: '1 colher de sopa de mel',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: [],
                quantidade: 33,
                texto: '2 colheres de sopa de azeite',
            },
            vinagre: {
                tipo: 'molho',
                propriedades: ['vinagre', 'balsamico'],
                quantidade: 33,
                texto: '2 colheres de sobremesa de vinagre balsâmico'
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 10,
                texto: '1 colher de chá de sal'
            },
            pimentapreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb'
            },
            mozzarella: {
                tipo: 'laticinios',
                propriedades: ['queijo', 'mozzarella'],
                quantidade: 250,
                texto: '250 gr queijo mozzarela',
            },
        },
        Preparação: {
            '1': '1. Numa frigideira anti-aderente aloure os pinhões, agitando a frigideira frequentemente.',
            '2': '2. Ao mesmo tempo, lave o tomate e corte-o ao meio e reserve.',
            '3': '3. Abra os abacates ao meio, elimine os caroços e retire a casca.',
            '4': '4. Regue a polpa com um pouco de sumo de limão, corte em pedaços e junte ao tomate.',
            '5': '5. Reserve as folhas mais bonitas do manjericão, corte as restantes em tiras e misture com os legumes e o abacate.',
            '6': '6. Aqueça o mel levemente no microondas, junte-lhe o azeite, o vinagre balsâmico e o sal.',
            '7': '7. Tempere com pimenta moída na altura, misture tudo muito bem e deite sobre os legumes.',
            '8': '8. Mexa delicadamente e coloque num prato de servir.',
            '9': '9. Por cima espalhe as mozzarellas míni, bem escorridas, salpique com os pinhões tostados e com as folhas de manjericão reservadas.',
        },
        isVeg: true,
        kCal: 348,
    },
    outrareceita: {
        name: '',
        autor: '',
        time: '',
        dificuldade: 1,
        portions: '',
        Ingredientes: {},
        Preparação: {
            '1': '1. ',
            '2': '2. ',
            '3': '3. ',
            '4': '4. ',
            '5': '5. ',
            '6': '6. ',
            '7': '7. ',
        },
        isVeg: false,
        kCal: 0,
    }
}
//this is huge
//isto nao sao os ingredientes que o utilizador tem, mas sim os disponiveis
var basedadosingred = {
    farinhatrigo: {
        tipo: 'farinha',
        propriedades: [
            'trigo',
            'sem fermento'
        ],
        quantidade: 1000,
        texto: '1 kg de farinha de trigo sem fermento'
        , nome: 'Farinha de Trigo'
    },
    leite: {
        tipo: 'laticinios',
        propriedades: [
            'morno'
        ],
        quantidade: 400,
        texto: '400ml de leite morno'
        , nome: 'Leite'

    },
    ovo: {
        tipo: 'ovo',
        propriedades: [],
        quantidade: 2,
        texto: '2 ovos (remova a película ou pele da gema)'
        , nome: 'Ovo'

    },
    fermento: {
        tipo: 'farinha',
        propriedades: [
            'biológico',
            'fresco'
        ],

        quantidade: 45,
        texto: '45g de fermento biológico fresco'

        , nome: 'Fermento'

    },
    acucar: {
        tipo: 'tempero',
        propriedades: [
            'acucar'
        ],
        quantidade: 200,
        texto: '1 chávena de açúcar'
        , nome: 'Açúcar'
    },
    sal: {
        tipo: 'tempero',
        propriedades: [
            'sal'
        ],
        quantidade: 10,
        texto: '1/2 colher (sopa) de sal'

        , nome: 'Sal'
    },
    graodebico: {
        tipo: 'feijão',
        propriedades: ['grão de bico', 'cozido'],
        quantidade: 300,
        texto: '300 gr de grão de bico cozido',
        nome: 'Grão de Bico'
    },
    sementeslinhaca: {
        tipo: 'sementes',
        propriedades: ['linhaça', 'moída'],
        quantidade: 20,
        texto: '20 gr de sementes de linhaça moída',
        nome: 'Sementes de Linhaça'
    },
    salsa: {
        tipo: 'condimentos',
        propriedades: ['salsa'],
        quantidade: 15,
        texto: '1 colher de sopa de salsa'
        , nome: 'Salsa'
    },

    cenoura: {
        tipo: 'vegetal',
        propriedades: ['cenoura', 'média'],
        quantidade: 1,
        texto: '1 cenoura média',
        nome: 'Cenoura'
    },
    atum: {
        tipo: 'conservas',
        propriedades: ['atum natural'],
        quantidade: 200,
        texto: '1 lata de atum natural',

        nome: 'Atum'

    },
    feijaofrade: {
        tipo: 'feijão',
        propriedades: ['frade'],
        quantidade: 200,
        texto: '200 gr de feijão frade',
        nome: 'Feijão Frade',
    },


    cebola: {
        tipo: 'vegetal',
        propriedades: ['cebola'],
        quantidade: 1,
        texto: '1 cebola',
        nome: 'Cebola',
    },
    alho: {
        tipo: 'condimentos',
        propriedades: ['dente de alho', 'alho'],
        quantidade: 1,
        texto: '1 dente de alho',

        nome: 'Alho',

    },

    claras: {
        tipo: 'ovo',
        propriedades: ['ovo', 'claras'],
        quantidade: 100,
        texto: '100 gr de claras de ovos',

        nome: 'Claras',
    },
    tomate: {
        tipo: 'vegetal',
        propriedades: ['tomate'],
        quantidade: 1,
        texto: '1 tomate',
        nome: 'Tomate',
    },


    cogumelos: {
        tipo: 'vegetal',
        propriedades: ['cogumelos'],
        quantidade: 70,
        texto: '70 gr de cogumelos',

        nome: 'Cogumelos',
    },




    oregaos: {
        tipo: 'condimentos',
        propriedades: ['oregaos'],
        quantidade: 0,
        texto: 'óregãos qb',

        nome: 'Orégãos',
    },

    queijo: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'fresco', 'amargo'],
        quantidade: 1,
        texto: '1 queijo fresco amargo',

        nome: 'Queijo',
    },
    espargos: {
        tipo: 'vegetal',
        propriedades: ['espargos'],
        quantidade: 150,
        texto: '150 gr de espargos',
        nome: 'Espargos',
    },
    alface: {
        tipo: 'vegetal',
        propriedades: ['alface'],
        quantidade: 100,
        texto: '100 gr de alface',
        nome: 'Alface',
    },
    rucula: {
        tipo: 'vegetal',
        propriedades: ['rúcula'],
        quantidade: 50,
        texto: '50 gr de rúcula',

        nome: 'Rúcula',
    },

    amendoa: {
        tipo: 'fruto seco',
        propriedades: ['amendoa'],
        quantidade: 5,
        texto: '5 amêndoas',

        nome: 'Amêndoa',
    },

    frango: {
        tipo: 'carne',
        propriedades: ['frango', 'peito'],
        quantidade: 400,
        texto: '400 gr de peito de frango',
        nome: 'Frango',
    },
    courgette: {
        tipo: 'legume',
        propriedades: ['courgette'],
        quantidade: 4,
        texto: '4 courgettes médias',
        nome: 'Courgette',
    },

    louro: {
        tipo: 'condimento',
        propriedades: ['louro', 'folha'],
        quantidade: 1,
        texto: '1 folha de louro',
        nome: 'Louro',
    },
    malaguetas: {
        tipo: 'condimentos',
        propriedades: ['malaguetas vermelhas'],
        quantidade: 2,
        texto: '2 malaguetas vermelhas',
        nome: 'Malaguetas',
    },
    caril: {
        tipo: 'condimentos',
        propriedades: ['caril', 'pó'],
        quantidade: 30,
        texto: '2 colheres de sopa de caril em pó',

        nome: 'Caril',
    },


    couveflor: {
        tipo: 'legume',
        propriedades: ['couve-flor'],
        quantidade: 1,
        texto: '1 chávena de chá de couve-flor',
        nome: 'Couve-Flor',
    },
    molhosoja: {
        tipo: 'condimentos',
        propriedades: ['molho', 'soja'],
        quantidade: 16,
        texto: '1 colher de sopa de molho de soja',
        nome: 'Molho de Soja',
    },
    azeite: {
        tipo: 'azeite',
        propriedades: ['virgem'],
        quantidade: 16,
        texto: '1 colheres de sopa de azeite virgem',
        nome: 'Azeite',
    },





    gengibre: {
        tipo: 'legume',
        propriedades: ['gengibre'],
        quantidade: 1,
        texto: '1 colher de chá de gengibre',
        nome: 'Gengibre',
    },


    feijaoverde: {
        tipo: 'feijão',
        propriedades: ['feijão-verde'],
        quantidade: 1,
        texto: '1 chávena de feijão verde',
        nome: 'Feijão Verde',
    },
    beringela: {
        tipo: 'legume',
        propriedades: ['beringela'],
        quantidade: 100,
        texto: '100 gr de beringela',
        nome: 'Beringela',
    },


    peru: {
        tipo: 'carne',
        propriedades: ['bife', 'perú'],
        quantidade: 100,
        texto: '100gr bife de perú',
        nome: 'Perú',
    },






    pimentapreta: {
        tipo: 'condimentos',
        propriedades: ['pimenta', 'primenta preta'],
        quantidade: 0,
        texto: 'pimenta preta qb',
        nome: 'Pimenta Preta',
    },
    espinafres: {
        tipo: 'legume',
        propriedades: ['embalagem', 'espinafre'],
        quantidade: 1,
        texto: '1 embalagem de espinafres',
        nome: 'Espinafres',
    },
    bechamel: {
        tipo: 'laticinios',
        propriedades: ['molho', 'béchamel'],
        quantidade: 500,
        texto: '500ml de béchamel',
        nome: 'Molho Bechamel',
    },
    massalasanha: {
        tipo: 'massa',
        propriedades: ['massa para lasanha'],
        quantidade: 500,
        texto: '500 gr de massa fresca para lasanha',
        nome: 'Massa p/ Lasanha',
    },
    mozzarella: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'mozzarella'],
        quantidade: 100,
        texto: '100 gr queijo mozzarella ralado',
        nome: 'Queijo Mozzarella',
    },
    parmesao: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'parmesão'],
        quantidade: 100,
        texto: '100 gr queijo parmesão ralado',
        nome: 'Queijo Parmesão',
    },

    manjericao: {
        tipo: 'condimentos',
        propriedades: ['manjericao'],
        quantidade: 0,
        texto: 'manjericão qb',

        nome: 'Manjericão',
    },


    farinhamilho: {
        tipo: 'farinha',
        propriedades: ['farinha de milho'],
        quantidade: 130,
        texto: '130 gr de farinha de milho',
        nome: 'Farinha de Milho'
    },

    agua: {
        tipo: 'agua',
        propriedades: ['H2o'],
        quantidade: 150,
        texto: '150ml de água',
        nome: 'Água',
    },

    massapizza: {
        tipo: 'massa',
        propriedades: ['massa de pizza', 'refrigerada'],
        quantidade: 2,
        texto: '2 massa de pizza refrigerada',
        nome: 'Massa de Pizza',
    },
    molhopesto: {
        tipo: 'molho',
        propriedades: ['molho pesto'],
        quantidade: 45,
        texto: '3 colheres de sopa de molho pesto',
        nome: 'Molho Pesto',
    },
    burrata: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'burrata'],
        quantidade: 2,
        texto: '2 embalagens de burrata fresca',
        nome: 'Burrata',
    },

    pinhoes: {
        tipo: 'fruto seco',
        propriedades: ['pinhoes', 'torrados'],
        quantidade: 30,
        texto: '2 colheres de sopa de pinhões torrados',
        nome: 'Pinhões',
    },

    salgrosso: {
        tipo: 'tempero',
        propriedades: ['sal', 'sal grosso'],
        quantidade: 5,
        texto: '1 colher de chá de sal grosso',
        nome: 'Sal Grosso',
    },

    quinoa: {
        tipo: '???',
        propriedades: ['quinoa branca'],
        quantidade: 200,
        texto: '200 gr de quinoa branca',
        nome: 'Quinoa',
    },

    legumes: {
        tipo: 'legumes',
        propriedades: 'embalagem',
        quantidade: 1,
        texto: '1 embalagem de mistura de legumes',
        nome: 'Legumes',
    },
    abacate: {
        tipo: 'fruta',
        propriedades: ['abacate'],
        quantidade: 2,
        texto: '2 abacates',
        nome: 'Abacate',
    },
    coentros: {
        tipo: 'condimentos',
        propriedades: ['coentros'],
        quantidade: 0,
        texto: 'coentros qb',
        nome: 'Coentros',
    },

    ricotaespinafre: {
        tipo: 'mistura',
        propriedades: ['ricotta', 'espinafres'],
        quantidade: 1,
        texto: '1 embalagem de tortellini de ricota e espinafres',

        nome: 'Ricotta e Espinafres',
    },
    miolonoz: {
        time: 'fruto seco',
        propriedades: ['noz', 'miolo noz'],
        quantidade: 60,
        texto: '60 gr de miolo de noz',
        nome: 'Miolo de Noz',
    },


    arroz: {
        tipo: 'arroz',
        propriedades: ['sobras'],
        quantidade: 200,
        texto: '200 gr de sobras de arroz de tomate frio',
        nome: 'Arroz',
    },


    oleo: {
        tipo: 'oleo',
        propriedades: '',
        quantidade: 500,
        texto: '500 ml de óleo (para fritar)',
        nome: 'Óleo',
    },

    farinha: {
        tipo: 'farinha',
        propriedades: [],
        quantidade: 0,
        texto: 'meia chávena de farinha',
        nome: 'Farinha',
    },
    paoralado: {
        tipo: 'farinha',
        propriedades: 'pao ralado',
        quantidade: 200,
        texto: '200 gr de pão ralado',
        nome: 'Pão Ralado',
    },
    lentilhas: {
        tipo: 'legume',
        propriedades: ['lentilhas'],
        quantidade: 200,
        texto: '200 gr de lentilhas verdes',
        nome: 'Lentilhas',
    },
    oleococo: {
        tipo: 'oleo',
        propriedades: ['oleo de coco', 'coco'],
        quantidade: 2,
        texto: '2 colheres de sopa de óleo de coco',
        nome: 'Óleo de Coco',
    },



    leitecoco: {
        tipo: 'laticinios',
        propriedades: [
            'leite de coco', 'coco'
        ],
        quantidade: 200,
        texto: '200ml de leite de coco',
        nome: 'Leite de Coco',
    },
    pimento: {
        tipo: 'vegetal',
        propriedades: ['pimento verde'],
        quantidade: 2,
        texto: 'meio pimento verde em puré',
        nome: 'Pimento',
    },


    basmati: {
        tipo: 'arroz',
        propriedades: 'Basmati',
        quantidade: 350,
        texto: '350 gr de arroz Basmati feito',
        nome: 'Arroz Basmatti',
    },
    tomatecherryvermelho: {
        tipo: 'vegetal',
        propriedades: ['tomate', 'cherry', 'vermelho'],
        quantidade: 250,
        texto: '250 gr de tomate cherry vermelho',
        nome: 'Tomate Cherry Vermelho',
    },
    tomatecherryamarelo: {
        tipo: 'vegetal',
        propriedades: ['tomate', 'cherry', 'amarelo'],
        quantidade: 250,
        texto: '250 gr de tomate cherry amarelo',

        nome: 'Tomate Cherry Amarelo',
    },

    limao: {
        tipo: 'fruto',
        propriedades: ['limão'],
        quantidade: 0,
        texto: 'meio limão',
        nome: 'Limão',
    },

    mel: {
        tipo: 'condimento',
        propriedades: ['mel', 'doce'],
        quantidade: 1,
        texto: '1 colher de sopa de mel',
        nome: 'Mel',
    },

    vinagre: {
        tipo: 'molho',
        propriedades: ['vinagre', 'balsamico'],
        quantidade: 33,
        texto: '2 colheres de sobremesa de vinagre balsâmico',
        nome: 'Vinagre',
    },





}


var inventario = {
    farinhatrigo: {
        tipo: 'farinha',
        propriedades: [
            'trigo',
            'sem fermento'
        ],
        quantidade: 100,
        texto: '1 kg de farinha de trigo sem fermento'
        , nome: 'Farinha de Trigo'
    },
    leite: {
        tipo: 'laticinios',
        propriedades: [
            'morno'
        ],
        quantidade: 400,
        texto: '400ml de leite morno'
        , nome: 'Leite'

    },
    ovo: {
        tipo: 'ovo',
        propriedades: [],
        quantidade: 2,
        texto: '2 ovos (remova a película ou pele da gema)'
        , nome: 'Ovo'

    },
    fermento: {
        tipo: 'farinha',
        propriedades: [
            'biológico',
            'fresco'
        ],

        quantidade: 45,
        texto: '45g de fermento biológico fresco'

        , nome: 'Fermento'

    },
    acucar: {
        tipo: 'tempero',
        propriedades: [
            'acucar'
        ],
        quantidade: 200,
        texto: '1 chávena de açúcar'
        , nome: 'Açúcar'
    },
    sal: {
        tipo: 'tempero',
        propriedades: [
            'sal'
        ],
        quantidade: 10,
        texto: '1/2 colher (sopa) de sal'

        , nome: 'Sal'
    },
    graodebico: {
        tipo: 'feijão',
        propriedades: ['grão de bico', 'cozido'],
        quantidade: 300,
        texto: '300 gr de grão de bico cozido',
        nome: 'Grão de Bico'
    },
    sementeslinhaca: {
        tipo: 'sementes',
        propriedades: ['linhaça', 'moída'],
        quantidade: 20,
        texto: '20 gr de sementes de linhaça moída',
        nome: 'Sementes de Linhaça'
    },
    salsa: {
        tipo: 'condimentos',
        propriedades: ['salsa'],
        quantidade: 15,
        texto: '1 colher de sopa de salsa'
        , nome: 'Salsa'
    },

    cenoura: {
        tipo: 'vegetal',
        propriedades: ['cenoura', 'média'],
        quantidade: 1,
        texto: '1 cenoura média',
        nome: 'Cenoura'
    },
    atum: {
        tipo: 'conservas',
        propriedades: ['atum natural'],
        quantidade: 200,
        texto: '1 lata de atum natural',

        nome: 'Atum'

    },
    feijaofrade: {
        tipo: 'feijão',
        propriedades: ['frade'],
        quantidade: 200,
        texto: '200 gr de feijão frade',
        nome: 'Feijão Frade',
    },


    cebola: {
        tipo: 'vegetal',
        propriedades: ['cebola'],
        quantidade: 1,
        texto: '1 cebola',
        nome: 'Cebola',
    },
    alho: {
        tipo: 'condimentos',
        propriedades: ['dente de alho', 'alho'],
        quantidade: 1,
        texto: '1 dente de alho',

        nome: 'Alho',

    },

    claras: {
        tipo: 'ovo',
        propriedades: ['ovo', 'claras'],
        quantidade: 100,
        texto: '100 gr de claras de ovos',

        nome: 'Claras',
    },
    tomate: {
        tipo: 'vegetal',
        propriedades: ['tomate'],
        quantidade: 1,
        texto: '1 tomate',
        nome: 'Tomate',
    },


    cogumelos: {
        tipo: 'vegetal',
        propriedades: ['cogumelos'],
        quantidade: 70,
        texto: '70 gr de cogumelos',

        nome: 'Cogumelos',
    },




    oregaos: {
        tipo: 'condimentos',
        propriedades: ['oregaos'],
        quantidade: 0,
        texto: 'óregãos qb',

        nome: 'Orégãos',
    },

    queijo: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'fresco', 'amargo'],
        quantidade: 1,
        texto: '1 queijo fresco amargo',

        nome: 'Queijo',
    },
    espargos: {
        tipo: 'vegetal',
        propriedades: ['espargos'],
        quantidade: 150,
        texto: '150 gr de espargos',
        nome: 'Espargos',
    },
    alface: {
        tipo: 'vegetal',
        propriedades: ['alface'],
        quantidade: 100,
        texto: '100 gr de alface',
        nome: 'Alface',
    },
    rucula: {
        tipo: 'vegetal',
        propriedades: ['rúcula'],
        quantidade: 50,
        texto: '50 gr de rúcula',

        nome: 'Rúcula',
    },

    amendoa: {
        tipo: 'fruto seco',
        propriedades: ['amendoa'],
        quantidade: 5,
        texto: '5 amêndoas',

        nome: 'Amêndoa',
    },
}
//console.log(receitas); test stuff
$('#simveg').on('click change', function () {
    // alert("veg true");
    vegetariano = true;
});
$('#naoveg').on('click change', function () {
    // alert("veg false");
    vegetariano = false;
});

$('#simdiet').on('click change', function () {
    // alert("dieta true");
    dieta = true;
});

$('#naodiet').on('click change', function () {
    // alert("dieta false");
    dieta = false;
});


function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//recipe modal call

$('#theModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var name = button.data('name') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    var nome;
    var autor;
    var diff;
    var port;
    var time;
    var ingredientes;
    var passos;
    var details;
    $("#ingredientes").empty();
    $("#receitaEtapas").empty();


    for (var property in receitas) {
        console.log(property);
        if (property == name) {
            // alert('beep');
            details = receitas[property];
            console.log(details);
            nome = details['name'];
            autor = details['autor'];
            console.log(autor);
            diff = details['dificuldade'];
            port = details['portions'];
            time = details['time'];

            ingredientes = details['Ingredientes'];








            for (var item in ingredientes) {
              //  console.log(inventario);
                // console.log(ingredientes[item]['texto']);
                if (item in inventario) {
                    console.log('necessario:'+ingredientes[item]['quantidade']);
                    console.log('existe'+inventario[item]['quantidade']);
                    console.log((ingredientes[item]['quantidade'] > inventario[item]['quantidade']));
                    if (ingredientes[item]['quantidade'] > inventario[item]['quantidade']) {
                        console.log(ingredientes[item]['quantidade']+'MIMIMIMI');
                        $("#ingredientes").append("<li style=\"color:red\">" + ingredientes[item]['texto'] + "</li>");
                        alert("beepbeep");
                        console.log("LAAAAAAALALAALLALALALALAL");
                    } else {
                        $("#ingredientes").append("<li>" + ingredientes[item]['texto'] + "</li>");

                    }
                    //console.log("aaaa");
                } else {
                    $("#ingredientes").append("<li style=\"color:red\">" + ingredientes[item]['texto'] + "</li>");
                }
                passos = details['Preparação'];}
                for (var item in passos) {
                    $("#receitaEtapas").append("<li>" + passos[item] + "</li>");
                }
                //console.log(autor+" , "+diff +" ," + JSON.stringify(ingredientes));


            
        }
    }

    modal.find('#recipeName').text(nome);
    modal.find('#recipeAutor').text(autor);
    modal.find('#recipeDif').text(diff);
    modal.find('#recipeTime').text(time);
    modal.find('#recipePor').text(port);





});

$('#theModal').on('hide.bs.modal', function (event) {
    $('#ingredientes').removeClass('show');
});

//=============*PREFERENCIAS*================================================
//this viable changes if we're adding or removing items
var mode = false;
$("#evitarAdd").click(function () {
    $("#evitarDiv").removeClass("d-none");
    $("#tags").attr("placeholder", "O que deseja adicionar?");

});

//$("#evitarRem").click(function() {            POR ESTA FUNCIONALIDADE EM BUTOES
//    $("#evitarDiv").removeClass("d-none");
//    $("#tags").attr("placeholder", "O que deseja remover?");
//});
var acIng = []; //auto complete ingredients
for (var key in basedadosingred) {
    var tmp = basedadosingred[key]
    acIng.push(tmp['nome']);
    // console.log(key);
}

$("#tags").autocomplete({
    source: acIng
});
var toAdd = "";
var avoidItems = []

function refreshItems() {
    $("#itemsToAvoid").empty();
    console.log(avoidItems);
    for (var i = 0; i < avoidItems.length; i++) {
        console.log(avoidItems[i]);
        $("#itemsToAvoid").append("<li>" + avoidItems[i] + "</li>");
    }
};

$("#addItem").click(function () {
    toAdd = $("#tags").val();
    if (acIng.includes(toAdd)) {
        avoidItems.push(toAdd);
        console.log(toAdd);
        refreshItems();
        $("#tags").val("");
    }
    else {
        $("#tags").val("");
        $("#erro").removeClass("d-none").val("Este ingrediente não está na base de dados!");
        alert("Este ingrediente não se encontra na base de dados!");
    }
});


