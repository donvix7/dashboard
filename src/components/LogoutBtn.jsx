import { Alert, Text, TouchableOpacity, View } from "react-native";

const LogoutBtn = ({ colors }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 48,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderWidth: 1,
          borderColor: colors.error,
          backgroundColor: "transparent",
          borderRadius: 12,
          marginBottom: 24,
        }}
        activeOpacity={0.7}
        onPress={() => {
          Alert.alert("Logout", "Are you sure you want to logout?", [
            { text: "Cancel", style: "cancel" },
            {
              text: "Logout",
              style: "destructive",
              onPress: () =>
                Alert.alert("Logged out", "You have been logged out."),
            },
          ]);
        }}
      >
        <Text style={[{ color: colors.error, fontWeight: "500" }]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LogoutBtn;
