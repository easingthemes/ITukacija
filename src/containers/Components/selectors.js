import { createSelector } from 'reselect';

const selectComponents = () => state => state.get('components');

const selectDemo = () => createSelector(
  selectComponents(),
  (substate) => substate.toJS()
);

export default selectDemo;
export {
  selectDemo,
  selectComponents,
};
