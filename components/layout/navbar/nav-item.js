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
			
			{/* <a href={{pathname: `${pathSite}`}} className={`nav-link-item drop-trigger ${router.pathname === pathSite ? 'active' : ''}`} onClick={handleClick}
			>
				{navItemText}
			</a> */}
			
			<a href={pathSite} className={`nav-link-item drop-trigger ${router.pathname === pathSite ? 'active' : ''}`} onClick={handleClick}>
				{navItemText}
			</a>

			{!megaMenu ? (
				<DropdownMenu isOpenDropDown={isOpenDropDown} menuItems={menuItems} />
			) : (
				<MegaMenu menuItems={menuItems} />
			)}
		</li>
	);
}
