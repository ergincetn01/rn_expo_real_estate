import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import images from "@/constants/images"

const SignIn = () => {
	return (
		<View
			// style={{ backgroundColor: "white" }
			className="bg-white h-full"
		>
			<ScrollView contentContainerClassName="h-full">
				<Image
					source={images.onboarding}
					className="w-full h-4/6"
					resizeMode="contain"
				/>
				<View className="px-10">
					<Text className="text-base text-center uppercase font-rubik text-black-200">
						Welcome to ReState
					</Text>
					<Text className="text-3xl text-center mt-2 font-rubik-bold text-black-300">
						Let's Get You Closer To{"\n"}
						<Text className="text-primary-300">
							Your Ideal Home
						</Text>
					</Text>
				</View>
			</ScrollView>
		</View>
	)
}

export default SignIn
