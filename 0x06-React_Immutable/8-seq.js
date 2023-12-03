import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const filtered = Seq(object).filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  const capFirstChar = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstChar(JSObject[key].firstName);
    JSObject[key].lastName = capFirstChar(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
};

export default printBestStudents;
