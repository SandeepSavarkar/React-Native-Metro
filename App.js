import { SafeAreaView, View } from "react-native";
import RootNavigator from "./src/router";
import { Provider } from "react-redux";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";
import store from "./src/store";
import commonStyle from "./src/styles/commonStyles";
import Label from "./src/components/label";
import { Color } from "./src/utils/color";

const App = () => {
  return (
    <SafeAreaView style={commonStyle.container}>
      <Provider store={store}>
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
      </Provider>
    </SafeAreaView>
  );
};

export default App;
