import Home from '../view/pages/home';
import Kripto from '../view/pages/kripto';
import Detail from '../view/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/kripto': Kripto,
};

export default routes;
