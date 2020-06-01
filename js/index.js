//User Settings defaults
var dieta = false;
var vegetariano = true;
let alimentos = [];

var receitas = {

  paocaseiro: {
    name: 'Pão Caseiro',
    autor: 'João Mateus',
    time: '1 hora',
    dificuldade: 1,
    Ingredientes: {
      farinhaTrigo: {
        tipo: 'farinha',
        propriedades: [
          'trigo',
          'sem fermento'
        ],
        quantidade: 1000,
        texto: '1 kg de farinha de trigo sem fermento'
      },
      leite: {
        tipo: 'leite',
        propriedades: [
          'morno'
        ],
        quantidade: 400,
        texto: '400ml de leite morno'
      },
      ovo: {
        tipo: 'farinha',
        propriedades: [],
        quantidade: 2,
        texto: '2 ovos (remova a película ou pele da gema'
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
      açúcar: {
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
      }
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

<<<<<<< HEAD
var receitas={
  
    paocaseiro: {
      name: 'Pão Caseiro',
      autor: 'João Mateus',
      time: '1 hora',
      portions: '6 pães',
      dificuldade: 1,
      Ingredientes: {
        farinhaTrigo: {
          tipo: 'farinha',
          propriedades: [
            'trigo',
            'sem fermento'
          ],
          quantidade: 1000,
          texto: '1 kg de farinha de trigo sem fermento'
        },
        leite: {
          tipo: 'leite',
          propriedades: [
            'morno'
          ],
          quantidade: 400,
          texto: '400ml de leite morno'
        },
        ovo: {
          tipo: 'farinha',
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
        açúcar: {
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
        }
=======
  },
  carbonara: {
    name: 'Massa à Carbonara',
    autor: 'Pingo Doce',
    time: '20 minutos',
    dificuldade: 1,
    Ingredientes: {
      ovo: {
        tipo: 'ovo',
        propriedades: [
          "médio"
        ],
        quantidade: 2,
        texto: '2 ovos (remova a película ou pele da gema'
      },
      sal: {
        tipo: 'tempero',
        propriedades: [
          'sal'
        ],
        quantidade: 10,
        texto: '1/2 colher (sopa) de sal'
      },
      azeite: {
        tipo: 'tempero',
        propriedades: [
          'azeite virgem'
        ],
        quantidade: 10,
        texto: '2 c. sopa azeite virgem'
>>>>>>> 593b51e0c1b5943e5f8057f6e8462d4ff37b0bbe
      },
      bacon: {
        tipo: 'carne',
        propriedades: [
          
        ],
        quantidade: 200,
        texto: '200 g bacon '
      },
  
      natas:{
        tipo: 'latícineos',
        propriedades: [
          
        ],
        quantidade: 80,
        texto: '80 ml natas '
      
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
    isVeg: false,
    kCal: 500

  },
<<<<<<< HEAD
  carbonara:{
    name: 'Massa carbonara',
    autor: 'Pingo Doce',
    time:'20 minutos',
    portions: '3 pessoas',
    dificuldade: 1,
    Ingredientes: {
      farinhaTrigo: {
        tipo: 'farinha',
        propriedades: [
          'trigo',
          'sem fermento'
        ],
        quantidade: 1000,
        texto: '1 kg de farinha de trigo sem fermento'
      },
      leite: {
        tipo: 'leite',
        propriedades: [
          'morno'
        ],
        quantidade: 400,
        texto: '400ml de leite morno'
      },
      ovo: {
        tipo: 'farinha',
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
      açúcar: {
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
      }
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
  outrareceita:{}
=======
  outrareceita: {}
>>>>>>> 593b51e0c1b5943e5f8057f6e8462d4ff37b0bbe
}
//this is huge
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
  console.log(Object.keys(receitas));
  var details;
  $("#ingredientes").empty();
  for (var property in receitas) {
    console.log(property);
    if (property == name) {
      // alert('beep');
      details = receitas[property];
      console.log(details);
<<<<<<< HEAD
      var nome = details['name'];
    var autor = details['autor'];
    console.log(autor);
    var diff = details['dificuldade'];
    var port = details['portions'];
    var time = details['time'];
    var ingredientes = details['Ingredientes'];
    for(var item in ingredientes){
      console.log(ingredientes[item]['texto']);
      $("#ingredientes").append("<li>" + ingredientes[item]['texto'] + "</li>");
      console.log("aaaa");
    }
    //console.log(autor+" , "+diff +" ," + JSON.stringify(ingredientes));
=======
      var autor = details['autor'];
      console.log(autor);
      var diff = details['dificuldade'];
      var ingredientes = details['Ingredientes'];
      for (var item in ingredientes) {
        console.log(ingredientes[item]['texto']);
        $("#ingredientes").append("<li>" + ingredientes[item]['texto'] + "</li>");
        console.log("aaaa");
      }
      //console.log(autor+" , "+diff +" ," + JSON.stringify(ingredientes));
>>>>>>> 593b51e0c1b5943e5f8057f6e8462d4ff37b0bbe


    }

  }
  
  modal.find('#recipeName').text(nome);
  modal.find('#recipeAutor').text(autor);
  modal.find('#recipeDif').text(diff);
  modal.find('#recipeTime').text(time);
  modal.find('#recipePor').text(port);


 


})

$('#theModal').on('hide.bs.modal', function (event) {
  $('#ingredientes').removeClass('show');
});