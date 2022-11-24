import Routes from "../router/routes";

export const navigate = ({ navigation }, screen, params) => {
    navigation.navigate(screen, params)
}

export const goBack = ({ navigation }) => {
    navigation.goBack();
}

export const push = ({ navigation }, screen, params) => {
    navigation.push(screen, params)
}

export const resetNonAuth = ({ navigation }) => {
    navigation.reset({
        index: 0,
        routes: [{ name: Routes.NotAuthenticated }],
    });
}

export const resetAuth = ({ navigation }) => {
    navigation.reset({
        index: 0,
        routes: [{ name: Routes.Authenticated }],
    });
}
