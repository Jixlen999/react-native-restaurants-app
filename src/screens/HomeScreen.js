import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

export default function HomeScreen() {
	const [term, setTerm] = useState("Burger");
	const commonCategories = [
		{
			name: "Burger",
			imageURL: require("../assets/images/burger.png"),
		},
		{
			name: "Pizza",
			imageURL: require("../assets/images/pizza.png"),
		},
		{
			name: "Dessert",
			imageURL: require("../assets/images/cake.png"),
		},
		{
			name: "Drinks",
			imageURL: require("../assets/images/smoothies.png"),
		},
		{
			name: "Steak",
			imageURL: require("../assets/images/steak.png"),
		},
		{
			name: "Pasta",
			imageURL: require("../assets/images/pasta.png"),
		},
	];

	return (
		<View style={styles.container}>
			<Header />
			<Search setTerm={setTerm} />
			<Categories categories={commonCategories} setTerm={setTerm} term={term} />
			<Restaurants term={term} />
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgb(253, 253, 253)",
	},
});
