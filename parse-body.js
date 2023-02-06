function firstStep(input) {
  // Your code here
  // key1=value1&key2=value2 => ['key=value1', 'key2=value2]
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  //['key=value1', 'key2=value2] => [[key, value], [key2, value2]]
  return input.map(str => str.split('='))
}

function thirdStep(input) {
  // Your code here
  //[['key11+key12', value], [key2, 'value11+value12']] => [[key11 key12, value], [key2, 'value11 value12']]
  return input.map(arr => [arr[0].replace(/\+/g, " "), arr[1].replace(/\+/g, " ")] )
}

function fourthStep(input) {
  // Your code here
  //[[key11 key12, value %21], [key2, 'value11 value12']] => [[key11 key12, value !], [key2, 'value11 value12']]
  return input.map(arr => [decodeURIComponent(arr[0]), decodeURIComponent(arr[1])]);
}

function fifthStep(input) {
  // Your code here
  let ret = input.reduce((accum, prevVal) => {
    //[key, value] = prevVal;
    let key = prevVal[0];
    let value = prevVal[1];
    accum[key] = value;
    return accum;
  },{})
  return ret
}

function parseBody(str) {
  // Your code here
  let ret = firstStep(str);
  ret = secondStep(ret);
  ret = thirdStep(ret);
  ret = fourthStep(ret);
  ret = fifthStep(ret);
  return ret;

}

let str = "username=azure+green&password=password%21";
console.log(parseBody(str));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};