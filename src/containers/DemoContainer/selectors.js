import { createSelector } from 'reselect';

const selectDemoContainer = () => state => state.get('demoPage');

const selectDemo = () => createSelector(
  selectDemoContainer(),
  (substate) => substate.toJS()
);

export default selectDemo;
export {
  selectDemo,
  selectDemoContainer,
};
