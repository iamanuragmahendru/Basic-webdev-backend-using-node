var fs = require('fs');

var data = '';
// var occ = [];

try {  
    data = fs.readFileSync('file.txt', 'utf8');   
} catch(e) {
    console.log('Error:', e.stack);
}

// var n = (data.split('\n').length - 1)

// console.log(n)

var occ = data.split('\n');

// console.log(occ)

// occ.sort()

// console.log(occ)



occ.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < occ.length; i++) {
        if (occ[i] != current) {
            if (cnt > 0) {
                console.log(current + ' : ' + cnt );
            }
            current = occ[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        console.log(current + ' : ' + cnt);
    }