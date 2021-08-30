const generate = document.querySelector('#brgenerate');

let state = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

function generateOption(){
    for(let options = 0; options < state.length; options += 1){
        let option = options;
        option = document.createElement('option');
        option.classList.add('state');
        option.innerText = state[options];
        generate.appendChild(option);
    }

    // let classState = document.getElementsByClassName('state');
    // for(states = 0; states < state.length; states++){
    //     classState[states].innerText = state[states]
    // }

}
generateOption()


