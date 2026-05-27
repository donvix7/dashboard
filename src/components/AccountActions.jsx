import { Alert, Text, TouchableOpacity, View } from "react-native";

const AccountActions = ({ colors }) => {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
        activeOpacity={0.7}
        onPress={() =>
          Alert.alert("Coming Soon", "Security settings coming soon!")
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text style={[{ color: colors.onSurface }]}>Security Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
          borderTopWidth: 1,
          borderTopColor: colors.surfaceVariant,
        }}
        activeOpacity={0.7}
        onPress={() =>
          Alert.alert("Coming Soon", "Help & Support coming soon!")
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text style={[{ color: colors.onSurface }]}>Help & Support</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AccountActions;
