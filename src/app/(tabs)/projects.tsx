import { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Colors from the design system (consistent with previous pages)
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

const ProjectsScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [selectedTab, setSelectedTab] = useState("Projects");

  const filters = ["All Projects", "In Progress", "Completed"];

  const projects = [
    {
      id: "PRJ-001",
      title: "Q4 Financial Audit",
      priority: "High Priority",
      priorityColor: colors.error,
      priorityBg: `${colors.error}10`,
      progress: 85,
      teamImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAFQ1NkbD591OEQpq4yx8idVDZbk4ke1nF_JSNrif_bLdRWfL-IyMi9ny80TYzUHdBhDft9cTU_zjnrdSWTu1JN4oZpAfvq8TqYWhTHqHmeEESD8-1nLDGwEu17SRsu8w7Sueotnb9gDlzyQAFln3Wt-t54uCG4yogs_wA41M2VvtyPQ4ZdUILqI-jqPjr3MaL7FSLhNrnCF7z1naE8mGmNU-llzc1FDJsNPrfifsfAYlkNoZ8Wy8ovXo0wtj1xbIx9STlkb_pa5so",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDnA5m_sZQmIpT9WhWRp7glEwI4Re-otiiRabHOHE8QF12R5-W7yLoymDvAZ5sppZMSpettp1AN0mQEQ6aB20dfBdA3OuqEuu4pIlnD8PhXd4Wh4Ib2gWIFRQ1u84Of-slKABEyE-uI-_Lo3uQgMBRV51m37mGpHizAsgZM7F2Hzr-HnxzK1qU7nYPSGpiGMP6II_PvtAv6aQbGmFv7JAZKWeaOkyzhOcKUgcLzIwE-N50IvQj6l9SXYQ7tA66zfWPb49npvo3uGgQ8",
      ],
      extraTeamCount: 3,
      dueDate: "Dec 20, 2023",
    },
    {
      id: "PRJ-004",
      title: "System Integration",
      priority: "Medium Priority",
      priorityColor: colors.onSecondaryContainer,
      priorityBg: colors.secondaryContainer,
      progress: 42,
      teamImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFoIilzL3V--vt1j1a3dnTWwV5_0s1rvkn7J9J_785Y0GTp7aULqmmtqvK31iJeNPHO7z2qk6sZZ8ETg7ZLUKBlB0Qpi4LQohr1qWmjgyei6gV9dBnlv9TxkwKuP5TnH-IWqwZ8Zy2xz5tPd0nozH8W4RZOyz16xoRavhh7KUpiR_NrfaW51M-yIxmtknjSbzuO76rCLlqY7WAp7BqD8T6aorQLoO9Wl2FaBdymEGPtWIeiv5RmFCqZuvYjHs-dzrYNQV3viKQL9U",
      ],
      extraTeamCount: 1,
      dueDate: "Jan 12, 2024",
    },
    {
      id: "PRJ-009",
      title: "Internal Wiki Update",
      priority: "Low Priority",
      priorityColor: colors.outline,
      priorityBg: colors.surfaceContainer,
      progress: 10,
      teamImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCc0Bl_v42B9wwngXY3zRkuU6TE2upBdL5fi6oRyOg1uVunoT4tQRnXoUJN7hDHC92WpzWpvQeZOIcLFe5nmO3e2z1L1-ZrHBsC_QdXsKXNsgVEuEe0h15vu77Gpl3HTg4VQh58b77CwuQbe-Ry0WbMROqWXMat3rlbxLbxX2Q1pfzGYz6gJZ7TgQjNmeRDINBdkEOrGxctp7WPm7UeBs4kjaa3cEsXLIZx-FdnHAEhXx_p7L4yR_J5R8gvnvI_cj7IJ37mP0ISh8s9",
      ],
      extraTeamCount: 0,
      dueDate: "Feb 05, 2024",
    },
  ];

  const renderQuickStats = () => (
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
        <Text style={[{ color: colors.primary, marginTop: 4 }]}>12</Text>
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
        <Text style={[{ color: colors.error, marginTop: 4 }]}>3</Text>
      </View>
    </View>
  );

  const renderFilters = () => (
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

  const renderProjectCard = (project: any, key: any) => (
    <View
      key={key}
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
                backgroundColor: project.priorityBg,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  letterSpacing: 0.5,
                  color: project.priorityColor,
                  textTransform: "uppercase",
                }}
              >
                {project.priority}
              </Text>
            </View>
            <Text style={[{ color: colors.outline }]}>ID: {project.id}</Text>
          </View>
          <Text style={[{ color: colors.onBackground }]}>{project.title}</Text>
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
        <Text style={[{ color: colors.primary }]}>{project.progress}%</Text>
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
            width: `${project.progress}%`,
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
          {project.teamImages.map((image: string, key: number) => (
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
          {project.extraTeamCount > 0 && (
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
                +{project.extraTeamCount}
              </Text>
            </View>
          )}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text style={[{ color: colors.outline }]}>{project.dueDate}</Text>
        </View>
      </View>
    </View>
  );

  const renderProjectsList = () => (
    <View>
      {projects.map((project: any, key: number) =>
        renderProjectCard(project, key),
      )}
    </View>
  );

  const renderFloatingActionButton = () => (
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
        {renderQuickStats()}
        {renderFilters()}
        {renderProjectsList()}
      </ScrollView>
      {renderFloatingActionButton()}
    </SafeAreaView>
  );
};

export default ProjectsScreen;
