import { FlatList, StyleSheet } from "react-native";

function PlacesList({places}) {
    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={() =>{}}
        />
    )
}

export default PlacesList;

const styles = StyleSheet.create({})