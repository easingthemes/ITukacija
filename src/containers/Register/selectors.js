import { createSelector } from 'reselect';

const selectRegister = () => state => state.get('register');

const selectDemo = () => createSelector(
  selectRegister(),
  (substate) => substate.toJS()
);

export default selectDemo;
export {
  selectDemo,
  selectRegister,
};
