import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  useEffect(() => {
    const activedMenu =
      window.location.pathname.indexOf('import') > -1 ? 'import' : 'list';

    setSelectedMenu(activedMenu);
  }, []);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={selectedMenu === 'list' ? 'active' : ''}>
            Listagem
          </Link>
          <Link
            to="/import"
            className={selectedMenu === 'import' ? 'active' : ''}
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
