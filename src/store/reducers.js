import loginReducer from '../containers/Login/reducer';
import registerReducer from '../containers/Register/reducer';
import componentsReducer from '../containers/Components/reducer';

const reducers = {
  login: loginReducer,
  register: registerReducer,
  components: componentsReducer,
};

export default reducers;
