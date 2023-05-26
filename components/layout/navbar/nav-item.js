import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DropdownMenu from "./dropdown-menu";
import MegaMenu from "./mega-menu";
import Link from "next/link";

export default function NavItem({ pathSite, navItemText, menuItems, megaMenu = false }) {
	const [isOpenDropDown, setIsOpenDropDown] = useState(false);
	const handleClick = (e) => {
		setIsOpenDropDown(!isOpenDropDown);
	};

	return (
		<li className={`nav-item ${menuItems ? "nav-item-has-children" : ""}`}>
			<Link href={{pathname: `${pathSite}`}} legacyBehavior>
			<a className="nav-link-item drop-trigger" onClick={handleClick}>
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
