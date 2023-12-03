import { fromJS, getIn } from 'immutable';

export default function accessImmutableObject(object, path) {
  return fromJS(getIn(object, path));
}
