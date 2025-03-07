import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
	return (
		<View className="items-center justify-center">
			<Text className="font-bold text-lg"> ddsgdgsd</Text>
			<Link href="/sign-in">sign in</Link>
			<Link href="/profile">sign in</Link>
			<Link href="/explore">explore</Link>
		</View>
	)
}
