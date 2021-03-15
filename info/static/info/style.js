let programmingLanguage = document.getElementById('programming-language');
let webservice = document.getElementById('web-service');
let tree = document.getElementById('tree');

let trees1 = document.getElementById('trees_1');
let trees2 = document.getElementById('trees_2');

let tree11 = document.getElementById('tree_1-1');
let tree12 = document.getElementById('tree_1-2');
let tree13 = document.getElementById('tree_1-3');

let trees11 = document.getElementById('trees_1-1');
let trees12 = document.getElementById('trees_1-2');
let trees13 = document.getElementById('trees_1-3');

let tree21 = document.getElementById('tree_2-1');
let tree22 = document.getElementById('tree_2-2');
let tree23 = document.getElementById('tree_2-3');

let trees21 = document.getElementById('trees_2-1');
let trees22 = document.getElementById('trees_2-2');
let trees23 = document.getElementById('trees_2-3');

let tree111 = document.getElementById('tree_1-1-1');
let tree112 = document.getElementById('tree_1-1-2');
// let tree113 = document.getElementById('tree_1-1-3');

let trees111 = document.getElementById('trees_1-1-1');
let trees112 = document.getElementById('trees_1-1-2');
// let trees113 = document.getElementById('trees_1-1-3');

let tree211 = document.getElementById('tree_2-1-1');
let tree212 = document.getElementById('tree_2-1-2');
let tree213 = document.getElementById('tree_2-1-3');

let trees211 = document.getElementById('trees_2-1-1');
let trees212 = document.getElementById('trees_2-1-2');
let trees213 = document.getElementById('trees_2-1-3');

let tree221 = document.getElementById('tree_2-2-1');
let tree222 = document.getElementById('tree_2-2-2');
let tree223 = document.getElementById('tree_2-2-3');

let trees222 = document.getElementById('trees_2-2-2');
let trees223 = document.getElementById('trees_2-2-3');

let tree231 = document.getElementById('tree_2-3-1');
let tree232 = document.getElementById('tree_2-3-2');
let tree233 = document.getElementById('tree_2-3-3');

let trees231 = document.getElementById('trees_2-3-1');
let trees232 = document.getElementById('trees_2-3-2');
let trees233 = document.getElementById('trees_2-3-3');

let tree121 = document.getElementById('tree_1-2-1');
let tree122 = document.getElementById('tree_1-2-2');

let trees121 = document.getElementById('trees_1-2-1');
let trees122 = document.getElementById('trees_1-2-2');

let tree131 = document.getElementById('tree_1-3-1');
let tree132 = document.getElementById('tree_1-3-2');

programmingLanguage.addEventListener('mouseover',(event) => {
    trees1.style.display = 'block';
    trees2.style.display = 'none';

    trees11.style.display = 'none';
    trees12.style.display = 'none';
    trees13.style.display = 'none';

    trees21.style.display = 'none';
    trees22.style.display = 'none';
    trees23.style.display = 'none';

    trees111.style.display = 'none';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';

    trees121.style.display = 'none';
    trees122.style.display = 'none';

    trees222.style.display = 'none';
    trees223.style.display = 'none';

    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'none';

    tree.style.flexDirection = 'row';
});

webservice.addEventListener('mouseover',(event) => {
    trees1.style.display = 'none';
    trees2.style.display = 'block';

    trees11.style.display = 'none';
    trees12.style.display = 'none';
    trees13.style.display = 'none';

    trees21.style.display = 'none';
    trees22.style.display = 'none';
    trees23.style.display = 'none';

    trees111.style.display = 'none';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';

    trees121.style.display = 'none';
    trees122.style.display = 'none';

    trees222.style.display = 'none';
    trees223.style.display = 'none';

    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'none';

    tree.style.flexDirection = 'row-reverse';
});


tree11.addEventListener('mouseover',(event) => {
    trees11.style.display = 'block';
    trees12.style.display = 'none';
    trees13.style.display = 'none';

    trees111.style.display = 'none';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';

    trees121.style.display = 'none';
    trees122.style.display = 'none';
});

tree12.addEventListener('mouseover',(event) => {
    trees11.style.display = 'none';
    trees12.style.display = 'block';
    trees13.style.display = 'none';

    trees111.style.display = 'none';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';

    trees121.style.display = 'none';
    trees122.style.display = 'none';
});

tree13.addEventListener('mouseover',(event) => {
    trees11.style.display = 'none';
    trees12.style.display = 'none';
    trees13.style.display = 'block';

    trees111.style.display = 'none';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';

    trees121.style.display = 'none';
    trees122.style.display = 'none';
});

tree21.addEventListener('mouseover',(event) => {
    trees21.style.display = 'block';
    trees22.style.display = 'none';
    trees23.style.display = 'none';

    trees222.style.display = 'none';
    trees223.style.display = 'none';

    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'none';
});

tree22.addEventListener('mouseover',(event) => {
    trees21.style.display = 'none';
    trees22.style.display = 'block';
    trees23.style.display = 'none';

    trees222.style.display = 'none';
    trees223.style.display = 'none';

    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'none';
});

tree23.addEventListener('mouseover',(event) => {
    trees21.style.display = 'none';
    trees22.style.display = 'none';
    trees23.style.display = 'block';

    trees222.style.display = 'none';
    trees223.style.display = 'none';

    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'none';
});


tree111.addEventListener('mouseover',(event) => {
    trees111.style.display = 'block';
    trees112.style.display = 'none';
    // trees113.style.display = 'none';
});

tree112.addEventListener('mouseover',(event) => {
    trees111.style.display = 'none';
    trees112.style.display = 'block';
    // trees113.style.display = 'none';
});

// tree113.addEventListener('mouseover',(event) => {
//     trees111.style.display = 'none';
//     trees112.style.display = 'none';
//     // trees113.style.display = 'block';
// });

tree121.addEventListener('mouseover',(event) => {
    trees121.style.display = 'block';
    trees122.style.display = 'none';
});

tree122.addEventListener('mouseover',(event) => {
    trees121.style.display = 'none';
    trees122.style.display = 'block';
});

tree221.addEventListener('mouseover',(event) => {
    trees222.style.display = 'none';
    trees223.style.display = 'none';
});

tree222.addEventListener('mouseover',(event) => {
    trees222.style.display = 'block';
    trees223.style.display = 'none';
});

tree223.addEventListener('mouseover',(event) => {
    trees222.style.display = 'none';
    trees223.style.display = 'block';
});

tree231.addEventListener('mouseover',(event) => {
    trees231.style.display = 'block';
    trees232.style.display = 'none';
    trees233.style.display = 'none';
});

tree232.addEventListener('mouseover',(event) => {
    trees231.style.display = 'none';
    trees232.style.display = 'block';
    trees233.style.display = 'none';
});

tree233.addEventListener('mouseover',(event) => {
    trees231.style.display = 'none';
    trees232.style.display = 'none';
    trees233.style.display = 'block';
});

