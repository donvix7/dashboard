import {
    Alert,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const ProfileHeader = ({ colors, userData, setUserData, isEditing }) => {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <View style={{ position: "relative", marginBottom: 16 }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: colors.primary,
            backgroundColor: colors.primaryContainer,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2nQnAifDUYGbbDSJ3baXYgI_YUyOfiYTAiojB_ej49mdmpe0ertOqzRElS5gFH5WpCtPFZIYS2M-oyVrSmjhyiIZEbhYbnjgAjjyaA8gbAkFgB5VA47B62Vqvm9cTIGkURzkX5ghzbXo2bElXRu3G38m5Zou4itD_tVcEQSIC5Cft_lqm6_JHPi5xlVzlGVJtA1D6rT2Ni0UqlWs6bhubgjYaWA7Kb04J0mTYmm_x8Rc6HFqvNOjf5j_oraZ-q_LNqMB3oVTPtvV",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: colors.primary,
            width: 32,
            height: 32,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: colors.surfaceContainerLowest,
          }}
          activeOpacity={0.7}
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Change profile photo feature coming soon!",
            )
          }
        ></TouchableOpacity>
      </View>

      {isEditing ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            style={{
              fontSize: 22,
              fontWeight: "600",
              color: colors.onSurface,
              textAlign: "center",
              borderBottomWidth: 1,
              borderBottomColor: colors.primary,
              paddingVertical: 4,
              marginBottom: 8,
              width: "80%",
            }}
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
            placeholder="Name"
            placeholderTextColor={colors.outline}
          />
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 4,
              backgroundColor: colors.primaryFixed,
              borderRadius: 16,
            }}
          >
            <Text style={[{ color: colors.primary }]}>{userData.role}</Text>
          </View>
        </View>
      ) : (
        <>
          <Text style={[{ color: colors.onSurface, marginBottom: 4 }]}>
            {userData.name}
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 4,
              backgroundColor: colors.primaryFixed,
              borderRadius: 16,
            }}
          >
            <Text style={[{ color: colors.primary }]}>{userData.role}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ProfileHeader;
