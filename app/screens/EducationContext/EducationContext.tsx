import { Alert, Dimensions, Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH, FIRESTORE_RT_DB } from '../../../FirebaseConfig';
import { get, onValue, ref, remove } from 'firebase/database';
import { ArrowLeft, ArrowRight, ClearIcon } from '../../../Icons';
export interface EducationContextModel {
  [key: string]: {
    level: string,
    word: string,
    means: string[]
  }
}
const EducationContext = () => {
  const [educationContext, setEducationContext] = useState<EducationContextModel | undefined>(undefined);
  const [indexOfTurkishMeans, setIndexOfTurkishMeans] = useState(0);

  const db = FIRESTORE_RT_DB;
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const educationContextRef = ref(db, 'users/' + auth.currentUser?.uid + "/education_context/");

    const unsubscribe = onValue(educationContextRef, (snapshot) => {
      const data = snapshot.val() as EducationContextModel | null;
      setEducationContext(data || undefined);
    }, (error) => {
      console.error("Veri okuma hatası:", error);
    });
    return () => unsubscribe();
  }, []);

  const removeFromEducationContext = async (word: string) => {
    remove(ref(db, 'users/' + auth.currentUser?.uid + "/education_context/" + word)).then(() => {
    }).catch((err: any) => console.log(err))
  }
  const handleMeansPrevious = () => {
    if (indexOfTurkishMeans > 0) {
      setIndexOfTurkishMeans(indexOfTurkishMeans - 1);
    }
  };

  const handleMeansNext = (key:string) => {
    if (indexOfTurkishMeans < educationContext![key].means.length - 1) {
      setIndexOfTurkishMeans(indexOfTurkishMeans + 1);
    }
  };
  return (
    <ScrollView>
      {educationContext && Object.keys(educationContext).map((key) => (
        <View style={styles.selectedWordContainer}>
          <View style={styles.selectedWordContext}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>{key}</Text>
              {educationContext[key].level && (
                <View style={{ backgroundColor: "#FEC400", padding: 10, borderRadius: 40 }}>
                  <Text style={{ fontWeight: "900", fontSize: 25 }}>{educationContext[key].level}</Text>
                </View>
              )}
            </View>
            {educationContext[key]?.means && educationContext[key]?.means.length > 0 && (
              <View style={{ marginVertical: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Turkish Means</Text>
                <View style={styles.container}>
                  <Pressable onPress={handleMeansPrevious}>
                    <ArrowLeft />
                  </Pressable>
                  <Text style={styles.text}>{educationContext[key]?.means[indexOfTurkishMeans]}</Text>
                  <Pressable onPress={() => handleMeansNext(key)}>
                    <ArrowRight />
                  </Pressable>
                </View>
              </View>
            )}
            <Text style={{ fontSize: 20, marginTop: 20 }}>{educationContext[key].word}</Text>
          </View>
          <Pressable onPress={() => removeFromEducationContext(key)}>
            <View style={styles.addToWordList}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Remove From Word List</Text>
            </View>
          </Pressable>
        </View>
      ))}
      <View style={{ height: 30 }}></View>
    </ScrollView>

  )
}

export default EducationContext

const styles = StyleSheet.create({
  selectedWordContainer: {
    width: Dimensions.get("screen").width - 50,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#4A3AFF",
    marginTop: 30
  },
  selectedWordContext: {
    margin: 30
  },
  container: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20
  },
  text: {
    marginHorizontal: 10,
    textAlign: 'center',
    flex: 1,
  },
  addToWordList: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#4A3AFF",
    borderRadius: 50,
  },
  deleteHistoryIcon: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 10
  }
})