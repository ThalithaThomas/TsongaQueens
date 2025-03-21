import PropTypes from 'prop-types'

const NavLinkComponent = ({href,children}) => {
  return (
    <li className="border-b-[1px] cursor-pointer border-gray-50 mt-5 w-[17rem sm:w-[23rem] py-5 pl-4">
        <a href={href}>{children}</a>
    </li>
  );
};
NavLinkComponent.propTypes = {
    href:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
    };


export default NavLinkComponent