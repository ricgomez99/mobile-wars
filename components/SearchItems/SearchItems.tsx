import { useState, useEffect } from "react";
import { TextInput, FlatList, StyleSheet, View } from "react-native";
import _ from "lodash";
import { charsMocks } from "@/constants/chars-mocks";
import CharCard from "../Cards/CharCard/CharCard";
import { CharacterData } from "@/types";

export default function SearchItems() {
  useEffect(() => {
    setCharacters(charsMocks);
    setSearchData(charsMocks);
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<CharacterData[]>([]);
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const handleQuery = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = _.filter(searchData, (char) => {
      return matchCharacter(char.nombre, char.lugar_de_origen, formattedQuery);
    });
    setCharacters(filteredData);
  };

  const matchCharacter = (
    nombre: string,
    lugar_de_origen: string,
    query: string
  ) => {
    return (
      nombre.toLowerCase().includes(query) ||
      lugar_de_origen.toLowerCase().includes(query)
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        placeholderTextColor="#c1c1c1"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleQuery(query)}
        style={styles.search_bar}
      />
      <FlatList
        data={characters}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CharCard
            nombre={item.nombre}
            lugar_de_origen={item.lugar_de_origen}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    gap: 16,
  },
  search_bar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#c1c1c1",
    color: "#c1c1c1",
    borderWidth: 1,
    borderRadius: 16,
  },
});
