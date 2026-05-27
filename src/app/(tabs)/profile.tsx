import AccountActions from "@/components/AccountActions";
import LogoutBtn from "@/components/LogoutBtn";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileInfo from "@/components/ProfileInfo";
import ProfilePreference from "@/components/ProfilePreference";
import ProfileStats from "@/components/ProfileStats";
import { useState } from "react";

import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar
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
        <ProfileHeader
          isEditing={isEditing}
          userData={userData}
          setUserData={setUserData}
          colors={colors}
        />
        <ProfileStats stats={stats} colors={colors} />
        <ProfileInfo
          isEditing={false}
          userData={userData}
          setUserData={setUserData}
          colors={colors}
        />
        <ProfilePreference
          setPushEnabled={setPushEnabled}
          setEmailEnabled={setEmailEnabled}
          setDarkModeEnabled={setDarkModeEnabled}
          pushEnabled={pushEnabled}
          emailEnabled={emailEnabled}
          darkModeEnabled={darkModeEnabled}
          colors={colors}
          setUserData={setUserData}
          userData={userData}
        />
        <AccountActions colors={colors} />
        <LogoutBtn colors={colors} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
