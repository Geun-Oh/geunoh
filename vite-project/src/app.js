import MainPage from "./pages/main";
import Error404 from "./pages/Error404";

const BASE_URL = 'http://localhost:5174';
const ROUTE_LIST = [{ path: '/', element: MainPage }];

function App ($conatiner) {
    this.$conatiner = $conatiner;
    let currentPage = undefined;

    const init = () => {
        const findMatchRoute = () => ROUTE_LIST.find((route) => route.path === window.location.pathname);

        const route = () => {
            currentPage = null;
            const TargetPage = findMatchRoute()?.element || Error404; // 주소가 맞는 페이지가 있다면 해당 컴포넌트를 반환한다.
            currentPage = new TargetPage(this.$conatiner);
        };

        route();
    }
    init();
};

export default App;