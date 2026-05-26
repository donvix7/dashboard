import { Tabs } from "expo-router";
const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1f108e",
        tabBarInactiveTintColor: "#828282",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: "Analytics",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
