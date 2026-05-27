import FloatingActionBtn from "@/components/FloatingActionBtn";
import ProjectList from "@/components/ProjectList";
import ProjectQuickStats from "@/components/projectQuickStats";
import ProjectsFilter from "@/components/ProjextFilters";
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

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
        <ProjectQuickStats />
        <ProjectsFilter
          filters={filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ProjectList projects={projects} />
      </ScrollView>
      <FloatingActionBtn />
    </SafeAreaView>
  );
};

export default ProjectsScreen;
