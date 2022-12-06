import { SafeAreaView, View, Appearance } from "react-native";
import RootNavigator from "./src/router";
import { Provider } from "react-redux";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";
import store from "./src/store";
import commonStyle from "./src/styles/commonStyles";
import Label from "./src/components/label";
import { Color } from "./src/utils/color";
import {colors} from "./src/utils/getColor"
import {ThemeProvider} from "./src/components/rn-theme-wrapper"
const App = () => {
  let themeMode= Appearance.getColorScheme()==='dark'?colors.dark:colors.light
  return (
    <SafeAreaView style={commonStyle.container}>
      <Provider store={store}>
      <ThemeProvider defaultTheme={{colors: themeMode}}>
          <NetworkProvider>
            <NetworkConsumer>
              {({ isConnected }) => (
                <>
                  {isConnected != undefined && !isConnected && (
                    <View style={commonStyle.noInternet}>
                      <Label bolder xsmall color={Color.WHITE}>
                        {/* {messages.messages.noInterNet} */}
                        No Internet
                      </Label>
                    </View>
                  )}
                  <RootNavigator />
                </>
              )}
            </NetworkConsumer>
          </NetworkProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
