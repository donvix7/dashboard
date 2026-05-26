import { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Colors from the design system (same as dashboard)
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

const SettingsScreen = () => {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailDigestEnabled, setEmailDigestEnabled] = useState(false);

  const renderHeader = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: colors.surfaceVariant,
        backgroundColor: colors.surface,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: colors.surfaceContainer,
            borderWidth: 1,
            borderColor: colors.outlineVariant,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmuKdKDmVg_2qHERsvMTNpRpXX-CvquLUXocBPbZR2mXv5_aGRhHdv8E7HOGHi47TzUgO8W1x1ilw5WKFK3C13wk7tINP-e6fWmoxLN11BYTUyzF1hD0qRHOY5OfDC6TLjD-6-at1iPwKbCHBR04UWEboOBNAZZsSzJXgVZgyKhlK1K-utWNHGf5P3NejgQfZy5v8KS-upOjV9_gHotFSyYWrjK2yHTCkHO4ZUX77JKk9GfwyKgKlaCeCTRx-TvdE_mLi_eOuhVAn8",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={[{ color: colors.primary, fontWeight: "700" }]}>
          Settings
        </Text>
      </View>
      <TouchableOpacity
        style={{ padding: 8, borderRadius: 20 }}
        activeOpacity={0.7}
      ></TouchableOpacity>
    </View>
  );

  const renderUserProfile = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <View style={{ position: "relative" }}>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: colors.primaryFixed,
          }}
        >
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2nQnAifDUYGbbDSJ3baXYgI_YUyOfiYTAiojB_ej49mdmpe0ertOqzRElS5gFH5WpCtPFZIYS2M-oyVrSmjhyiIZEbhYbnjgAjjyaA8gbAkFgB5VA47B62Vqvm9cTIGkURzkX5ghzbXo2bElXRu3G38m5Zou4itD_tVcEQSIC5Cft_lqm6_JHPi5xlVzlGVJtA1D6rT2Ni0UqlWs6bhubgjYaWA7Kb04J0mTYmm_x8Rc6HFqvNOjf5j_oraZ-q_LNqMB3oVTPtvV",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: colors.primary,
            width: 24,
            height: 24,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: colors.surfaceContainerLowest,
          }}
        ></View>
      </View>
      <View>
        <Text style={[{ color: colors.onBackground }]}>Marcus Thorne</Text>
        <Text style={[{ color: colors.onSurfaceVariant }]}>
          m.thorne@corporate.com
        </Text>
        <View
          style={{
            marginTop: 4,
            paddingHorizontal: 8,
            paddingVertical: 2,
            backgroundColor: colors.primaryFixed,
            borderRadius: 4,
            alignSelf: "flex-start",
          }}
        >
          <Text style={[{ color: colors.primary }]}>Enterprise Tier</Text>
        </View>
      </View>
    </View>
  );

  const renderAccountSection = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceContainerLow,
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
          Account
        </Text>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.surfaceContainerLow,
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
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>
              Personal Information
            </Text>
            <Text style={[{ color: colors.outline }]}>
              Manage your public profile
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.surfaceContainerLow,
          }}
          activeOpacity={0.7}
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>
              Billing & Subscription
            </Text>
            <Text style={[{ color: colors.outline }]}>
              Next payment: Nov 14, 2023
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderNotificationsSection = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceContainerLow,
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
          Notifications
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>
              Push Notifications
            </Text>
            <Text style={[{ color: colors.outline }]}>
              Direct alerts to your device
            </Text>
          </View>
          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: colors.surfaceVariant, true: colors.primary }}
            thumbColor={colors.surfaceContainerLowest}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.surfaceContainerLow,
          }}
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>Email Digest</Text>
            <Text style={[{ color: colors.outline }]}>
              Weekly performance summaries
            </Text>
          </View>
          <Switch
            value={emailDigestEnabled}
            onValueChange={setEmailDigestEnabled}
            trackColor={{ false: colors.surfaceVariant, true: colors.primary }}
            thumbColor={colors.surfaceContainerLowest}
          />
        </View>
      </View>
    </View>
  );

  const renderSecuritySection = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 16,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 8,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceContainerLow,
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
          Security
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
          activeOpacity={0.7}
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>
              Change Password
            </Text>
            <Text style={[{ color: colors.outline }]}>
              Last changed 3 months ago
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: colors.surfaceContainerLow,
          }}
          activeOpacity={0.7}
        >
          <View>
            <Text style={[{ color: colors.onBackground }]}>
              Two-Factor Authentication
            </Text>
            <Text style={[{ color: colors.secondary, fontWeight: "500" }]}>
              Currently Enabled
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
        {renderUserProfile()}
        {renderAccountSection()}
        {renderNotificationsSection()}
        {renderSecuritySection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
