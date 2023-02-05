
const Apps = {
    name: "Apps",
    initialRoute: "App",
    childs: {
        App: { name: "App" },
    }
};

const Home = {
    name: "Home",
    initialRoute: "HomePage",
    childs: {
        HomePage: { name: "HomePage" },
    }
};

const Tutorial = {
    name: "Tutorial",
    initialRoute: "Welcome",
    childs: {
        Welcome: { name: "Welcome" },
        TutorialPage: { name: "TutorialPage" },
    }
};

const Paywall = {
    name: "Paywall",
    initialRoute: "PaywallPage",
    childs: {
        PaywallPage: { name: "PaywallPage" },
    }
};






const AppRoutes = {
    Apps: Apps,
    Home: Home,
    Paywall: Paywall,
    Tutorial: Tutorial,
}

export default AppRoutes