import { Text, TextInput, TouchableOpacity, View } from "react-native";

const ProfileInfo = ({ colors, userData, setUserData, isEditing }) => {
  return (
    <View
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderWidth: 1,
        borderColor: colors.surfaceVariant,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 24,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderBottomColor: colors.surfaceVariant,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text
            style={[
              {
                color: colors.onSurfaceVariant,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                fontWeight: "600",
                fontSize: 14,
                fontFamily: "InterMedium",
              },
            ]}
          >
            Personal Information
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
          activeOpacity={0.7}
        >
          <Text style={[{ color: colors.primary }]}>
            {isEditing ? "Save" : "Edit"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 16, paddingVertical: 16 }}>
        {/* Email */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Email</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
                keyboardType="email-address"
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.email}
              </Text>
            )}
          </View>
        </View>

        {/* Phone */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Phone</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.phone}
                onChangeText={(text) =>
                  setUserData({ ...userData, phone: text })
                }
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.phone}
              </Text>
            )}
          </View>
        </View>

        {/* Location */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Location</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.outlineVariant,
                  paddingVertical: 4,
                }}
                value={userData.location}
                onChangeText={(text) =>
                  setUserData({ ...userData, location: text })
                }
              />
            ) : (
              <Text style={[{ color: colors.onSurface }]}>
                {userData.location}
              </Text>
            )}
          </View>
        </View>

        {/* Join Date */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Joined</Text>
            <Text style={[{ color: colors.onSurface }]}>
              {userData.joinDate}
            </Text>
          </View>
        </View>

        {/* Bio */}
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}
        >
          <View style={{ width: 32 }}></View>
          <View style={{ flex: 1 }}>
            <Text style={[{ color: colors.outline }]}>Bio</Text>
            {isEditing ? (
              <TextInput
                style={{
                  fontSize: 14,
                  color: colors.onSurface,
                  borderWidth: 1,
                  borderColor: colors.outlineVariant,
                  borderRadius: 8,
                  padding: 8,
                  textAlignVertical: "top",
                  minHeight: 80,
                }}
                value={userData.bio}
                onChangeText={(text) => setUserData({ ...userData, bio: text })}
                multiline
                numberOfLines={3}
              />
            ) : (
              <Text
                style={[{ color: colors.onSurfaceVariant, lineHeight: 18 }]}
              >
                {userData.bio}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProfileInfo;
