import { Image, Text, TouchableOpacity, View } from "react-native";

const ProjectCard = ({ item }) => {
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
    <View>
      <View
        style={{
          backgroundColor: colors.surfaceContainerLowest,
          borderWidth: 1,
          borderColor: `${colors.outlineVariant}30`,
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                marginBottom: 4,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 4,
                  backgroundColor: item.priorityBg,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "700",
                    letterSpacing: 0.5,
                    color: item.priorityColor,
                    textTransform: "uppercase",
                  }}
                >
                  {item.priority}
                </Text>
              </View>
              <Text style={[{ color: colors.outline }]}>ID: {item.id}</Text>
            </View>
            <Text style={[{ color: colors.onBackground }]}>{item.title}</Text>
          </View>
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.7}
          ></TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text style={[{ color: colors.onSurfaceVariant }]}>Progress</Text>
          <Text style={[{ color: colors.primary }]}>{item.progress}%</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 6,
            backgroundColor: colors.surfaceContainer,
            borderRadius: 3,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: `${item.progress}%`,
              height: "100%",
              backgroundColor: colors.primary,
              borderRadius: 3,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {item.teamImages.map((image, key) => (
              <View
                key={key}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: colors.surfaceContainerLowest,
                  marginLeft: key === 0 ? 0 : -8,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ))}
            {item.extraTeamCount > 0 && (
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: colors.surfaceContainer,
                  borderWidth: 2,
                  borderColor: colors.surfaceContainerLowest,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: -8,
                }}
              >
                <Text style={[{ fontSize: 9, color: colors.outline }]}>
                  +{item.extraTeamCount}
                </Text>
              </View>
            )}
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={[{ color: colors.outline }]}>{item.dueDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProjectCard;
