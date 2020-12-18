import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

// You're not calling this function, instead, you're just passing a reference to this function.
// You're wrapping this function inside request function.
// You can rename de-structured objects and match functions you typed below.

// It's optional either to use single object or de-structured object
// { data: listings, error, loading, request: loadListings }

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(); // loadListings(1, 2, 3);
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.price + "円"}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
