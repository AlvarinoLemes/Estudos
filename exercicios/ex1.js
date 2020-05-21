    var minhaPromise = function(idade) {
        return new Promise(function(resolve, reject) {
            if (idade >= 18) {
                resolve();
            } else {
                reject();
            }
        });
    }


 minhaPromise(17)
        .then(function(response) {
            console.log("Maior que 18");
        })
        .catch(function(error) {
            console.log("Menor que 18");
        });
