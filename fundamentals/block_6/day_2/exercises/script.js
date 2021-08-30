const generate = document.querySelector('#brgenerate');


for(options = 0; options < 27; options ++){
    let option = options;
    option = document.createElement('option');
    generate.appendChild(option);
}