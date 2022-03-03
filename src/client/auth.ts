import Cookies from "universal-cookie";

export const isAuthed = () => {
	const cookies = new Cookies();

	const riotAccessToken = cookies.get("riotAccessToken");
	const riotEntitlementsToken = cookies.get("riotEntitlementsToken");

	if (riotAccessToken && riotEntitlementsToken && !isTokenExpired(riotAccessToken)) {
		return true;
	}

	return false;
};

export function isTokenExpired(token: string) {
	const payload = token.split(".")[1];
	return JSON.parse(atob(payload)).exp < Date.now() / 1000;
}
