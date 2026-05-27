import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProjectsFilter = ({ filters, setSelectedFilter, selectedFilter }) => {
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
    <View style={{ marginBottom: 16 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
      >
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;
          return (
            <TouchableOpacity
              key={filter}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 999,
                backgroundColor: isActive
                  ? colors.primary
                  : colors.surfaceContainer,
              }}
              onPress={() => setSelectedFilter(filter)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  {
                    color: isActive
                      ? colors.onPrimary
                      : colors.onSurfaceVariant,
                  },
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProjectsFilter;
