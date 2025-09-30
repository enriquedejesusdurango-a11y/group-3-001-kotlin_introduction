import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";

type FlashCardProps = {
  pregunta: string;
  respuesta: string;
};

export default function FlashCard({ pregunta, respuesta }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    if (flipped) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setFlipped(!flipped);
  };

  return (
    <TouchableOpacity onPress={flipCard} activeOpacity={0.9}>
      <Animated.View
        style={[
          styles.card,
          { transform: [{ rotateY: frontInterpolate }] },
        ]}
      >
        <Text style={styles.text}>{pregunta}</Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.card,
          styles.cardBack,
          { transform: [{ rotateY: backInterpolate }] },
        ]}
      >
        <Text style={styles.text}>{respuesta}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    height: 500,
    backgroundColor: "#a3cdf5ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    position: "absolute",
    left: -160,
    backfaceVisibility: "hidden",
  },
  cardBack: {
    position: "absolute",
    top: 0,
    backgroundColor: "#A8E6CF",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
