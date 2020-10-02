const getMessageDependingLength = (fruit) => {
    if (fruit.length > 5) {
        return 'The fruit name has more than five characters.'
    }

    return 'The fruit name has five characters or less.'
}

console.log(getMessageDependingLength('orange'))
