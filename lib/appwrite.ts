import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite"
import * as Linking from "expo-linking"
import { openAuthSessionAsync } from "expo-web-browser"
import { configRegExp } from "expo-router/build/fork/getStateFromPath-forks"
export const config = {
	platform: "com.restate",
	endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
	projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client()

client
	.setEndpoint(config.endpoint!)
	.setProject(config.projectId!)
	.setPlatform(config.platform!)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login() {
	try {
		const redirectUri = Linking.createURL("./")
		const res = await account.createOAuth2Token(
			OAuthProvider.Google,
			redirectUri
		)
		if (!res) throw new Error("Failed to login")

		const browserResponse = await openAuthSessionAsync(
			res.toString(),
			redirectUri
		)

		if (browserResponse.type !== "success")
			throw new Error("Failed to login!")

		const url = new URL(browserResponse.url)

		const secret = url.searchParams.get("secret")?.toString()
		const userId = url.searchParams.get("userId")?.toString()

		if (!secret || !userId) throw new Error("Failed to login!")

		const session = await account.createSession(userId, secret)

		if (!session) throw new Error("Failed to login!")

		return true
	} catch (error) {
		console.error(error)
		return false
	}
}

export async function logout() {
	try {
		await account.deleteSession("current")
		return true
	} catch (err) {
		console.error(err)
		return false
	}
}

export async function getCurrentUser() {
	try {
		const res = await account.get()

		if (res.$id) {
			const userAvatar = avatar.getInitials(res.name)
			return {
				...res,
				avatar: userAvatar.toString(),
			}
		}
		return res
	} catch (err) {
		console.error(err)
		return null
	}
}
