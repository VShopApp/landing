import PageLayout from "../components/PageLayout";

export default function Privacy() {
	return (
		<>
			<PageLayout pageTitle="Donate">
				<div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-5 w-full">
					<div className="md:w-[50%] space-y-1">
						<p>
							Support the development and get access to Wishlist Notifications by donating any
							amount.
						</p>
						<p>
							To donate please open VShop on your phone, go to settings and click on
							&quot;Donate&quot;.
						</p>
						<p>Any amount is appreciated, but it must be at least $2.</p>
						<h3 className="text-2xl font-bold">Thanks a lot 💖</h3>
					</div>
					<img alt="Donation Popup in the VShop App" src="/img/donate-mockup.png" />
				</div>
			</PageLayout>
		</>
	);
}
