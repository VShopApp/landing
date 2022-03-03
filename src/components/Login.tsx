import {FormEventHandler, useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {BiLoaderAlt} from "react-icons/bi";
import {useRouter} from "next/router";
import {isAuthed} from "../client/auth";
import Link from "next/link";

export default function Login() {
	const [authed, setAuthed] = useState<boolean>(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [mfa, setMfa] = useState<{email: string; cookie: string[]; code?: string} | null>(null);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const doLogIn: FormEventHandler = async e => {
		setLoading(true);
		e.preventDefault();

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		const data = await res.json();
		if (data.error) {
			setLoading(false);
			alert(data.error);
		} else if (data.mfaRequired) {
			setLoading(false);
			setMfa({email: data.mfaEmail, cookie: data.cookie});
		} else {
			setLoading(false);

			const cookies = new Cookies();
			cookies.set("riotAccessToken", data.accessToken, {path: "/", maxAge: 3600});
			cookies.set("riotEntitlementsToken", data.entitlementsToken, {path: "/", maxAge: 3600});

			router.push("/dashboard");
		}
	};

	const doLogOut = () => {
		const cookies = new Cookies();
		cookies.remove("riotAccessToken", {path: "/"});
		cookies.remove("riotEntitlementsToken", {path: "/"});
		setAuthed(false);
	};

	const handleMfa: FormEventHandler = async e => {
		setLoading(true);
		e.preventDefault();

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/mfa`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				cookie: mfa?.cookie,
				code: mfa?.code,
			}),
		});
		const data = await res.json();
		if (data.error) {
			setLoading(false);
			alert(data.error);
		} else {
			setLoading(false);

			const cookies = new Cookies();
			cookies.set("riotAccessToken", data.accessToken, {path: "/", maxAge: 3600});
			cookies.set("riotEntitlementsToken", data.entitlementsToken, {path: "/", maxAge: 3600});

			router.push("/dashboard");
		}
	};

	useEffect(() => {
		setAuthed(isAuthed());
	}, []);

	if (mfa) {
		return (
			<div className="flex items-center rounded-md bg-[#00000075] border border-[#ffffff25] p-5">
				<div>
					<h1 className="text-3xl font-bold">MFA</h1>
					<p>Please enter the MFA code that has been sent to your email ({mfa.email})</p>
					<form className="mt-5 space-y-5" onSubmit={handleMfa}>
						<input
							className="shadow bg-[#ffffff25] caret-white rounded w-full py-2 px-3 leading-tight focus:outline-none"
							type="text"
							placeholder="MFA code"
							value={mfa.code}
							onInput={(e: any) => setMfa({...mfa, code: e.target.value})}
							required
						/>
						<button
							className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={loading}
						>
							{loading ? <BiLoaderAlt className="animate-spin h-5 w-5" /> : "Submit code"}
						</button>
					</form>
				</div>
			</div>
		);
	}

	return (
		<div className="flex items-center rounded-md bg-[#00000075] border border-[#ffffff25] p-5">
			{!authed ? (
				<div>
					<h1 className="text-3xl font-bold">Login</h1>
					<form className="mt-5 space-y-5" onSubmit={doLogIn}>
						<input
							className="shadow bg-[#ffffff25] caret-white rounded w-full py-2 px-3 leading-tight focus:outline-none"
							type="text"
							placeholder="Riot Username"
							value={username}
							onInput={(e: any) => setUsername(e.target.value)}
							required
						/>
						<input
							className="shadow bg-[#ffffff25] caret-white rounded w-full py-2 px-3 leading-tight focus:outline-none"
							type="password"
							placeholder="Riot Password"
							value={password}
							onInput={(e: any) => setPassword(e.target.value)}
							required
						/>
						<button
							className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={loading}
						>
							{loading ? <BiLoaderAlt className="animate-spin h-5 w-5" /> : "Sign In"}
						</button>
					</form>
					<p className="text-gray-400 mt-4">
						Your password is <b>never</b> stored in our database.
					</p>
				</div>
			) : (
				<div className="text-center">
					<h1 className="text-4xl font-bold">Welcome back 🎉</h1>
					<p className="mt-1 text-lg text-gray-300 mb-4">You are already logged in.</p>
					<div className="space-x-3">
						<Link href="/dashboard">
							<a className="bg-primary py-2 px-4 rounded focus:outline-none focus:shadow-outline">
								Dashboard
							</a>
						</Link>
						<button
							onClick={doLogOut}
							className="bg-primary py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Log out
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
