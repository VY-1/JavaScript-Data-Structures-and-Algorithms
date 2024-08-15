//First Recurring Character In Array



function firstRecurringCharacter(input){

    for(let i = 0; i < input.length; i++){
        for(let j = i+1; j<input.length; j++){
            if(input[i] === input[j]){
                return input[i];
            }

        }

    }
    return undefined;
}   //O(n^2)



array = [2,5,1,2,3,5,1,2,4]

console.log(firstRecurringCharacter(array));


//Using Map
function firstRecurringCharacter2(input){
    //create a map to use as a comparison
    let map = {};

    for(let i=0; i < input.length; i++){
        //if the key already exist, return the key.. done
        if(map[input[i]]){
            console.log(map);
            return input[i];
            
        }else{
            //else add to map
            map[input[i]] = true;
        }

    }
}

console.log(firstRecurringCharacter2(array));