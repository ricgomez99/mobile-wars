import { useState, useEffect } from "react";
import { TextInput, FlatList, StyleSheet, View } from "react-native";
import _ from "lodash";
import CharCard from "../Cards/CharCard/CharCard";
import { CharacterData } from "@/types";
import { useQueryCharacters } from "@/hooks/characters";
import Loader from "../Loader/Loader";

export default function SearchItems() {
  const { characters: data, isLoading, isSuccess } = useQueryCharacters();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<CharacterData[]>([]);
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    if (isSuccess && data) {
      setCharacters(data);
      setSearchData(data);
    }
  }, [data, isSuccess]);

  const handleQuery = (query: string) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = _.filter(searchData, (char) => {
      return matchCharacter(char.nombre, formattedQuery);
    });
    setCharacters(filteredData);
  };

  const matchCharacter = (nombre: string, query: string) => {
    return nombre.toLowerCase().includes(query);
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
      {isLoading && <Loader />}
      <FlatList
        data={characters}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <CharCard nombre={item.nombre} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 1,
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
