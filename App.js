import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const gradesData = [
    { module: "C++ 2", grade: "A+" },
    { module: "Statistics", grade: "B+" },
    { module: "Database Systems", grade: "A" },
  ];

  const ProfileScreen = () => {
    const studentName = "Amohelang Monaleli";
    const studentNumber = "901016790";
    const currentSemester = "Semester 6";

    const renderItem = ({ item }) => (
      <View style={styles.gradeItem}>
        <Text style={styles.module}>Module: {item.module}</Text>
        <Text style={styles.grade}>Grade: {item.grade}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image source={require("./id.jpg")} style={styles.profilePicture} />
          <Text style={styles.studentName}>Amohelang Monaleli</Text>
          <Text>901016790</Text>
          <Text>Semester4</Text>
        </View>
        <View style={styles.gradesContainer}>
          <Text style={styles.gradesTitle}>Semester Grades</Text>
          <ScrollView>
            {gradesData.map((item, index) => (
              <View style={styles.gradeItem} key={index}>
                <Text style={styles.module}>Module: {item.module}</Text>
                <Text style={styles.grade}>Grade: {item.grade}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "lightgreen",
    },
    profileInfo: {
      alignItems: "center",
      marginBottom: 20,
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    studentName: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    studentNumber: {
      marginBottom: 5,
    },
    currentSemester: {
      marginBottom: 10,
    },
    gradesContainer: {
      flex: 1,
    },
    gradesTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    gradeItem: {
      flexDirection: "row",
      marginBottom: 15,
      fontWeight: "bold",
    },
    semester: {
      fontWeight: "bold",
      marginRight: 10,
    },
    module: {
      marginRight: 50,
      marginBottom: 5,
      paddingBottom: 5,
    },
    grade: {
      marginRight: 50,
      marginBottom: 5,
      paddingBottom: 5,
      fontWeight: "bold",
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <ProfileScreen />
    </View>
  );
}
