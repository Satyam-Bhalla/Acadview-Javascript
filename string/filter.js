var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
    elementHasValue = words.filter(function (currentValue) {
        return currentValue.includes('e')
    })

console.log(elementHasValue)