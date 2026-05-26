import { useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// For icons, we'll use a combination of emoji or a vector icon library
// You can replace with @expo/vector-icons or react-native-vector-icons
// For simplicity, using text emoji/unicode for now

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

// Colors from the design system
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
  surfaceBright: "#f7f9fb",
  surfaceDim: "#d8dadc",
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

// Icon mapping using text/emoji fallback
// For production, replace with proper icons like MaterialIcons, Ionicons, etc.

const DashboardScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const renderHeadline = () => (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={[
          {
            color: colors.onSurface,
            marginBottom: 8,
            fontSize: 28,
            fontWeight: 700,
          },
        ]}
      >
        Overview Dashboard
      </Text>
      <Text style={[{ color: colors.onSurfaceVariant }]}>
        Welcome back. Here's what changed today.
      </Text>
    </View>
  );

  const renderMetrics = () => (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 24,
      }}
    >
      {/* Total Revenue - spans full width */}
      <View
        style={{
          width: "100%",
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 16,
          shadowColor: "#2d2929ff",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                fontSize: 12,
                fontWeight: "700",
              },
            ]}
          >
            TOTAL REVENUE
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 8 }}>
          <Text
            style={[
              {
                color: colors.primary,
                fontSize: 28,
                fontWeight: "700",
              },
            ]}
          >
            $124,592
          </Text>
        </View>
      </View>

      {/* Active Users */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                fontSize: 12,
                fontWeight: "700",
              },
            ]}
          >
            ACTIVE USERS
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 8 }}>
          <Text style={[{ color: colors.primary, fontSize: 28 }]}>12,840</Text>
        </View>
        <View
          style={{
            marginTop: 8,
            height: 4,
            width: "100%",
            backgroundColor: colors.surfaceContainer,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "65%",
              height: "100%",
              backgroundColor: colors.primary,
            }}
          />
        </View>
      </View>

      {/* Tasks */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                fontSize: 12,
                fontWeight: "700",
              },
            ]}
          >
            TASKS
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline", gap: 8 }}>
          <Text style={[{ color: colors.primary, fontSize: 28 }]}>94.2%</Text>
        </View>
        <View
          style={{
            marginTop: 8,
            height: 4,
            width: "100%",
            backgroundColor: colors.surfaceContainer,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "94.2%",
              height: "100%",
              backgroundColor: colors.secondary,
            }}
          />
        </View>
      </View>
    </View>
  );

  const renderQuickActions = () => (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={[
          {
            color: colors.onSurfaceVariant,
            marginBottom: 16,
            letterSpacing: 0.5,
            fontSize: 12,
            fontWeight: "700",
          },
        ]}
      >
        QUICK ACTIONS
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary,
            height: 96,
            borderRadius: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={[
              {
                color: colors.onPrimary,
                marginTop: 8,
                fontSize: 16,
                fontWeight: "600",
              },
            ]}
          >
            New Project
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.surfaceContainerLowest,
            borderWidth: 1,
            borderColor: colors.primary,
            height: 96,
            borderRadius: 12,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={[
              {
                color: colors.primary,
                marginTop: 8,
                fontSize: 16,
                fontWeight: "600",
              },
            ]}
          >
            Invite User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderWeeklyProgress = () => {
    const data = [60, 70, 45, 90, 75, 50, 85]; // percentages for each day
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <View
        style={{
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.surfaceVariant,
          borderRadius: 12,
          padding: 16,
          marginBottom: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Text style={[{ color: colors.onSurface }]}>Weekly Progress</Text>
          <TouchableOpacity>
            <Text style={[{ color: colors.onSurfaceVariant }]}>
              This Week ▼
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 4,
            height: 140,
          }}
        >
          {data.map((value, index) => {
            const barHeight = (value / 100) * 120;
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  backgroundColor: `${colors.primary}20`,
                  borderRadius: 4,
                  height: 120,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: barHeight,
                    backgroundColor: colors.primary,
                    borderRadius: 4,
                  }}
                />
              </View>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          {days.map((day, index) => (
            <Text
              key={index}
              style={[
                {
                  color: colors.onSurfaceVariant,
                  textTransform: "uppercase",
                  fontSize: 12,
                  fontWeight: "700",
                },
              ]}
            >
              {day}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  const renderActivityFeed = () => {
    const activities = [
      {
        id: 1,
        icon: "edit",
        iconBg: colors.secondaryContainer,
        iconColor: colors.onSecondaryContainer,
        title: 'Sarah updated "Q3 Assets"',
        time: "2m ago",
        description: "Modified 4 files in the Branding folder",
      },
      {
        id: 2,
        icon: "task_alt",
        iconBg: colors.primaryContainer,
        iconColor: colors.onPrimaryContainer,
        title: 'Project "NeoBank" Completed',
        time: "1h ago",
        description: "All milestones were achieved ahead of schedule",
      },
      {
        id: 3,
        icon: "group",
        iconBg: colors.tertiaryContainer,
        iconColor: colors.onTertiaryContainer,
        title: "New user joined team",
        time: "4h ago",
        description: "David Miller accepted the invite",
      },
    ];

    return (
      <View style={{ marginBottom: 24 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                fontSize: 12,
                fontWeight: "700",
              },
            ]}
          >
            RECENT ACTIVITY
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                {
                  color: colors.primary,
                  fontSize: 12,
                  fontWeight: "700",
                },
              ]}
            >
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 12 }}>
          {activities.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                gap: 16,
                padding: 16,
                backgroundColor: colors.surfaceContainerLowest,
                borderWidth: 1,
                borderColor: colors.surfaceVariant,
                borderRadius: 12,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: item.iconBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      {
                        fontWeight: "600",
                        color: colors.onSurface,
                        fontSize: 14,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      {
                        color: colors.onSurfaceVariant,
                        fontSize: 12,
                        fontWeight: "700",
                      },
                    ]}
                  >
                    {item.time}
                  </Text>
                </View>
                <Text
                  style={[
                    {
                      color: colors.onSurfaceVariant,
                      fontSize: 12,
                      fontWeight: "700",
                    },
                  ]}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
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
        {renderHeadline()}
        {renderMetrics()}
        {renderQuickActions()}
        {renderWeeklyProgress()}
        {renderActivityFeed()}
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
