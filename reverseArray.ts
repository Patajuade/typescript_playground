export const reverse = (tab: Array<number>) => {
    //    var array = [1, 2, 3];

    //_.reverse(array);
    // => [3, 2, 1]

    //console.log(array);
    // => [3, 2, 1]

    //prendre tab et renvoyer le tableau à l'envers

    const result = Array(tab.length); //on donne une taille à result

    //foreach modifie le tableau
    tab.forEach((element, index) => { //pour tous les éléments de tab..
        const resultIndex = tab.length - index - 1;
        result[resultIndex] = element;
    })
    
    //map fait une copie du tableau
    /*const result = tab.map((element, index, arr) => { //pour tous les éléments de tab..
        
    })*/

    return result;
}