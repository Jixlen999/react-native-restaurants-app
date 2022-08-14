import { FlatList, View } from "react-native";
import CategoryItem from "./CategortItem";

export default function Categories({ categories, setTerm, term }) {
	return (
		<View>
			<FlatList
				data={categories}
				renderItem={({ item, index }) => {
					return (
						<CategoryItem
							name={item.name}
							imageURL={item.imageURL}
							index={index}
							active={item.name === term}
							handlePress={() => setTerm(item.name)}
						/>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(category) => category.name}
			/>
		</View>
	);
}
