export function Sort(array, property){
    return array.sort(function(a,b){
        if(a[property] < b[property]){
            return -1;
        }
        if(a[property] > b[property]){
            return 1;
        }
        return 0;
    });
}