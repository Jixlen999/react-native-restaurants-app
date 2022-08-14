import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({
	name,
	imageURL,
	index,
	active,
	handlePress,
}) {
	return (
		<TouchableOpacity onPress={handlePress}>
			<View
				style={[
					styles.container,
					styles.elevation,
					index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
					index === 5 ? { marginRight: 25 } : { marginRight: 0 },
					active
						? { backgroundColor: "rgb(141, 200, 100)" }
						: { backgroundColor: "white" },
				]}
			>
				<View style={styles.imageContainer}>
					<Image source={imageURL} style={styles.image} />
				</View>
				<Text style={styles.header}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 100,
		borderRadius: 50,
		marginVertical: 15,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	elevation,
	image: {
		width: 35,
		height: 35,
	},
	imageContainer: {
		width: 50,
		height: 50,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginBottom: 5,
	},
	header: {
		fontWeight: "bold",
	},
});
