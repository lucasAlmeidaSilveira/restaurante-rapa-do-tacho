const cardapioSegunda = [
    {id:1, name:'Virado à Paulista', price:[30, 20], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:2, name:'Filé de Frango à parmegiana', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:3, name:'Picadinho', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:4, name:'Sobremesas', price:[8, 12], options:['Pudim Cremoso', 'Taça da Felicidade']},
];
const cardapioTerca = [
    {id:1, name:'Bife a rolê', price:[25, 18], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:2, name:'Bife à parmegiana', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:3, name:'Peixe', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:4, name:'Sobremesas', price:[8, 12], options:['Pudim Cremoso', 'Taça da Felicidade']},
];
const cardapioQuartaSabado = [
    {id:1, name:'Feijoada', price:[20, 25, 30, 40], options:['Pequena', 'Média', 'Grande', 'Extra Grande'], serve: ['Serve 2 Pessoas', 'Serve 2/3 Pessoas', 'Serve 3/4 Pessoas', 'Serve 5/6 Pessoas']},
    {id:2, name:'Filé de Frango à parmegiana', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:3, name:'Bife à parmegiana', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:4, name:'Sobremesas', price:[8, 12], options:['Pudim Cremoso', 'Taça da Felicidade']},
];
const cardapioQuinta = [
    {id:1, name:'Macarrão c/ frango assado', price:[25, 18], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:2, name:'panqueca', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:3, name:'Baião de dois', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:4, name:'Sobremesas', price:[8, 12], options:['Pudim Cremoso', 'Taça da Felicidade']},
];
const cardapioSexta = [
    {id:1, name:'Peixe', price:[25, 18], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:2, name:'calabresa c/ fritas', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:3, name:'Bife à parmegiana', price:[21, 16], options:['Prato Feito', 'Fit'], serve: ['Serve 1 Pessoa', 'Serve 1 Pessoa']},
    {id:4, name:'Sobremesas', price:[8, 12], options:['Pudim Cremoso', 'Taça da Felicidade']},
];

switch (dayWeekToggle.dayWeekNow()){
    case 1:
        showDishSelect.showDish(cardapioSegunda,'#select-segunda div')
    break
    case 2:
        showDishSelect.showDish(cardapioTerca,'#select-terca div')
    break
    case 3:
        showDishSelect.showDish(cardapioQuartaSabado,'#select-quarta div')
    break
    case 4:
        showDishSelect.showDish(cardapioQuinta,'#select-quinta div')
    break
    case 5:
        showDishSelect.showDish(cardapioSexta,'#select-sexta div')
    break
    case 6:
        showDishSelect.showDish(cardapioQuartaSabado,'#select-sabado div')
    break
    default: 
        showDishSelect.showDish(cardapioSegunda,'#select-segunda div')
    break
}
