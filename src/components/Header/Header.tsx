import { Display } from "@fluentui/react-components";

interface HeaderProps {
	text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
	return <Display>{text}</Display>;
};

export default Header;
