import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import images from "@/constants/images"
import icons from "@/constants/icons"

const SignIn = () => {
	const handleLogin = () => {}
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
					<Text className="text-lg text-black-200 font-rubik text-center mt-10">
						Login to ReState with Google
					</Text>
					<TouchableOpacity
						onPress={handleLogin}
						className="rounded-full shadow-md shadow-zinc-300 bg-white w-full py-4 mt-5"
					>
						<View className="items-center flex flex-row justify-center">
							<Image
								source={icons.google}
								className="w-5 h-5"
								resizeMode="contain"
							/>
							<Text className="font-semibold text-black-300 ml-2">
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

export default SignIn
