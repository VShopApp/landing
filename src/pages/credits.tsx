import PageLayout from "../components/PageLayout";
import credits from "../assets/credits.json";

export default function Credits() {
	return (
		<>
			<PageLayout pageTitle="Credits">
				<div>
					{credits.map((item, i) => (
						<div key={i}>
							<h1 className="text-2xl font-bold">
								{item.name}{" "}
								<span className="text-gray-300 font-normal text-xl">({item.users.length})</span>
							</h1>
							<div className="my-4">
								{item.users.map((user, i) => (
									<div key={i} className="flex items-center space-x-2 py-1">
										<div>
											<p className="text-lg">{user.name}</p>
											{user.info && <p className="text-xs text-gray-300">{user.info}</p>}
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</PageLayout>
		</>
	);
}
