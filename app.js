var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
    console.log('userName:', userName);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
