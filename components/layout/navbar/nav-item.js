import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ pathSite, navItemText, menuItems, megaMenu = false }) {

	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const handleClick = (e) => {
		setIsOpenDropDown(!isOpenDropDown);
	};

	const router = useRouter()

	return (
		<li className={`nav-item ${menuItems ? "nav-item-has-children" : ""}`}>
			<Link href={{pathname: `${pathSite}`}} legacyBehavior>
			<a className={`nav-link-item drop-trigger ${router.pathname === pathSite ? 'active' : ''}`} onClick={handleClick}
			>
				{navItemText}
				{/* <FontAwesomeIcon icon={faAngleDown} /> */}
			</a>
			</Link>
			

			{!megaMenu ? (
				<DropdownMenu isOpenDropDown={isOpenDropDown} menuItems={menuItems} />
			) : (
				<MegaMenu menuItems={menuItems} />
			)}
		</li>
	);
}
