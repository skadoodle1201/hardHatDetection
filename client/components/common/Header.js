// import logoImage from "..safety-helmet.svg";
// import logoImage from "../../public/safety-helmet.png";
import Image from "next/image";
import Link from "next/link";

// console.log(logoImage);
function Header() {
	return (
		<>
			<header className="bs-header" style={{ padding: 0 }}>
				<Link href={`/`} className="logo-wrap">
					<a>
						<Image
							width="80px"
							height="80px"
							alt="Hard hat"
							title="Hard hat"
							className="logo-image"
							src={`/images/safety-helmet.png`}
						/>
					</a>
				</Link>
			</header>
		</>
	);
}

export default Header;
