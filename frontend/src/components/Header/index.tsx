import React, { useContext} from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
    toggleTheme(): void;
    ongName: string;
    handleLogout(): void;
}

const Header: React.FC<Props> = ({ toggleTheme, ongName, handleLogout}) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName}</span>
            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
            <button onClick={handleLogout} type="button">
                <FiPower size={18} color="#e02041" />
            </button>

        </Container>
    );
};

export default Header;