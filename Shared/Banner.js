import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

let { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
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
    height: 200,
    marginTop: 0,
    padding: 0,
  },

  image: {
    height: width / 2,
    width: width,
  },
});

export default Banner;
