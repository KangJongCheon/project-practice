function connect() {
  console.log('☀️', '통신 연결');
}
function disconnect() {
  console.log('🌙', '통신 연결 해제');
}
function sendArray(arr) {
  console.log('전송', arr);
}

function sendStringAsArray(str) {
  connect();

  try {
    sendArray(str.split(''));
    return true;
  } catch (e) {
    console.error('🛑 에러!!', e);
    return false;
  } finally {
    disconnect();
    console.log('- - - - - - - -');
  }
}

['ABC', '가나다', 123, '123'].forEach((i) => {
  console.log(sendStringAsArray(i) ? '[성공]' : '[실패]', '\n\n');
});
