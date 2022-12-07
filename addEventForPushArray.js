// https://stackoverflow.com/questions/5306843/attach-event-listener-to-array-for-push-event

var eventify = function(arr, callback) {
    arr.push = function(e) {
        Array.prototype.push.call(arr, e);
        callback(arr);
    };
};


var testArr = [1, 2];

testArr.push(3);

eventify(testArr, function(updatedArr) {
  alert(updatedArr.length);
});


testArr.push(4);
testArr.push(5);
testArr.push(6);





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
