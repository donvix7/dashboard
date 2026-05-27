import { Text, View } from "react-native";

const ProfileStats = ({ stats, colors }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        justifyContent: "space-around",
      }}
    >
      {stats.map((stat, idx) => (
        <View key={idx} style={{ alignItems: "center", flex: 1 }}>
          <Text style={[{ color: colors.primary, fontSize: 22 }]}>
            {stat.value}
          </Text>
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                fontSize: 12,
                fontWeight: "400",
                marginTop: 4,
              },
            ]}
          >
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default ProfileStats;
