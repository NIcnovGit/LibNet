//My version for aktion. Подмена пабликейшн кода для курсов рядовых медсестер на код персонального тарифа для медсестер

{

    let afterPush = function(arr, callback) {
        arr.push = function(e) {
            Array.prototype.push.call(arr, e);
            callback(arr);
        };
    };
    
    
    window.action = [];
        
    afterPush(window.action, function(updatedArr) {
        if( updatedArr[0][2] === 'sviewProductCard' && updatedArr[0][6] !== 11409 ) {
            updatedArr[0][4] = '';
            updatedArr[0][5] = '11409';
            updatedArr[0][6] = 11409;
        }
    });

}
