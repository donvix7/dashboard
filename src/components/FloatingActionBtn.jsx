import { TouchableOpacity } from "react-native";

const FloatingActionBtn = () => {
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
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 20,
        bottom: 80,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 40,
      }}
      activeOpacity={0.8}
    ></TouchableOpacity>
  );
};

export default FloatingActionBtn;
