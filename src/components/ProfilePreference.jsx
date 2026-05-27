import { Alert, Switch, Text, TouchableOpacity, View } from "react-native";

const ProfilePreference = ({
  colors,
  userData,
  setUserData,
  pushEnabled,
  setPushEnabled,
  emailEnabled,
  setEmailEnabled,
  darkModeEnabled,
  setDarkModeEnabled,
}) => {
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
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceVariant,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text
          style={[
            {
              color: colors.onSurfaceVariant,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              fontWeight: "600",
              fontSize: 14,
              fontFamily: "InterMedium",
            },
          ]}
        >
          Preferences
        </Text>
      </View>
      <View>
        {/* Push Notifications */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View>
              <Text style={[{ color: colors.onSurface }]}>
                Push Notifications
              </Text>
              <Text style={[{ color: colors.outline }]}>
                Receive alerts on your device
              </Text>
            </View>
          </View>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: colors.surfaceVariant, true: colors.primary }}
            thumbColor={colors.surfaceContainerLowest}
          />
        </View>

        {/* Email Notifications */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.surfaceVariant,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View>
              <Text style={[{ color: colors.onSurface }]}>
                Email Notifications
              </Text>
              <Text style={[{ color: colors.outline }]}>
                Receive updates via email
              </Text>
            </View>
          </View>
          <Switch
            value={emailEnabled}
            onValueChange={setEmailEnabled}
            trackColor={{ false: colors.surfaceVariant, true: colors.primary }}
            thumbColor={colors.surfaceContainerLowest}
          />
        </View>

        {/* Dark Mode */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.surfaceVariant,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View>
              <Text style={[{ color: colors.onSurface }]}>Dark Mode</Text>
              <Text style={[{ color: colors.outline }]}>
                Switch to dark theme
              </Text>
            </View>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            trackColor={{ false: colors.surfaceVariant, true: colors.primary }}
            thumbColor={colors.surfaceContainerLowest}
          />
        </View>

        {/* Language */}
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
            Alert.alert("Coming Soon", "Language selection coming soon!")
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View>
              <Text style={[{ color: colors.onSurface }]}>Language</Text>
              <Text style={[{ color: colors.outline }]}>
                {userData.language}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfilePreference;
