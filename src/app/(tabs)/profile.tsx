import { useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// Colors from the design system (consistent with all pages)
const colors = {
  primary: "#1f108e",
  onPrimary: "#ffffff",
  primaryFixed: "#e2dfff",
  onPrimaryFixed: "#0f0069",
  primaryContainer: "#3730a3",
  onPrimaryContainer: "#a9a7ff",
  secondary: "#505f76",
  onSecondary: "#ffffff",
  secondaryContainer: "#d0e1fb",
  onSecondaryContainer: "#54647a",
  tertiary: "#242c40",
  onTertiary: "#ffffff",
  tertiaryContainer: "#3b4257",
  onTertiaryContainer: "#a7afc8",
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#93000a",
  background: "#f7f9fb",
  onBackground: "#191c1e",
  surface: "#f7f9fb",
  onSurface: "#191c1e",
  surfaceVariant: "#e0e3e5",
  onSurfaceVariant: "#464553",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f2f4f6",
  surfaceContainer: "#eceef0",
  surfaceContainerHigh: "#e6e8ea",
  surfaceContainerHighest: "#e0e3e5",
  outline: "#777584",
  outlineVariant: "#c8c4d5",
  inverseSurface: "#2d3133",
  inverseOnSurface: "#eff1f3",
  inversePrimary: "#c3c0ff",
  success: "#15803d",
  successBg: "#dcfce7",
};

const typography = {
  headlineLg: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.02,
    fontWeight: "700",
  },
  headlineMd: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.01,
    fontWeight: "600",
  },
  headlineSm: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
  },
  bodyLg: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  bodyMd: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  bodySm: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },
  labelMd: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.05,
    fontWeight: "600",
  },
  labelSm: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.05,
    fontWeight: "500",
  },
};

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Profile");
  const [isEditing, setIsEditing] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // User data
  const [userData, setUserData] = useState({
    name: "Marcus Thorne",
    email: "m.thorne@corporate.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "March 2022",
    language: "English",
    role: "Enterprise Tier",
    bio: "Senior Product Manager with over 8 years of experience in fintech and enterprise software solutions.",
  });

  const stats = [
    { label: "Projects", value: "24" },
    { label: "Followers", value: "1.2k" },
    { label: "Following", value: "348" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Success", "Profile updated successfully!");
  };

  const renderProfileHeader = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <View style={{ position: "relative", marginBottom: 16 }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: colors.primary,
            backgroundColor: colors.primaryContainer,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2nQnAifDUYGbbDSJ3baXYgI_YUyOfiYTAiojB_ej49mdmpe0ertOqzRElS5gFH5WpCtPFZIYS2M-oyVrSmjhyiIZEbhYbnjgAjjyaA8gbAkFgB5VA47B62Vqvm9cTIGkURzkX5ghzbXo2bElXRu3G38m5Zou4itD_tVcEQSIC5Cft_lqm6_JHPi5xlVzlGVJtA1D6rT2Ni0UqlWs6bhubgjYaWA7Kb04J0mTYmm_x8Rc6HFqvNOjf5j_oraZ-q_LNqMB3oVTPtvV",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: colors.primary,
            width: 32,
            height: 32,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: colors.surfaceContainerLowest,
          }}
          activeOpacity={0.7}
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Change profile photo feature coming soon!",
            )
          }
        ></TouchableOpacity>
      </View>

      {isEditing ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: colors.onSurface,
              textAlign: "center",
              borderBottomWidth: 1,
              borderBottomColor: colors.primary,
              paddingVertical: 4,
              marginBottom: 8,
              width: "80%",
            }}
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
            placeholder="Name"
            placeholderTextColor={colors.outline}
          />
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 4,
              backgroundColor: colors.primaryFixed,
              borderRadius: 16,
            }}
          >
            <Text style={[{ color: colors.primary }]}>{userData.role}</Text>
          </View>
        </View>
      ) : (
        <>
          <Text style={[{ color: colors.onSurface, marginBottom: 4 }]}>
            {userData.name}
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 4,
              backgroundColor: colors.primaryFixed,
              borderRadius: 16,
            }}
          >
            <Text style={[{ color: colors.primary }]}>{userData.role}</Text>
          </View>
        </>
      )}
    </View>
  );

  const renderStats = () => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        justifyContent: "space-around",
      }}
    >
      {stats.map((stat, idx) => (
        <View key={idx} style={{ alignItems: "center", flex: 1 }}>
          <Text style={[{ color: colors.primary }]}>{stat.value}</Text>
          <Text style={[{ color: colors.onSurfaceVariant }]}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );

  const renderPersonalInfo = () => (
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
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              },
            ]}
          >
            Personal Information
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
          activeOpacity={0.7}
        >
          <Text style={[{ color: colors.primary }]}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16, gap: 16 }}>
        {/* Email */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Email</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
                keyboardType="email-address"
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.email}
              </Text>
            )}
          </View>
        </View>

        {/* Phone */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Phone</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.phone}
                onChangeText={(text) =>
                  setUserData({ ...userData, phone: text })
                }
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.phone}
              </Text>
            )}
          </View>
        </View>

        {/* Location */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Location</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.location}
                onChangeText={(text) =>
                  setUserData({ ...userData, location: text })
                }
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.location}
              </Text>
            )}
          </View>
        </View>

        {/* Join Date */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Joined</Text>
            <Text style={[{ color: colors.onSurface }]}>
              {userData.joinDate}
            </Text>
          </View>
        </View>

        {/* Bio */}
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}
        >
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Bio</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderWidth: 1,
                  borderColor: colors.outlineVariant,
                  borderRadius: 8,
                  padding: 8,
                  textAlignVertical: "top",
                  minHeight: 80,
                }}
                value={userData.bio}
                onChangeText={(text) => setUserData({ ...userData, bio: text })}
                multiline
                numberOfLines={3}
              />
            ) : (
              <Text
                style={[{ color: colors.onSurfaceVariant, lineHeight: 18 }]}
              >
                {userData.bio}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );

  const renderPreferences = () => (
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

  const renderAccountActions = () => (
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

  const renderLogoutButton = () => (
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
      <Text style={[{ color: colors.error, fontWeight: "500" }]}>Log Out</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 80,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderProfileHeader()}
        {renderStats()}
        {renderPersonalInfo()}
        {renderPreferences()}
        {renderAccountActions()}
        {renderLogoutButton()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
