import { Text, View } from "react-native";

const ProjectQuickStats = () => {
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
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 24,
      }}
    >
      {/* Overall Progress - spans full width */}
      <View
        style={{
          width: "100%",
          backgroundColor: colors.primaryContainer,
          borderRadius: 12,
          padding: 16,
          height: 128,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <View style={{ zIndex: 10 }}>
          <Text
            style={[
              {
                color: colors.onPrimaryContainer,
                opacity: 0.8,
                fontSize: 12,
                fontWeight: "700",
              },
            ]}
          >
            OVERALL PROGRESS
          </Text>
          <Text
            style={[
              {
                marginTop: 4,
                color: colors.onPrimary,
                fontSize: 28,
                fontWeight: "700",
              },
            ]}
          >
            74%
          </Text>
        </View>
        <View
          style={{
            zIndex: 10,
            width: "100%",
            height: 8,
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 4,
            marginTop: "auto",
          }}
        >
          <View
            style={{
              width: "74%",
              height: "100%",
              backgroundColor: colors.onPrimary,
              borderRadius: 4,
            }}
          />
        </View>
        {/* Decorative element */}
        <View
          style={{
            position: "absolute",
            right: -16,
            top: -16,
            width: 96,
            height: 96,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 48,
          }}
        />
      </View>

      {/* Active Projects */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: `${colors.outlineVariant}30`,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <Text style={[{ color: colors.outline }]}>ACTIVE</Text>
        <Text
          style={[
            {
              color: colors.primary,
              marginTop: 4,
              fontSize: 20,
              fontWeight: 700,
            },
          ]}
        >
          12
        </Text>
      </View>

      {/* Due Soon */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: `${colors.outlineVariant}30`,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <Text style={[{ color: colors.outline }]}>DUE SOON</Text>
        <Text
          style={[
            {
              color: colors.primary,
              marginTop: 4,
              fontSize: 20,
              fontWeight: 700,
            },
          ]}
        >
          3
        </Text>
      </View>
    </View>
  );
};
export default ProjectQuickStats;
