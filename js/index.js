
//User Settings defaults
localStorage.dieta = false;

localStorage.alimentos = [];
$("#saveDiet").click(function(){

    event.preventDefault();
    cal = $("#cal").val();
    sugar = $("#acucar").val();
    localStorage.cal = cal;
    localStorage.sugar = sugar;
    
})


if (localStorage.getItem("loggedIn") === null) {
    localStorage.loggedIn = false;
    console.log("Variables inicializadas")
    var loops = 0;
}

$(document).ready(function () {
    console.log(localStorage.loggedIn + "WHY DONT YOU WORK")
    if (JSON.parse(localStorage.loggedIn) == false && loops == 0) {

        console.log("please log in.")
        window.location.href = "login.html";
        loops++;

    }
    else {


        //REGISTO
        var username;
        var email;
        var pwd;
        var compras = [];

        $("#registo").click(function () {
            event.preventDefault();

            username = $("#regName").val();
            email = $("#regMail").val();
            pwd = $("#regPwd").val();

            if (username == "" || email == "" || pwd == "") {
                alert("Campos em vazio!");
            }
            else {
                //User Settings defaults
                localStorage.dieta = false;
                localStorage.vegetariano = true;
                localStorage.alimentos = [];
                localStorage.avoidItems = [];
                localStorage.username = username;
                localStorage.email = email;
                localStorage.pwd = pwd;
                console.log("success register")
                window.location.href = "infogath.html";//redirect para a  page de dados
            }
        })
        //============================================
        $("#login").click(function () {
            event.preventDefault();

            var tmpE, tmpP;
            tmpE = $("#logMail").val();
            tmpP = $("#logPwd").val();
            console.log("login attempted...")
            if (tmpE == "" || tmpP == "") {
                alert("Campos em vazio!");
                $("#logMail").empty();
                $("#logPwd").empty();
            }
            else {
                if ((tmpE == localStorage.email) && (tmpP == localStorage.pwd)) {
                    console.log("LOGIN SUCCESSFULL")
                    window.location.href = "index.html";//redirect para a main page
                    localStorage.loggedIn = true;
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
                    localStorage.inventario = JSON.stringify(inventario);


                    localStorage.compras = JSON.stringify(compras);
                    var avoidItems = []
                    localStorage.avoidItems = JSON.stringify(avoidItems);
                }
                else {
                    console.log("BAD LOGIN!");
                    alert("Credenciais erradas!")
                    $("#logMail").empty();
                    $("#logPwd").empty();
                }
            }
        })

    }
})


var receitas = {

    paocaseiro: {
        name: 'Pão Caseiro',
        autor: 'João Mateus',
        time: '1 hora',
        portions: '6 pães',
        dificuldade: 1,
        foto: "https://amopaocaseiro.com.br/wp-content/uploads/2020/04/receita-de-pao-frances-caseiro-IMG_4360-840x560.jpg",
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
        foto: "https://scm-assets.constant.co/scm/unilever/f4b5026fe1dd6b46672ba349cfbb04e4/8f60d715-0a14-43e1-af12-f9b276dc791f.jpg",
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/a160b30a-ba6b-4f5c-8945-a66f397d9a6c-754x394.jpg",
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/8dd2bcf3-3ce2-4c0c-8151-c98c0f1e462d-754x394.jpg",
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/b35695bc-dd82-4fc1-a412-806eea1fdd16-754x394.jpg",
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
            pimentovermelho: {
                tipo: 'vegetal',
                propriedades: ['pimento', 'vermelho'],
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
        name: 'Tomates com atum e cogumelos',
        autor: 'New in Town',
        time: '15 minutos',
        foto: "https://nit.pt/wp-content/uploads/2016/10/7d5fe591-dac8-4ae4-8a66-2367fa2b4c95-754x394.jpg",
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
            pimentoverde: {
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/acadcf9c-d5dc-4a27-a86e-4e3f04a5145b-754x394.jpg",
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/48ee0542-fbbd-4299-a929-4eb709caebd4-754x394.jpg",
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/1f9d25fd-2191-40bc-a4c6-048d91d9d1a5-754x394.jpg",
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
            pimentovermelho: {
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
        foto: "https://nit.pt/wp-content/uploads/2016/10/f84b14fd-afe9-4bdd-b6e2-6d59c7f47dc1-754x394.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2016/07/lasanhadelegumes617.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2019/03/peixinhos-da-horta.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2019/02/pizza-com-burrata-e-pesto.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2019/01/quinoa-salteada-com-ovo.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2018/10/tortelini-espinafres-tiras-ovo.jpg",
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2019/04/croquetes-arroz-tomate.jpg",
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
        name: 'Caril de lentilhas',
        autor: 'Pingo Doce',
        time: '1 hora',
        foto: "https://www.pingodoce.pt/wp-content/uploads/2018/09/caril_lentilhas370x617.jpg",
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
            pimentoverde: {
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
        foto: "https://www.pingodoce.pt/wp-content/uploads/2019/03/salada-de-tomate-com-mozzarella.jpg",
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
    bacalhau: {
        name: 'Bacalhau no forno',
        autor: '',
        foto: "https://i0.wp.com/ncultura.pt/wp-content/uploads/2020/03/Bacalhau-assado-no-forno-com-batatas-e-crosta-de-broa.jpg?fit=650%2C433&ssl=1",
        time: '55 minutos',
        dificuldade: 1,
        portions: '2 pessoas',
        Ingredientes: {
            bacalhau: {
                tipo: "peixe",
                propriedades: ['posta', 'bacalhau'],
                quantidade: 2,
                texto: "2 postas de bacalhau",
            },
            batata: {
                tipo: "batata",
                propriedades: [],
                quantidade: 1,
                texto: '1 batata grande',

            },
            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: 'meia cebola',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 0,
                texto: 'azeite',
            },

            alho: {
                tipo: 'condimentos',
                propriedades: ['pó', 'alho'],
                quantidade: 0,
                texto: 'alho em pó',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 0,
                texto: 'sal qb',
            },

            pimentovermelho: {
                tipo: 'vegetal',
                propriedades: ['pimento vermelho'],
                quantidade: 0,
                texto: 'pimento vermelho a gosto',
            },

        },

        Preparação: {
            '1': '1. Num pirex, coloque a cebola às rodelas e um pouco de azeite.',
            '2': '2. Por cima, coloque as postas de bacalhau e, à volta delas, a batata cortadinha aos bocados.',
            '3': '3. Tempere com alho e sal.',
            '4': '4. Coloque os pimentos cortados e regue com azeite.',
            '5': '5. Leve ao forno por 45 minutos.',
        },
        isVeg: false,
        kCal: 0,

    },
    salada: {
        name: 'Salada de tomate',
        autor: 'Juliana',
        foto: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-mista-2.jpg",
        time: '15 minutos',
        dificuldade: 1,
        portions: '6 pessoas',
        Ingredientes: {
            tomate: {
                tipo: 'vegetal',
                propriedades: ['toma0te'],
                quantidade: 6,
                texto: '6 tomates cortados em forma de lua crescente sem casca',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 4,
                texto: '4 dentes de alho picado',

            },
            vinagre: {
                tipo: 'molho',
                propriedades: ['vinagre', 'balsamico'],
                quantidade: 33,
                texto: '2 colheres de sopa de vinagre balsâmico',
            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 0,
                texto: 'azeite a gosto',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 0,
                texto: 'sal qb',
            },
            oregaos: {
                tipo: 'condimentos',
                propriedades: ['oregaos'],
                quantidade: 0,
                texto: 'óregãos qb',
            },

        },
        Preparação: {
            '1': '1. Coloque os tomates em uma refratária acrescente todo o alho e por cima, coloque bastante azeite, o suficiente para banhar todos os tomates.',
            '2': '2. Mexa bem e em seguida acrescente o sal.',
            '3': '3. Mexa novamente.',
            '4': '4. Depois acrescente o vinagre, mexendo novamente.',
            '5': '5. Por último acrescente o orégano',

        },
        isVeg: false,
        kCal: 0,
    },
    bolo: {
        foto: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2018/12/15/receita-de-bolo-de-chocolate-fofinho-confira.jpg",
        name: 'Bolo de chocolate',
        autor: 'Sandro Valério',

        time: '40 minutos',
        dificuldade: 1,
        portions: '10 pessoas',
        Ingredientes: {
            ovo: {
                tipo: 'ovo',
                propriedades: [],
                quantidade: 4,
                texto: '4 ovos',
            },
            chocolate: {
                tipo: 'chocolate',
                propriedades: ['pó'],
                quantidade: 11,
                texto: '11 colheres de sopa de chocolate em pó',
            },
            manteiga: {
                tipo: 'laticinios',
                propriedades: ['manteiga'],
                quantidade: 4,
                texto: '4 colheres de sopa de manteiga',
            },
            farinhatrigo: {
                tipo: 'farinha',
                propriedades: [
                    'trigo',
                    'sem fermento'
                ],
                quantidade: 600,
                texto: '3 xícaras de chá de farinha de trigo',
            },
            acucar: {
                tipo: 'tempero',
                propriedades: [
                    'acucar'
                ],
                quantidade: 500,
                texto: '2 xícaras e 3 colheres de sopa de açúcar',
            },
            fermento: {
                tipo: 'farinha',
                propriedades: [
                    'biológico',
                    'fresco'
                ],

                quantidade: 45,
                texto: '2 colheres de sopa de fermento',
            },
            leite: {
                tipo: 'laticinios',
                propriedades: [
                    'morno'
                ],
                quantidade: 200,
                texto: '1 xícara de chá de leite',
            },
            cremedeleite: {
                tipo: 'laticinios',
                propriedades: ['creme de leite', 'lata'],
                quantidade: 2,
                texto: '2 latas de creme de leite',
            },

        },
        Preparação: {
            '1': '1. Comecemos pela massa.Em um liquidificador adicione 4 ovos, 4 colheres de chocolate em pó, 2 colheres de manteiga, a farinha de trigo, 2 xícaras de açúcar e o leite.',
            '2': '2. Bata por 5 minutos.',
            '3': '3. Adicione o fermento e misture com uma espátula delicadamente.',
            '4': '4. Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. ',
            '5': '5.  Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! ',
            '6': '6. Para a calda, em uma panela, aqueça a manteiga e misture o chocolate em pó até que esteja homogêneo.',
            '7': '7. Acrescente o creme de leite e misture bem até obter uma consistência cremosa.',
            '8': '8. Desligue o fogo e acrescente o açúcar.'
        },
        isVeg: true,
        kCal: 0,
    },
    guisado: {
        name: 'Carne de vaca estufada',
        autor: 'Cozinhar sem stress',
        foto: "https://www.cozinharsemstress.pt/cozinhar/wp-content/uploads/2015/06/A-001-2006.jpg",
        time: '40 minutos',
        dificuldade: 3,
        portions: '4 pessoas',
        Ingredientes: {
            vaca: {
                tipo: 'carne',
                propriedades: ['vaca'],
                quantidade: 600,
                texto: '600 gr de carne de vaca para estufar',
            },
            vinho: {
                tipo: 'vinho',
                propriedades: [],
                quantidade: 100,
                texto: '1 dl de vinho branco',
            },
            piripiri: {
                tipo: 'molho',
                propriedades: ['piripiri', 'picante'],
                quantidade: 1,
                texto: '1 colher de café de piripiri',

            },
            azeite: {
                tipo: 'azeite',
                propriedades: ['virgem'],
                quantidade: 100,
                texto: '1 dl de azeite',
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
            louro: {
                tipo: 'condimento',
                propriedades: ['louro', 'folha'],
                quantidade: 1,
                texto: '1 folha de louro',
            },
            cenoura: {
                tipo: 'vegetal',
                propriedades: ['cenoura', 'média'],
                quantidade: 2,
                texto: '2 cenouras',
            },
            polpatomate: {
                tipo: 'molho',
                propriedades: ['molho', 'polpa', 'tomate'],
                quantidade: 1,
                texto: '1 colher de polpa de tomate',
            },
            ervilhas: {
                tipo: 'legumes',
                propriedades: ['ervilhas'],
                quantidade: 150,
                texto: '150 gr de ervilhas',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 0,
                texto: 'sal qb',
            },
            pimentapreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },

        },
        Preparação: {
            '1': '1. Corte a carne em pedaços e tempere-os com sal, pimenta, o vinho branco, o molho picante e o azeite.',
            '2': '2. Deixe marinar por algum tempo.',
            '3': '3. Pique a cebola e o dente de alho e refogue-os num fio de azeite com o louro.',
            '4': '4. Junte a carne e deixe-a corar, mexendo.',
            '5': '5. Corte a cenoura em pedaços.',
            '6': '6. Junte um pouco da marinada ao refogado, assim como a polpa de tomate.',
            '7': '7. Regue com um pouco de água e junte as ervilhas e a cenoura.',
            '8': '8. Tape e deixe cozinhar, até completar a cozedura. ',
            '9': '9. Sirva tudo junto com bastante caldo.',

        },
        isVeg: false,
        kCal: 0,
    },
    strogonoff: {
        name: 'Strogonoff de frango',
        autor: 'Fernanda',
        foto: "https://i0.statig.com.br/bancodeimagens/60/8i/1o/608i1ok6qsdptta89j94ygzoa.jpg",
        time: '1 hora',
        dificuldade: 2,
        portions: '10 pessoas',
        Ingredientes: {
            frango: {
                tipo: 'carne',
                propriedades: ['frango', 'peito'],
                quantidade: 600,
                texto: '3 peitos de frango cortados em cubos',
            },
            alho: {
                tipo: 'condimentos',
                propriedades: ['dente de alho', 'alho'],
                quantidade: 1,
                texto: '1 dente de alho picado',
            },
            sal: {
                tipo: 'tempero',
                propriedades: [
                    'sal'
                ],
                quantidade: 0,
                texto: 'sal qb',
            },
            pimentapreta: {
                tipo: 'condimentos',
                propriedades: ['pimenta', 'primenta preta'],
                quantidade: 0,
                texto: 'pimenta preta qb',
            },

            cebola: {
                tipo: 'vegetal',
                propriedades: ['cebola'],
                quantidade: 1,
                texto: '1 cebola picada',
            },
            maionese: {
                tipo: 'molho',
                propriedades: ['maionese', 'ovos'],
                quantidade: 2,
                texto: '2 colheres de sopa de maionese',
            },
            manteiga: {
                tipo: 'laticinios',
                propriedades: ['manteiga'],
                quantidade: 1,
                texto: '1 colher de sopa de manteiga',
            },
            ketchup: {
                tipo: 'molho',
                propriedades: ['ketchup', 'tomate'],
                quantidade: 100,
                texto: 'meio copo de ketchup',
            },
            mostarda: {
                tipo: 'molho',
                propriedades: ['mostarda'],
                quantidade: 67,
                texto: 'um terço de um copo de mostarda',
            },
            cogumelos: {
                tipo: 'vegetal',
                propriedades: ['cogumelos'],
                quantidade: 200,
                texto: '1 copo de cogumelos',
            },
            cremedeleite: {
                tipo: 'laticinios',
                propriedades: ['creme de leite'],
                quantidade: 200,
                texto: '1 copo de creme de leite',
            },

        },
        Preparação: {
            '1': '1. Em uma panela, misture o frango, o alho, a maionese, o sal e a pimenta.',
            '2': '2. Em uma frigideira grande, derreta a manteiga e doure a cebola.',
            '3': '3. Junte o frango temperado até que esteja dourado.',
            '4': '4. Adicione os cogumelos, o ketchup e a mostarda.',
            '5': '5. Incorpore o creme de leite e retire do fogo antes de ferver.',
            '6': '6. Sirva com arroz branco.',
        },
        isVeg: false,
        kCal: 0,
    },

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
        preco:0.10,
        quantidade: 1000,
        texto: '1 kg de farinha de trigo sem fermento'
        , nome: 'Farinha de Trigo',
        foto: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/10/tipos-de-farinha-de-trigo-veja.jpg?w=1200"
        ,
    },
    leite: {
        tipo: 'laticinios',
        propriedades: [
            'morno'
        ],
        quantidade: 400,
        preco:0.12,
        texto: '400ml de leite morno'
        , nome: 'Leite',
        foto: "https://www.bancodasaude.com/cdn/press/leiteee.jpg",

    },
    ovo: {
        tipo: 'ovo',
        propriedades: [],
        quantidade: 2,
        preco:0.42,
        texto: '2 ovos (remova a película ou pele da gema)'
        , nome: 'Ovo'
        , foto: "https://www.deco.proteste.pt/-/media/edideco/images/home/alimentacao/produtos%20alimentares/news/2019/ovos%20frescura/thumb-ovos-frescura.jpg?rev=7e0bf811-f1a7-4ab3-b64c-ece85ef2c464&mw=480&hash=7C74D956F2CE88A62E843C9D61AA217B"
        ,
    },
    fermento: {
        tipo: 'farinha',
        propriedades: [
            'biológico',
            'fresco'
        ],
        preco:0.15,

        quantidade: 45,
        texto: '45g de fermento biológico fresco'

        , nome: 'Fermento',
        foto: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2005828(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1"

        ,
    },
    acucar: {
        tipo: 'tempero',
        propriedades: [
            'acucar'
        ],
        preco:0.10,
        quantidade: 200,
        texto: '1 chávena de açúcar'
        , nome: 'Açúcar',
        foto: "https://cdn1.newsplex.pt/media/2017/9/22/604762.png?type=artigo"
        ,
    },
    sal: {
        tipo: 'tempero',
        propriedades: [
            'sal'
        ],
        preco:0.10,
        quantidade: 10,
        texto: '1/2 colher (sopa) de sal'

        , nome: 'Sal',
        foto: "https://www.mdsaude.com/wp-content/uploads/sal-imagem2.jpg"
        ,
    },
    graodebico: {
        tipo: 'feijão',
        propriedades: ['grão de bico', 'cozido'],
        quantidade: 300,
        texto: '300 gr de grão de bico cozido',
        nome: 'Grão de Bico',
        preco:0.20
        , foto: "https://www.jasminealimentos.com/wp-content/uploads/2017/08/Como-cozinhar-grao-de-bico-1.jpg"
        ,
    },
    sementeslinhaca: {
        tipo: 'sementes',
        propriedades: ['linhaça', 'moída'],
        quantidade: 20,
        texto: '20 gr de sementes de linhaça moída',
        nome: 'Sementes de Linhaça',
        preco:0.23,
        foto: "https://doceritinha.pt/4397-large_default/sementes-linhaca-dourada.jpg"
        ,
    },
    salsa: {
        tipo: 'condimentos',
        propriedades: ['salsa'],
        quantidade: 15,
        texto: '1 colher de sopa de salsa'
        , nome: 'Salsa',
        preco:0.05,
        foto: "https://foreveryoung.sapo.pt/wp-content/uploads/2019/05/salsa-750x430.jpg"
        ,
    },

    cenoura: {
        tipo: 'vegetal',
        propriedades: ['cenoura', 'média'],
        quantidade: 1,
        texto: '1 cenoura média',
        nome: 'Cenoura',
        preco:0.8,
        foto: "https://belezaesaude.com/i/730/45/cenoura-beneficios.jpg",
    },
    atum: {
        tipo: 'conservas',
        propriedades: ['atum natural'],
        quantidade: 200,
        texto: '1 lata de atum natural',
        preco:0.23,
        nome: 'Atum',
        foto: "https://i.pinimg.com/originals/06/dc/f6/06dcf6173e0e7475287c5dd35c348b50.jpg"

        ,
    },
    feijaofrade: {
        tipo: 'feijão',
        propriedades: ['frade'],
        quantidade: 200,
        preco:0.10,
        texto: '200 gr de feijão frade',
        nome: 'Feijão Frade',
        foto: "https://www.biocabaz.pt/web/wp-conteudos/uploads/2016/04/feijao-frade.jpg",
    },


    cebola: {
        tipo: 'vegetal',
        propriedades: ['cebola'],
        quantidade: 1,
        texto: '1 cebola',
        preco:0.45,
        nome: 'Cebola',
        foto: "https://cdn130.picsart.com/251861331002212.png?type=webp&to=min&r=640",
    },
    alho: {
        tipo: 'condimentos',
        propriedades: ['dente de alho', 'alho'],
        quantidade: 1,
        texto: '1 dente de alho',
        preco:0.10,
        nome: 'Alho',
        foto: "https://static.tuasaude.com/media/article/rx/st/alho_34631_l.jpg"
        ,
    },

    claras: {
        tipo: 'ovo',
        propriedades: ['ovo', 'claras'],
        quantidade: 100,
        texto: '100 gr de claras de ovos',
        preco:0.12,
        nome: 'Claras',
        foto: "https://www.mundoboaforma.com.br/wp-content/uploads/2015/07/Eggwhite-1280x720.jpg"
        ,
    },
    tomate: {
        tipo: 'vegetal',
        propriedades: ['tomate'],
        quantidade: 1,
        texto: '1 tomate',
        nome: 'Tomate',
        foto: "https://belezaesaude.com/i/730/56/tomate.jpg",
        preco:0.32,
    },


    cogumelos: {
        tipo: 'vegetal',
        propriedades: ['cogumelos'],
        quantidade: 70,
        texto: '70 gr de cogumelos',
        preco:0.11,
        nome: 'Cogumelos',
        foto: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/09/confira-como-limpar-cogumelos.jpg?w=1200",
    },




    oregaos: {
        tipo: 'condimentos',
        propriedades: ['oregaos'],
        quantidade: 0,
        texto: 'óregãos qb',
        preco:0.10,
        nome: 'Orégãos',
        foto: "https://d1doqjmisr497k.cloudfront.net/-/media/margpt2018/campaign/origine/oregano_2000.jpg?vd=20180709T190728Z&hash=C8B6F5785DC44E74E2D2FCEBCCF0290AE43ABD2A",
    },
    vinho: {
        tipo: 'vinho',
        propriedades: [],
        quantidade: 100,
        texto: '1 dl de vinho branco',
        nome: 'Vinho Branco',
        preco:0.05,
        foto: "https://i2.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2018/08/Como-%C3%A9-feito-o-vinho-branco.jpg?fit=1348%2C899&ssl=1",
    },

    queijo: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'fresco', 'amargo'],
        quantidade: 1,
        texto: '1 queijo fresco amargo',
        preco:2.3,
        nome: 'Queijo',
        foto: "https://i.ytimg.com/vi/4ty-I61x684/hqdefault.jpg",
    },
    espargos: {
        tipo: 'vegetal',
        propriedades: ['espargos'],
        quantidade: 150,
        texto: '150 gr de espargos',
        nome: 'Espargos',
        preco:0.10,
        foto: "https://asenhoradomonte.com/wp-content/uploads/2018/08/beneficios-dos-espargos.jpg",
    },
    alface: {
        tipo: 'vegetal',
        propriedades: ['alface'],
        quantidade: 100,
        texto: '100 gr de alface',
        nome: 'Alface',preco:0.10,
        foto: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NGNl88jzGknot26JMojOuazXgJK7LxXKMWes/sScQk5fBN0SWv2+xq8Og5AdjwcYXZJl2CwN0AY5Ofv1E2o6thyTdQ==",
    },
    rucula: {
        tipo: 'vegetal',
        propriedades: ['rúcula'],
        quantidade: 50,
        texto: '50 gr de rúcula',
        preco:0.10,
        nome: 'Rúcula',
        foto: "https://www.mundoboaforma.com.br/wp-content/uploads/2015/07/rucula-1280x720.jpg",
    },

    amendoa: {
        tipo: 'fruto seco',
        propriedades: ['amendoa'],
        quantidade: 5,
        texto: '5 amêndoas',
        preco:0.10,
        nome: 'Amêndoa',
        foto: "https://www.saberviver.pt/wp-content/uploads/2019/04/amendoas.jpg",
    },

    frango: {
        tipo: 'carne',
        propriedades: ['frango', 'peito'],
        quantidade: 400,
        texto: '400 gr de peito de frango',
        nome: 'Frango',
        preco:0.10,
        foto: "https://alimentacaoescolar.files.wordpress.com/2016/11/frango.jpg?w=311&h=179",
    },
    courgette: {
        tipo: 'legume',
        propriedades: ['courgette'],
        quantidade: 4,
        texto: '4 courgettes médias',
        nome: 'Courgette',
        preco:0.26,
        foto: "https://ecoaldeiajanas.org/wp-content/uploads/2019/05/courgette-1.jpg",
    },

    louro: {
        tipo: 'condimento',
        propriedades: ['louro', 'folha'],
        quantidade: 1,
        texto: '1 folha de louro',
        nome: 'Louro',
        preco:0.10,
        foto: "https://asenhoradomonte.com/wp-content/uploads/2018/07/folhas-de-louro.jpg",
    },
    malaguetas: {
        tipo: 'condimentos',
        propriedades: ['malaguetas vermelhas'],
        quantidade: 2,
        texto: '2 malaguetas vermelhas',
        nome: 'Malaguetas',
        preco:0.10,
        foto: "https://www.bancodasaude.com/cdn/press/malka.jpg",
    },
    caril: {
        tipo: 'condimentos',
        propriedades: ['caril', 'pó'],
        quantidade: 30,
        preco:0.10,
        texto: '2 colheres de sopa de caril em pó',
        foto: "https://www.aosabordovento.com/wp-content/media_files/2015/10/caril-po-especiarias-receita-1024x682.jpg", nome: 'Caril',
    },


    couveflor: {
        tipo: 'legume',
        propriedades: ['couve-flor'],
        quantidade: 1,
        preco:0.45,
        texto: '1 chávena de chá de couve-flor',
        nome: 'Couve-Flor',
        foto: "https://pt.cat-ret.assets.lidl/catalog4media/pt/article/2018chekw50/gallery/zoom/2018chekw50_20.jpg",
    },
    molhosoja: {
        tipo: 'condimentos',
        propriedades: ['molho', 'soja'],
        quantidade: 16,
        preco:0.05,
        texto: '1 colher de sopa de molho de soja',
        nome: 'Molho de Soja',
        foto: "https://comuniti.pt/882-large_default/molho-soja.jpg",
    },
    azeite: {
        tipo: 'azeite',
        propriedades: ['virgem'],
        quantidade: 16,
        texto: '1 colheres de sopa de azeite virgem',
        nome: 'Azeite',
        preco:0.05,
        foto: "https://cdn.shopify.com/s/files/1/0002/3976/3470/products/CopiadeAzeitebiologico_1_1200x1200.png?v=1586624053",
    },
    vaca: {
        tipo: 'carne',
        propriedades: ['vaca'],
        quantidade: 600,
        texto: '600 gr de carne de vaca para estufar',
        nome: 'Vaca',
        preco:0.01,
        foto: "https://talhocastro.com/wp-content/uploads/2018/08/Bovino_f-1187x588.jpg",
    },
    gengibre: {
        tipo: 'legume',
        propriedades: ['gengibre'],
        quantidade: 1,
        texto: '1 colher de chá de gengibre',
        nome: 'Gengibre',
        
        preco:0.01,

        foto: "https://www.greenme.com.br/wp-content/uploads/2016/05/gengibre-corpo-1200x600.jpg",
    },
    feijaoverde: {
        tipo: 'feijão',
        propriedades: ['feijão-verde'],
        quantidade: 1,
        texto: '1 chávena de feijão verde',
        nome: 'Feijão Verde',
        preco:0.05,

        foto: "https://www.sementesvivas.bio/639-large_default/feijao-verde-domino-.jpg",
    },
    piripiri: {
        tipo: 'molho',
        propriedades: ['piripiri', 'picante'],
        quantidade: 1,
        texto: '1 colher de café de piripiri',
        nome: 'Piripiri',
        preco:0.10,

        foto: "https://target.scene7.com/is/image/Target/GUEST_02cc746d-6e3b-4344-8855-eaf1fb21d53e?wid=488&hei=488&fmt=pjpeg",
    },
    beringela: {
        tipo: 'legume',
        propriedades: ['beringela'],
        quantidade: 100,
        texto: '100 gr de beringela',
        nome: 'Beringela',
        preco:0.01,

        foto: "https://www.pingodoce.pt/wp-content/uploads/2016/11/beringela-como-cozinha-la.jpg",
    },
    peru: {
        tipo: 'carne',
        propriedades: ['bife', 'perú'],
        quantidade: 100,
        texto: '100gr bife de perú',
        nome: 'Perú',
        preco:0.01,

        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSflEsD_42eFvW9No5yQOSgIheYpOt85Fqbgs0vdq_TauOovdMS&usqp=CAU",
    },
    pimentapreta: {
        tipo: 'condimentos',
        propriedades: ['pimenta', 'primenta preta'],
        quantidade: 0,
        texto: 'pimenta preta qb',
        nome: 'Pimenta Preta',
        preco:0.01,

        foto: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/02/pimenta-do-reino.jpg",
    },
    espinafres: {
        tipo: 'legume',
        propriedades: ['embalagem', 'espinafre'],
        quantidade: 1,
        texto: '1 embalagem de espinafres',
        nome: 'Espinafres',
        preco:0.01,

        foto: "https://cdn.vidaativa.pt/uploads/2019/11/espinafres-425x318.jpg",
    },
    bechamel: {
        tipo: 'laticinios',
        propriedades: ['molho', 'béchamel'],
        quantidade: 500,
        texto: '500ml de béchamel',
        nome: 'Molho Bechamel',
        preco:0.01,

        foto: "https://t2.rg.ltmcdn.com/pt/images/8/1/8/img_molho_bechamel_tradicional_3818_orig.jpg",
    },
    massalasanha: {
        tipo: 'massa',
        propriedades: ['massa para lasanha'],
        quantidade: 500,
        texto: '500 gr de massa fresca para lasanha',
        nome: 'Massa p/ Lasanha',
         preco:0.01,foto
: "https://www.recheio.pt/catalogo/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/4/0/408859_3.png",
    },
    mozzarella: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'mozzarella'],
        quantidade: 100,
        texto: '100 gr queijo mozzarella ralado',
        nome: 'Queijo Mozzarella',
         preco:0.01,foto
: "https://www.gourmetfoodstore.com/images/product/large/6421_1_.jpg",
    },
    parmesao: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'parmesão'],
        quantidade: 100,
        texto: '100 gr queijo parmesão ralado',
        nome: 'Queijo Parmesão',
         preco:0.01,foto
: "https://t2.uc.ltmcdn.com/pt/images/5/0/4/img_como_fazer_queijo_parmesao_3405_600_square.jpg",
    },

    manjericao: {
        tipo: 'condimentos',
        propriedades: ['manjericao'],
        quantidade: 0,
        texto: 'manjericão qb',
        nome: 'Manjericão',
         preco:0.01,foto
: "https://belezaesaude.com/i/f/o/saude/conteudo/manjericao.jpg",
    },
    farinhamilho: {
        tipo: 'farinha',
        propriedades: ['farinha de milho'],
        quantidade: 130,
        texto: '130 gr de farinha de milho',
        nome: 'Farinha de Milho',
         preco:0.01,foto
: "https://lh3.googleusercontent.com/proxy/ngZjicGYmAeMzvWxZMGuj0ATY9PNJ_J-9dH1LKo8wJlm6BzFiTpiKnsTKRaWr9i9HZEZVUlBBfvrEQx9kM6_ebrvGbkYHGsTvnAmMitBqyzCtBhuJdF5JFcB-go9wZYPdirnUwpNDPj5lqqsqYJBmmd08QFsI-PdloQNYiRdiDDt3Xz4GWZt9AYliJAYnRQJfPbJ5QfYj2z6L3l0IrR1",
    },
    agua: {
        tipo: 'agua',
        propriedades: ['H2o'],
        quantidade: 150,
        texto: '150ml de água',
        nome: 'Água',
         preco:0.01,foto
: "https://media-manager.noticiasaominuto.com/1920/naom_5baa3f3b180c2.jpg",
    },
    massapizza: {
        tipo: 'massa',
        propriedades: ['massa de pizza', 'refrigerada'],
        quantidade: 2,
        texto: '2 massa de pizza refrigerada',
        nome: 'Massa de Pizza',
         preco:0.01,foto
: "https://www.pingodoce.pt/wp-content/uploads/2017/09/massa-de-pizza.jpg",
    },
    molhopesto: {
        tipo: 'molho',
        propriedades: ['molho pesto'],
        quantidade: 45,
        texto: '3 colheres de sopa de molho pesto',
        nome: 'Molho Pesto',
         preco:0.01,foto
: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/02/16/molho-pesto.jpg",
    },
    burrata: {
        tipo: 'laticinios',
        propriedades: ['queijo', 'burrata'],
        quantidade: 2,
        texto: '2 embalagens de burrata fresca',
        nome: 'Burrata',
         preco:0.01,foto
: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Burrata2.jpg",
    },
    pinhoes: {
        tipo: 'fruto seco',
        propriedades: ['pinhoes', 'torrados'],
        quantidade: 30,
        texto: '2 colheres de sopa de pinhões torrados',
        nome: 'Pinhões',
         preco:0.01,foto
: "https://lh3.googleusercontent.com/proxy/I7HjXby_BONbJiojU5iBZtsiTmqczQaIrjVeWvkSZL7909rWaLmivbLoysOC4yhXTe4TkSYBAkpLNvwme3EpIKdJWkY82Zp3o_qyVy1KRoA3_aNtYzvFCMGMAZ1zUUsppN4a",
    },
    salgrosso: {
        tipo: 'tempero',
        propriedades: ['sal', 'sal grosso'],
        quantidade: 5,
        texto: '1 colher de chá de sal grosso',
        nome: 'Sal Grosso',
         preco:0.01,foto
: "https://s2.glbimg.com/JSApgyyxnKnUIdwtfcB899Tx9QU=/620x480/top/e.glbimg.com/og/ed/f/original/2018/07/06/captura_de_tela_2018-07-06_as_15.26.01.png",
    },
    quinoa: {
        tipo: 'sementes',
        propriedades: ['quinoa branca'],
        quantidade: 200,
        texto: '200 gr de quinoa branca',
        nome: 'Quinoa',
         preco:0.01,foto
: "https://conteudo.imguol.com.br/c/entretenimento/9b/2018/01/12/quinoa-1515783995564_v2_1920x1280.jpg",
    },
    legumes: {
        tipo: 'legumes',
        propriedades: 'embalagem',
        quantidade: 1,
        texto: '1 embalagem de mistura de legumes',
        nome: 'Legumes',
         preco:0.01,foto
: "https://www.pingodoce.pt/wp-content/uploads/products/thumbnail/336088-efe28bcabf44c2a5a48ecda62738f835.jpg",
    },
    abacate: {
        tipo: 'fruta',
        propriedades: ['abacate'],
        quantidade: 2,
        texto: '2 abacates',
        nome: 'Abacate',
         preco:0.01,foto
: "https://s2.glbimg.com/ew1z80L80DVKWV8z7XDqQZA4anw=/261x122:4670x3948/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2014/11/20/abacate.jpg",
    },
    coentros: {
        tipo: 'condimentos',
        propriedades: ['coentros'],
        quantidade: 0,
        texto: 'coentros qb',
        nome: 'Coentros',
         preco:0.01,foto
: "https://www.fitnesshut.pt/assets/img/treinar/nutricao/artigos/1526293156_Coentros.jpg",
    },
    ricotaespinafre: {
        tipo: 'mistura',
        propriedades: ['ricotta', 'espinafres'],
        quantidade: 1,
        texto: '1 embalagem de tortellini de ricota e espinafres',

        nome: 'Ricotta e Espinafres',
         preco:0.01,foto
: "https://receitinhas.s3-sa-east-1.amazonaws.com/wp-content/uploads/2017/08/iStock-509483890-848x477.jpg",
    },
    miolonoz: {
        time: 'fruto seco',
        propriedades: ['noz', 'miolo noz'],
        quantidade: 60,
        texto: '60 gr de miolo de noz',
        nome: 'Miolo de Noz',
         preco:0.01,foto
: "https://www.biocabaz.pt/web/wp-conteudos/uploads/2016/04/secos-noz_miolo.jpg",
    },
    arroz: {
        tipo: 'arroz',
        propriedades: ['sobras'],
        quantidade: 200,
        texto: '200 gr de sobras de arroz de tomate frio',
        nome: 'Arroz',
         preco:0.01,foto
: "https://portal-amb-imgs.clubedaana.com.br/2016/11/arroz-de-micro-ondas-768x512.jpg",
    },
    oleo: {
        tipo: 'oleo',
        propriedades: '',
        quantidade: 500,
        texto: '500 ml de óleo (para fritar)',
        nome: 'Óleo',
         preco:0.01,foto
: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2004635(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1",
    },
    farinha: {
        tipo: 'farinha',
        propriedades: [],
        quantidade: 0,
        texto: 'meia chávena de farinha',
        nome: 'Farinha',
         preco:0.01,foto
: "https://cozinhatecnica.com/wp-content/uploads/2018/04/Farinha-de-arroz-e1523395479373.jpg",
    },
    paoralado: {
        tipo: 'farinha',
        propriedades: 'pao ralado',
        quantidade: 200,
        texto: '200 gr de pão ralado',
        nome: 'Pão Ralado',
         preco:0.01,foto
: "https://cdn.e-konomista.pt/uploads/2019/07/receitas-com-pao-ralado_1516543618-425x318.jpg",
    },
    lentilhas: {
        tipo: 'legume',
        propriedades: ['lentilhas'],
        quantidade: 200,
        texto: '200 gr de lentilhas verdes',
        nome: 'Lentilhas',
         preco:0.01,foto
: "https://thumbs.web.sapo.io/?W=800&H=0&png=1&delay_optim=1&epic=ODEyTMovMv/KMILSD3c/Lkir0RueaRnT463rIPswriU9huvGJotPCZc9Zbl4jnPPhp33sgLEN3YWcELx/Vh6jOFc5yD3niI4jBYRA8ZB0ZT4/kQ=",
    },
    oleococo: {
        tipo: 'oleo',
        propriedades: ['oleo de coco', 'coco'],
        quantidade: 2,
        texto: '2 colheres de sopa de óleo de coco',
        nome: 'Óleo de Coco',
         preco:0.01,foto
: "https://chaecia.vteximg.com.br/arquivos/ids/157348-1000-1000/oleo-de-coco-extra-virgem-500ml.jpg?v=636667373419170000",
    },
    leitecoco: {
        tipo: 'laticinios',
        propriedades: [
            'leite de coco', 'coco'
        ],
        quantidade: 200,
        texto: '200ml de leite de coco',
        nome: 'Leite de Coco',
         preco:0.01,foto
: "https://3.bp.blogspot.com/-zE6QCuOUxzI/WzOMJ6XgUpI/AAAAAAABLpU/Nhl5ALeGkEMWCupP0xX5wo4uqukVjQGawCLcBGAs/s1600/receita-leite-de-coco-caseiro.jpg",
    },
    pimentoverde: {
        tipo: 'vegetal',
        propriedades: ['pimento verde'],
        quantidade: 2,
        texto: 'meio pimento verde em puré',
        nome: 'Pimento Verde',
         preco:0.01,foto
: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2076823(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1",
    },
    basmati: {
        tipo: 'arroz',
        propriedades: 'Basmati',
        quantidade: 350,
        texto: '350 gr de arroz Basmati feito',
        nome: 'Arroz Basmatti',
         preco:0.01,foto
: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2018/09/25/shutterstock604635731.jpg",
    },
    tomatecherryvermelho: {
        tipo: 'vegetal',
        propriedades: ['tomate', 'cherry', 'vermelho'],
        quantidade: 250,
        texto: '250 gr de tomate cherry vermelho',
        nome: 'Tomate Cherry Vermelho',
         preco:0.01,foto
: "https://cdn.pixabay.com/photo/2015/07/08/05/25/tomatoes-835385_960_720.jpg",
    },
    cremedeleite: {
        tipo: 'laticinios',
        propriedades: ['creme de leite', 'lata'],
        quantidade: 2,
        texto: '2 latas de creme de leite',
        nome: 'Creme de Leite',
         preco:0.01,foto
: "https://images-americanas.b2w.io/produtos/01/00/oferta/54069/7/54069711_1GG.jpg",
    },
    tomatecherryamarelo: {
        tipo: 'vegetal',
        propriedades: ['tomate', 'cherry', 'amarelo'],
        quantidade: 250,
        texto: '250 gr de tomate cherry amarelo',
         preco:0.01,foto
: "https://www.joiadocampo.com/wp-content/uploads/2016/10/tomate-cherry-amarelo-kg-importado.jpg",
        nome: 'Tomate Cherry Amarelo',
    },

    limao: {
        tipo: 'fruto',
        propriedades: ['limão'],
        quantidade: 0,
        texto: 'meio limão',
        nome: 'Limão',
         preco:0.01,foto
: "https://valemais.pt/vlm/wp-content/uploads/2016/01/dieta-do-limao_site.jpg",
    },

    mel: {
        tipo: 'condimento',
        propriedades: ['mel', 'doce'],
        quantidade: 1,
        texto: '1 colher de sopa de mel',
        nome: 'Mel',
         preco:0.01,foto
: "https://media-manager.noticiasaominuto.com/1920/1562314810/naom_5d1f02f162859.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyNTYwLCJjcm9wSGVpZ2h0IjoxNDM5LCJjcm9wWCI6MCwiY3JvcFkiOjI1MH0sInBvcnRyYWl0Ijp7ImNyb3BXaWR0aCI6MTA3NywiY3JvcEhlaWdodCI6MTkxNCwiY3JvcFgiOjI1MCwiY3JvcFkiOjB9fQ==",
    },

    vinagre: {
        tipo: 'molho',
        propriedades: ['vinagre', 'balsamico'],
        quantidade: 33,
        texto: '2 colheres de sobremesa de vinagre balsâmico',
        nome: 'Vinagre',
         preco:0.01,foto
: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2018/02/20/vinagre-balsc3a2mico.jpg",
    },
    bacalhau: {
        tipo: "peixe",
        propriedades: ['posta', 'bacalhau'],
        quantidade: 2,
        texto: "2 postas de bacalhau",
        nome: 'Bacalhau',
         preco:0.01,foto
: "https://lh3.googleusercontent.com/proxy/2vZ2UpQ8IkTAUaMCSTiTORWSZipu81EIHVf00kta3FbPRTBC8kyaFc6fuoKd5svKfBgKW2PyhDJhGV0c3huG1_cMx2UwXk5UZ2ERcs0Ff5USDcLwjqaXCtVOrOI",
    },
    batata: {
        tipo: "batata",
        propriedades: [],
        quantidade: 1,
        texto: '1 batata grande',
        nome: 'Batatas',
         preco:0.01,foto
: "https://media-manager.noticiasaominuto.com/1920/1582634326/naom_5e5514ead7999.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjoyNDU1LCJjcm9wSGVpZ2h0IjoxMzgxLCJjcm9wWCI6MCwiY3JvcFkiOjU4fX0=",

    },
    pimentovermelho: {
        tipo: 'vegetal',
        propriedades: ['pimento', 'vermelho'],
        quantidade: 20,
        texto: '20 gr pimentos vermelhos',
        nome: 'Pimento Vermelho',
         preco:0.01,foto
: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=2076826(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1",
    },
    chocolate: {
        tipo: 'chocolate',
        propriedades: ['pó'],
        quantidade: 11,
        texto: '11 colheres de sopa de chocolate em pó',
        nome: 'Chocolate em pó',
         preco:0.01,foto
: "https://4.bp.blogspot.com/-TGPJVrZUiOM/V3EOGwYdopI/AAAAAAAABYU/__h6qsMhGaUobgqEC8BycXyEK0CCwYR3ACLcB/s1600/Cacau%2Bem%2Bp%25C3%25B3.jpg",
    },
    manteiga: {
        tipo: 'laticinios',
        propriedades: ['manteiga'],
        quantidade: 4,
        texto: '4 colheres de sopa de manteiga',
        nome: 'Manteiga',
         preco:0.01,foto
: "https://t1.rg.ltmcdn.com/pt/images/2/3/2/manteiga_caseira_com_nata_7232_600.jpg",
    },
    polpatomate: {
        tipo: 'molho',
        propriedades: ['molho', 'polpa', 'tomate'],
        quantidade: 1,
        texto: '1 colher de polpa de tomate',
        nome: 'Polpa de Tomate',
         preco:0.01,foto
: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4092713(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1",
    },
    ervilhas: {
        tipo: 'legumes',
        propriedades: ['ervilhas'],
        quantidade: 150,
        texto: '150 gr de ervilhas',
        nome: 'Ervilhas',
         preco:0.01,foto
: "https://www.greenme.com.br/wp-content/uploads/2017/06/ervilha-beneficios-1200x600.jpg",
    },
    maionese: {
        tipo: 'molho',
        propriedades: ['maionese', 'ovos'],
        quantidade: 2,
        texto: '2 colheres de sopa de maionese',
        nome: 'Maionese',
         preco:0.01,foto
: "https://static.carrefour.com.br/medias/sys_master/images/images/h8b/h31/h00/h00/11606263791646.jpg",
    },
    ketchup: {
        tipo: 'molho',
        propriedades: ['ketchup', 'tomate'],
        quantidade: 100,
        texto: 'meio copo de ketchup',
        nome: 'Ketchup',
         preco:0.01,foto
: "https://savegnago.vteximg.com.br/arquivos/ids/287973-1000-1000/CATCHUP-HEINZ-397G-PET.jpg?v=636592447588900000",
    },
    mostarda: {
        tipo: 'molho',
        propriedades: ['mostarda'],
        quantidade: 67,
        texto: 'um terço de um copo de mostarda',
        nome: 'Mostarda',
        preco:0.01,

        foto: "https://media.continente.pt/Sonae.eGlobal.Presentation.Web.Media/media.axd?resourceSearchType=2&resource=ProductId=4970162(eCsf$RetekProductCatalog$MegastoreContinenteOnline$Continente)&siteId=1&channelId=1&width=512&height=512&defaultOptions=1",
    },




}


//console.log(receitas); test stuff
$('#simveg').on('click change', function () {
    // alert("veg true");
    localStorage.vegetariano = true;
});
$('#naoveg').on('click change', function () {
    // alert("veg false");
    localStorage.vegetariano = false;
});

$('#simdiet').on('click change', function () {
    // alert("localStorage.dieta true");
    localStorage.dieta = true;
});

$('#naodiet').on('click change', function () {
    // alert("localStorage.dieta false");
    localStorage.dieta = false;
});

//isto nao funciona e nao sei porque help
$('#addCart').click(function () {
    $("#ingredientes").remove("<li id=\"addCart\" style=\"color:red\">" + ingredientes[item]['texto'] + "<button style=\"border-radius: 50px ; background:transparent;\" id=\"addCart\">&#x1f6d2</button></li>");
    $("#ingredientes").append("<li>" + ingredientes[item]['texto'] + "</li>");
    $("#shoppingcart").append(" <tr><td class=\"nome\">" + ingredientes[item]['nome'] + "</td><td ><input type=\"number\">" + ingredientes[item]['quantidade'] + "</td><td ></td></tr>");
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
var tmpID;
function addcompra() {
    console.log(tmpID);
    compras = JSON.parse(localStorage.compras)
    // console.log("COMPRAS" + compras);
    alert("Adicionado ao carrinho com sucesso");
    compras.push(tmpID);

    localStorage.compras = JSON.stringify(compras);
};
function getid(clicked) {

    tmpID = clicked;
    console.log("TMPID=" + tmpID)
    addcompra();
}

$('#theModal').on('show.bs.modal', function (event) {
    var tmpInv = JSON.parse(localStorage.inventario);

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
        //console.log(property);
        if (property == name) {
            // alert('beep');
            details = receitas[property];
            // console.log(details);
            nome = details['name'];
            autor = details['autor'];
            //console.log(autor);
            diff = details['dificuldade'];
            port = details['portions'];
            time = details['time'];

            ingredientes = details['Ingredientes'];




            for (var item in ingredientes) {
                //  console.log(JSON.parse(localStorage.inventario));
                // console.log(ingredientes[item]['texto']);

                if (item in tmpInv) {
                    var nomee = item;
                    //  console.log('necessario:' + ingredientes[item]['quantidade']);
                    //console.log('existe' + tmpInv[item]['quantidade']);



                    // console.log((ingredientes[item]['quantidade'] > tmpInv[item]['quantidade']));
                    if (ingredientes[item]['quantidade'] > tmpInv[item]['quantidade']) {
                        // console.log(ingredientes[item]['quantidade'] + 'MIMIMIMI');          
                        console.log("nomee=" + nomee);
                        $("#ingredientes").append("<li id=\"addCart\" style=\"color:red\">" + ingredientes[item]['texto'] + "<button style=\"border-radius: 50px ; background:transparent;\" id=\"" + nomee + "\"  onclick=\"getid(this.id)\">&#x1f6d2</button></li>");
                        //A minha ideia aqui em baixo é que quando clicas no carrinho, o item é adicionado a uma lista
                        //no local storage e quando o carrinho de compras abrisse, iamos buscar os itens a esta lista
                        // e já os tinhamos no carrinho
                        //however, não tou a conseguir mandar o item ou até o nome do item para uma lista


                        //Camila: on it



                        //  alert("beepbeep");
                        // console.log("LAAAAAAALALAALLALALALALAL");
                    } else {
                        $("#ingredientes").append("<li>" + ingredientes[item]['texto'] + "</li>");

                    }
                    //console.log("aaaa");
                } else {

                    //console.log("ITEM=" + item)
                    $("#ingredientes").append("<li id=\"addCart\" style=\"color:red\">" + ingredientes[item]['texto'] + "<button style=\"border-radius: 50px ; background:transparent;\" id=\"" + item + "\" onclick=\"getid(this.id)\" >&#x1f6d2</button></li>");
                    console.log(item)

                }
                passos = details['Preparação'];
            }
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
    $("#addItem").removeClass("d-none");

    $("#tags").attr("placeholder", "O que deseja adicionar?");

});
$("#evitarRem").click(function () {
    $("#addItem").addClass("d-none");
    $("#deleteItem").removeClass("d-none");
    $("#evitarItem").removeClass("d-none");
    $("#tags").attr("placeholder", "O que deseja remover?");

});
$('input:radio[name="diet"]').change(function () {
    if ($(this).val() == 'sim') {
        $("#evitarform").removeClass("d-none");
    }
    if ($(this).val() == 'nao') {
        $("#evitarform").addClass("d-none");
    }
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


var acRec = []; //auto complete ingredients
for (var key in receitas) {
    var tmp = receitas[key]
    acRec.push(tmp['name']);
    // console.log(key);
}

$("#tags").autocomplete({ source: acIng });
$("#tagsR").autocomplete({ source: acRec });

var toAdd = "";

function refreshItems() {
    $("#itemsToAvoid").empty();
    
    avoidItems = JSON.parse(localStorage.avoidItems);
    console.log(avoidItems);
    for (var i = 0; i < avoidItems.length; i++) {
        console.log(avoidItems[i]);
        $("#itemsToAvoid").append("<li>" + avoidItems[i] + "</li>");
    }
};


function refreshItemsINV() {
    var tmpInv = JSON.parse(localStorage.inventario);

    $("#ingList").empty();
    console.log("refreshing " + tmpInv);
    for (var item in tmpInv) {
        console.log(item);
        $("#ingList").append("<li>" + tmpInv[item]['nome'] + "  [" + tmpInv[item]['quantidade'] + "]</li>");
    }
};

$("#addItem").click(function () {
    toAdd = $("#tags").val();
    avoidItems = JSON.parse(localStorage.avoidItems);

    if (acIng.includes(toAdd)) {
        if(avoidItems.includes(toAdd)){
            alert("Este ingrediente já foi adicionado!");
            $("#tags").val("");
        }
        else{
        avoidItems.push(toAdd);
        console.log(toAdd);
        localStorage.avoidItems = JSON.stringify(avoidItems);
        refreshItems();
        $("#tags").val("");
    }}
    else {
        $("#tags").val("");
        $("#erro").removeClass("d-none").val("Este ingrediente não está na base de dados!");
        alert("Este ingrediente não se encontra na base de dados!");
    }
});

$("#deleteItem").click(function () {
    toDel = $("#tags").val();
    avoidItems = JSON.parse(localStorage.avoidItems);

    if (acIng.includes(toDel)) {
        if(avoidItems.includes(toDel)){
            avoidItems.splice( $.inArray(toDel, avoidItems), 1 );
            console.log(toDel);
        localStorage.avoidItems = JSON.stringify(avoidItems);
        refreshItems();
        $("#tags").val("");
           
        }
        else{ alert("Este ingrediente não está na lista!");
        $("#tags").val("");
    }}
    else {
        $("#tags").val("");
        $("#erro").removeClass("d-none").val("Este ingrediente não está na base de dados!");
        alert("Este ingrediente não se encontra na base de dados!");
    }
});
$(document).ready(function () {
    var tmpInv = JSON.parse(localStorage.inventario);

    for (var item in tmpInv) {
        //console.log(item);
        $("#ingList").append("<li>" + tmpInv[item]['nome'] + "  [" + tmpInv[item]['quantidade'] + "]</li>");
    }
})
var qnt;


$("#addInvent").click(function () {

    var tmpInv = JSON.parse(localStorage.inventario);
    toAdd = $("#tags").val();
    qnt = $("#qnt").val();
    console.log("toadd " + toAdd)
    if (acIng.includes(toAdd)) {

        if (qnt > 0) {
            $("#erro").addClass("d-none");
            for (item in basedadosingred) {
                if (basedadosingred[item]['nome'] == toAdd) {
                    toAdd = item;
                    // console.log("TOADD AFTER TRANSFROM: " + toAdd);
                    //console.log(JSON.parse(localStorage.inventario));
                    break;
                }
            }
            if (toAdd in tmpInv) {

                tmpInv[toAdd]['quantidade'] = parseInt(tmpInv[toAdd]['quantidade']) + parseInt(qnt);
                localStorage.inventario = JSON.stringify(tmpInv);

                refreshItemsINV();
            }
            else {
                tmpInv[toAdd] = basedadosingred[toAdd];
                console.log(basedadosingred[toAdd]);
                tmpInv[toAdd]['quantidade'] = qnt;
                localStorage.inventario = JSON.stringify(tmpInv);

                console.log(toAdd);

                refreshItemsINV();
            }
        }
        else {
            $("#tags").val("");
            $("#erro").removeClass("d-none").text("Por favor insira uma quantidade válida!");
           // alert("Por favor insira uma quantidade válida!");
            $("#qnt").val("");
        }
    }
    else {
        $("#tags").val("");
        $("#qnt").val("");
        $("#erro").removeClass("d-none").text("Este ingrediente não está na base de dados!");
       // alert("Este ingrediente não se encontra na base de dados!");
    }
    refreshItemsINV();

});

$("#deleteInvent").click(function () {

    var tmpInv = JSON.parse(localStorage.inventario);
    toAdd = $("#tags").val();
    qnt = $("#qnt").val();
    console.log("toadd " + toAdd)
    if (acIng.includes(toAdd)) {

        if (qnt > 0) {
            $("#erro").addClass("d-none");
            for (item in basedadosingred) {
                if (basedadosingred[item]['nome'] == toAdd) {
                    toAdd = item;
                    // console.log("TOADD AFTER TRANSFROM: " + toAdd);
                    //console.log(JSON.parse(localStorage.inventario));
                    break;
                }
            }
            if (toAdd in tmpInv) {
                if (parseInt(tmpInv[toAdd]['quantidade']) - parseInt(qnt)>0) {
                    tmpInv[toAdd]['quantidade'] = parseInt(tmpInv[toAdd]['quantidade']) - parseInt(qnt);
                    localStorage.inventario = JSON.stringify(tmpInv);

                    refreshItemsINV();
                }else{
                    tmpInv[toAdd]['quantidade'] =0;
                    localStorage.inventario = JSON.stringify(tmpInv);

                    refreshItemsINV();
                }

            }
            else {
                $("#tags").val("");
                $("#erro").removeClass("d-none").text("Este ingrediente não se encontra no seu inventário!");
             //   alert("Por favor insira uma quantidade válida!");
                $("#qnt").val("");
            }
        }
        else {
            $("#tags").val("");
            $("#erro").removeClass("d-none").text("Por favor insira uma quantidade válida!");
         //   alert("Por favor insira uma quantidade válida!");
            $("#qnt").val("");
        }
    }
    else {
        $("#tags").val("");
        $("#qnt").val("");
        $("#erro").removeClass("d-none").text("Este ingrediente não está na base de dados!");
      //  alert("Este ingrediente não se encontra na base de dados!");
    }
    refreshItemsINV();

});


//============= CALENDARIO

function cycleRecipes() {
    console.log("cycling...")
    const keys = Object.keys(receitas);
    var randomIndex = keys[Math.floor(Math.random() * keys.length)];
    console.log(randomIndex)
    //const item = basedadosingred[randomIndex];

    $("#recText2").text(receitas[randomIndex]['name']);
    $("#recImg2").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText1").text(receitas[randomIndex]['name']);
    $("#recImg1").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText3").text(receitas[randomIndex]['name']);
    $("#recImg3").attr("src", receitas[randomIndex]['foto']);
}
function cycleRecipes2() {
    console.log("cycling...")
    const keys = Object.keys(receitas);
    var randomIndex = keys[Math.floor(Math.random() * keys.length)];
    console.log(randomIndex)
    //const item = basedadosingred[randomIndex];

    $("#recText4").text(receitas[randomIndex]['name']);
    $("#recImg4").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText5").text(receitas[randomIndex]['name']);
    $("#recImg5").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText6").text(receitas[randomIndex]['name']);
    $("#recImg6").attr("src", receitas[randomIndex]['foto']);
}
function cycleRecipes3() {
    console.log("cycling...")
    const keys = Object.keys(receitas);
    var randomIndex = keys[Math.floor(Math.random() * keys.length)];
    console.log(randomIndex)
    //const item = basedadosingred[randomIndex];

    $("#recText7").text(receitas[randomIndex]['name']);
    $("#recImg7").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText8").text(receitas[randomIndex]['name']);
    $("#recImg8").attr("src", receitas[randomIndex]['foto']);
    randomIndex = keys[Math.floor(Math.random() * keys.length)];
    item = receitas[randomIndex];
    $("#recText9").text(receitas[randomIndex]['name']);
    $("#recImg9").attr("src", receitas[randomIndex]['foto']);
}
$("#concluir").click(function () {
    event.preventDefault();

    nameut = $("#gatnome").val();
    dnascimento = $("#gatdata").val();
    telefono = $("#gattel").val();
    cresidencia = $("#gatcidade").val();
    numerocliente = $("gatcc").val();
    if (nameut == "" || dnascimento == "" || telefono == "" || cresidencia == "") {
        alert("Campos em vazio!");
    }
    else {
        localStorage.nameut = nameut;
        localStorage.dnascimento = dnascimento;
        localStorage.telefono = telefono;
        localStorage.cresidencia = cresidencia;

        if (numerocliente == "") {
            localStorage.numerocliente = numerocliente;
        }
        else {
            localStorage.numerocliente = numerocliente;

        }
        console.log("success register")
        window.location.href = "login.html";//redirect para a main page
    }
})
$("calendar.html").ready(function () {

    cycleRecipes();

});
$("#cycleButton").click(function () {
    cycleRecipes();
});





$("#cycleButton2").click(function () {
    cycleRecipes2();
});
function loadInfo() {
    $("#nomeperfil").text(localStorage.nameut);
    $("#dn").text(localStorage.dnascimento);
    $("#nt").text(localStorage.telefono);
    $("#cr").text(localStorage.cresidencia);
    $("#email").text(localStorage.email);
    if (localStorage.numerocliente == "undefined") {
        $("#ccli").text("---");
    }
    else {
        $("#ccli").text(localStorage.numerocliente);
    }

}
function loadDiet(){
    if(localStorage.sugar!="" || localStorage.cal!=""){
         $("#acucar").val(localStorage.sugar);
         $("#simdiet").prop( "checked", true );
    $("#cal").val(localStorage.cal);
    $("#evitarform").removeClass("d-none");
    }
    else{
        $("#naodiet").prop( "checked", true );
    }
    if(localStorage.vegetariano=="true"){
        $("#simveg").prop("checked",true);
    }
    else{$("#naoveg").prop("checked",true);}
   
  
   
}
$("cart.html").ready(function () {
    console.log("WELCOME TO THE WORST DAMN PAGE")
    var listaTmp = JSON.parse(localStorage.compras);
    $("#shopingcart").empty();
    $("#shopingcart").append(" <tr > <th style=\"border-top-left-radius: 25px;text-align: center;width: 540px;\">Ingrediente</th> <th style=\"    text-align: center;\">Quantidade</th>    <th style=\"border-top-right-radius: 25px;text-align: center;\">Preço</th> </tr>");
    var i = 0
    var n = 0;
    var idNome;
    var idQnt;
    console.log(listaTmp);
    for (i = 0; i < listaTmp.length; i++) {
        var idNome = listaTmp[i] + 'N';
        var idQnt = listaTmp[i] + 'Q';
        $("#shopingcart").append("  <tr><td class=\"nome\" id=\"" + idNome + "\" >" + listaTmp[i] + "</td>    <td ><input type=\"number\" id=\"" + idQnt + "\" ></td>  <td ></td> </tr>");

    }
    console.log("cart loaded")
    $("#shopingcart").append(" <tr><td style=\"border-bottom-left-radius: 25px; font-weight: bold;\" >Total:   <span id=\"total\"></span>€</td>   <td></td> <td style=\"border-bottom-right-radius: 25px;\"><button style=\"padding:10px;font-weight: bold;color:white;background-color:lightsalmon;border-radius: 50px; border:transparent \" id=\"acabar\">Prosseguir</button> </td></tr>");




    $("#acabar").click(function () {
        var listaTmp = JSON.parse(localStorage.compras);
        console.log("concluindo");
        var inventario = JSON.parse(localStorage.inventario);
        console.log(listaTmp);
        for (i = 0; i < listaTmp.length; i++) {
            var idQnt = listaTmp[i] + 'Q';
            var quant = $("#"+idQnt).val();
            if (listaTmp[i] in inventario) {
                var seila=listaTmp[i]
                console.log(inventario[seila]['quantidade']);

                // console.log()
                console.log("TESTING "+listaTmp[i])
                inventario[listaTmp[i]]['quantidade'] = inventario[listaTmp[i]]['quantidade'] + quant;
                console.log("added")
            }
            else {
                console.log("caso2")
                inventariolistaTmp[i] = basedadosingred[listaTmp[i]];
                inventario[listaTmp[i]]['quantidade'] = quant;
            }
            console.log(inventario);
        }
        listaTmp = [];
        localStorage.compras = JSON.stringify(listaTmp);
        localStorage.inventario = JSON.stringify(inventario);

        window.location.href = "index.html";//redirect para a main page

    })
});

$("#procurar").click(function () {

    var recNam = $("#tagsR").val();
    console.log("RecNam: " + recNam)
    var foundRec = false;
    for (el in receitas) {
        if (receitas[el]['name'] == recNam) {
            console.log("Found recipe!!")
            $("#procurar").attr('data-toggle', "modal");

            $("#procurar").attr('data-name', el);
            foundRec = true;
        }
    }
    if (!foundRec) {
        event.preventDefault();
        $("#procurar").attr('data-toggle', "");
        alert("Esta receita não existe no sistema!")
        $("#tagsR").val("");
    }
});