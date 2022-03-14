import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

let { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinUPDDiVInN0K6dp5Z8dNJvm8KygLF7U6gA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZo3bqj5AVN8PtxLRolO8Zr-ZzcQGf7GMoA&usqp=CAU",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper showsButtons={false} autoplay={true} autoplayTimeout={3}>
          {bannerData.map((item, index) => {
            return (
              <View key={index} style={styles.slide}>
                <Image
                  source={{ uri: item }}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  swiper: {
    width: width,
    height: 140,
    marginTop: 0,
    padding: 0,
    marginBottom: 20,
  },

  image: {
    height: width / 2,
    width: width,
  },
});

export default Banner;
