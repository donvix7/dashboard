import { useState } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

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
  green: "#15803d",
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

// Icon mapping

const AnalyticsScreen = () => {
  const [selectedRange, setSelectedRange] = useState("Today");
  const [selectedTab, setSelectedTab] = useState("Analytics");

  const ranges = ["Today", "7D", "30D"];

  // Line chart data for User Growth
  const lineData = [
    { value: 20, label: "Mon" },
    { value: 40, label: "Tue" },
    { value: 30, label: "Wed" },
    { value: 70, label: "Thu" },
    { value: 50, label: "Fri" },
    { value: 65, label: "Sat" },
    { value: 90, label: "Sun" },
  ];

  // Bar chart data for Engagement Rate
  const barData = [
    { value: 60, label: "M" },
    { value: 45, label: "T" },
    { value: 85, label: "W" },
    { value: 30, label: "T" },
    { value: 70, label: "F" },
    { value: 55, label: "S" },
    { value: 90, label: "S" },
  ];

  const geographicData = [
    { region: "North America", percentage: 75 },
    { region: "Europe", percentage: 42 },
  ];

  const topAssets = [
    {
      icon: "article",
      title: "Q4 Revenue Report",
      metric: "Shared 1.2k times",
      change: "+8.4%",
      conversion: "conversion",
    },
    {
      icon: "image",
      title: "New Brand Assets",
      metric: "Downloaded 840 times",
      change: "+5.1%",
      conversion: "conversion",
    },
    {
      icon: "video_library",
      title: "Tutorial Series",
      metric: "Watched 4.5k times",
      change: "+12.0%",
      conversion: "conversion",
    },
  ];

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
            backgroundColor: colors.secondaryContainer,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
        <Text style={[{ color: colors.primary, fontWeight: "700" }]}>
          User Analytics
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
        activeOpacity={0.7}
      ></TouchableOpacity>
    </View>
  );

  const renderDateRangePicker = () => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.surfaceContainer,
        borderRadius: 12,
        padding: 4,
        marginBottom: 24,
      }}
    >
      {ranges.map((range) => {
        const isActive = selectedRange === range;
        return (
          <TouchableOpacity
            key={range}
            style={{
              flex: 1,
              paddingVertical: 8,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: isActive
                ? colors.surfaceContainerLowest
                : "transparent",
              borderRadius: 8,
              shadowColor: isActive ? "#000" : "transparent",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: isActive ? 0.05 : 0,
              shadowRadius: 2,
              elevation: isActive ? 1 : 0,
            }}
            onPress={() => setSelectedRange(range)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                { color: isActive ? colors.primary : colors.onSurfaceVariant },
              ]}
            >
              {range}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderKPICards = () => (
    <View style={{ flexDirection: "row", gap: 12, marginBottom: 24 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.outlineVariant,
          borderRadius: 12,
          padding: 16,
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
          Total Users
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            gap: 8,
            marginTop: 8,
          }}
        >
          <Text style={[, { color: colors.onSurface }]}>24.8k</Text>
          <Text style={[{ color: colors.green }]}>+12%</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: colors.outlineVariant,
          borderRadius: 12,
          padding: 16,
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
          Retention
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            gap: 8,
            marginTop: 8,
          }}
        >
          <Text style={[{ color: colors.onSurface }]}>68.2%</Text>
          <Text style={[, { color: colors.primary }]}>-2%</Text>
        </View>
      </View>
    </View>
  );

  const renderLineChart = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[{ color: colors.onSurface }]}>User Growth</Text>
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <LineChart
          data={lineData}
          height={160}
          width={Dimensions.get("window").width - 72}
          color={colors.primary}
          thickness={3}
          hideDataPoints
          hideRules
          hideYAxisText
          xAxisColor={colors.surfaceVariant}
          xAxisLabelTextStyle={{ fontSize: 10, color: colors.onSurfaceVariant }}
          areaChart
          startFillColor={colors.primary}
          startOpacity={0.1}
          endFillColor={colors.primary}
          endOpacity={0}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
            paddingHorizontal: 8,
          }}
        >
          {lineData.map((item, idx) => (
            <Text key={idx} style={[{ color: colors.onSurfaceVariant }]}>
              {item.label}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  const renderBarChart = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <View style={{ padding: 16 }}>
        <Text style={[{ color: colors.onSurface, marginBottom: 16 }]}>
          Engagement Rate
        </Text>
        <BarChart
          data={barData}
          height={120}
          width={Dimensions.get("window").width - 72}
          barWidth={28}
          frontColor={colors.primary}
          backgroundColor={colors.secondaryContainer}
          barBorderRadius={4}
          showGradient
          gradientColor={colors.primaryContainer}
          hideRules
          hideYAxisText
          xAxisColor={colors.surfaceVariant}
          xAxisLabelTextStyle={{ fontSize: 10, color: colors.onSurfaceVariant }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
            paddingHorizontal: 8,
          }}
        >
          {barData.map((item, idx) => (
            <Text key={idx} style={[{ color: colors.onSurfaceVariant }]}>
              {item.label}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  const renderGeographicDistribution = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
      }}
    >
      <View style={{ padding: 16 }}>
        <Text style={[{ color: colors.onSurface }]}>
          Geographic Distribution
        </Text>
        <Text style={[{ color: colors.onSurfaceVariant, marginTop: 4 }]}>
          Active users by region
        </Text>
      </View>
      <View
        style={{
          height: 176,
          backgroundColor: colors.surfaceContainer,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnEisp1jmsBUAS8nxVTPLQNzDW1x5vgwPXUPcAGBBUonGr7ykUK408mU1_mdUMu-wBt0FMZC9G1sxRsf4FUBzUt4JBDXFzXgbcJMdYFMQq7_52ZreUOsKoqLtm5u2GfkqEEPm9-Mm23oh5sQXOxVCOe-r6vQvVupX1R85F8SjcU3yuxAXD7IUoG0rik2xotGoJlu51Yd4zOxqjZy3qg-oJywmkb1sZSlvfNLjGCi2KtTd_T4AE-E3G9hRutfgl4Ss9zbzRqJD1A17V",
          }}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
          resizeMode="cover"
        />
        <View
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      </View>
      <View style={{ padding: 16, gap: 12 }}>
        {geographicData.map((item) => (
          <View
            key={item.region}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[{ color: colors.onSurface }]}>{item.region}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  width: 96,
                  height: 6,
                  backgroundColor: colors.surfaceContainer,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    width: `${item.percentage}%`,
                    height: "100%",
                    backgroundColor: colors.primary,
                    borderRadius: 3,
                  }}
                />
              </View>
              <Text style={[{ color: colors.primary }]}>
                {item.percentage}%
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderTopAssets = () => (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.outlineVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceVariant,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[{ color: colors.onSurface }]}>Top Assets</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={[{ color: colors.primary }]}>View All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ borderTopWidth: 1, borderTopColor: colors.surfaceVariant }}
      >
        {topAssets.map((asset, idx) => (
          <View
            key={idx}
            style={{
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: idx < topAssets.length - 1 ? 1 : 0,
              borderBottomColor: colors.surfaceVariant,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: colors.surfaceContainer,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View>
                <Text style={[{ fontWeight: "600", color: colors.onSurface }]}>
                  {asset.title}
                </Text>
                <Text style={[{ color: colors.onSurfaceVariant }]}>
                  {asset.metric}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={[{ color: colors.primary }]}>{asset.change}</Text>
              <Text style={[{ color: colors.onSurfaceVariant }]}>
                {asset.conversion}
              </Text>
            </View>
          </View>
        ))}
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
        {renderDateRangePicker()}
        {renderKPICards()}
        {renderLineChart()}
        {renderBarChart()}
        {renderGeographicDistribution()}
        {renderTopAssets()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;
