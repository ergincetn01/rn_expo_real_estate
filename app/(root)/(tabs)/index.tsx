import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
	return (
		<View className="items-center flex-1 bg-primary-100 flex-col">
			<Link
				href="/sign-in"
				className="font-semibold text-xl text-black-300"
			>
				Sign in
			</Link>
			<Link
				href="/profile"
				className="font-semibold text-xl text-black-300"
			>
				Profile
			</Link>
			<Link
				href="/explore"
				className="font-semibold text-xl text-black-300"
			>
				Explore
			</Link>
		</View>
	)
}
